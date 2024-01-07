import HabitBlock from "../components/HabitBlock";
import CreateHabitForm from "../components/CreateHabitForm";
import { useState, useEffect } from "react";
import DismissableAlert from "../components/DismissableAlert";

export default function MyHabits() {
  const [currenthabits, setCurrenthabits] = useState(() => {
    try {
      const storedHabits = JSON.parse(localStorage.getItem("habits") || []);
      return storedHabits;
    } catch (err) {
      console.error("Error parsing habits from local storage:", err);
      return [];
    }
  });

  const [showHabitForm, setShowHabitForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [frequency, setFrequency] = useState("All");
  const [showFrequency, setShowFrequency] = useState(false);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(currenthabits));
    if (currenthabits.length > 0) {
      setShowFrequency(true);
    }
  }, [currenthabits]);

  const createHabit = (newHabit) => {
    setShowHabitForm(false);
    const isHabitAlreadyAdded = currenthabits.some(
      (h) => h.title === newHabit.title
    );
    if (isHabitAlreadyAdded) {
      setShowAlert(true);
      setAlertMessage(`${newHabit} already exists in your habits.`);
      return;
    }
    setCurrenthabits([...currenthabits, newHabit]);
  };

  const editHabit = (title) => {
    console.log("Editing habit:", title);
  };

  const deleteHabit = (title) => {
    setCurrenthabits(currenthabits.filter((habit) => habit.title !== title));
    if (currenthabits.length === 1) {
      setShowFrequency(false);
    }
  };

  return (
    <>
      {showFrequency && (
        <div className="frequency-buttons">
          <button
            className={`frequency ${frequency === "All" ? "active" : ""}`}
            onClick={() => {
              setFrequency("All");
            }}
          >
            All
          </button>
          <button
            className={`frequency ${frequency === "Daily" ? "active" : ""}`}
            onClick={() => {
              setFrequency("Daily");
            }}
          >
            Daily
          </button>
          <button
            className={`frequency ${frequency === "Weekly" ? "active" : ""}`}
            onClick={() => {
              setFrequency("Weekly");
            }}
          >
            Weekly
          </button>
          <button
            className={`frequency ${frequency === "Monthly" ? "active" : ""}`}
            onClick={() => {
              setFrequency("Monthly");
            }}
          >
            Monthly
          </button>
        </div>
      )}
      {currenthabits
        .filter((habit) => habit.frequency === frequency || frequency === "All")
        .map((habit) => (
          <HabitBlock
            key={habit.title}
            title={habit.title}
            description={habit.description}
            color={habit.color}
            image={habit.image}
            deleteHabit={deleteHabit}
            editHabit={editHabit}
          />
        ))}
      <button
        className="add-habit-button"
        onClick={() => {
          setShowHabitForm(!showHabitForm);
        }}
      >
        +
      </button>
      {showHabitForm && <CreateHabitForm createHabit={createHabit} />}
      <div>
        {showAlert && (
          <DismissableAlert
            message={alertMessage}
            onClose={() => setShowAlert(false)}
            backgroundColor={"#ffcc80"}
          />
        )}
      </div>
    </>
  );
}
