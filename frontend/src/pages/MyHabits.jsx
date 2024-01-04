import HabitBlock from "../components/HabitBlock";
import HabitDropdownMenu from "../components/HabitDropdownMenu";
import CreateHabitForm from "../components/CreateHabitForm";
import { useState, useEffect } from "react";
import DismissableAlert from "../components/DismissableAlert";

export default function MyHabits() {
  const allHabits = [
    {
      title: "Hydration",
      description: "Drink 8 glasses of water a day",
      color: "#87ceeb",
      image: "water",
    },
    {
      title: "Sleep",
      description: "Get 8 hours of sleep a day",
      color: "#c587aa",
      image: "sleep",
    },
    {
      title: "Reading",
      description: "Read for 30 minutes a day",
      color: "#ff5b59",
      image: "book",
    },
    {
      title: "Exercise",
      description: "Exercise for 30 minutes a day",
      color: "#f6c555",
      image: "exercise",
    },
    {
      title: "Meditation",
      description: "Meditate for 10 minutes a day",
      color: "#4caf50",
      image: "meditation",
    },
  ];

  const [currenthabits, setCurrenthabits] = useState(() => {
    try {
      const storedHabits = JSON.parse(localStorage.getItem("habits") || []);
      return storedHabits;
    } catch (err) {
      console.error("Error parsing habits from local storage:", err);
      return [];
    }
  });

  const [showHabitDropdown, setShowHabitDropdown] = useState(false);
  const [showHabitForm, setShowHabitForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(currenthabits));
  }, [currenthabits]);

  const addHabit = (habit) => {
    setShowHabitDropdown(false);
    setShowHabitForm(false);
    const isHabitAlreadyAdded = currenthabits.some((h) => h.title === habit);

    if (!isHabitAlreadyAdded) {
      const newHabit = allHabits.find((h) => h.title === habit);

      if (newHabit) {
        setCurrenthabits([newHabit, ...currenthabits]);
      } else {
        if (habit === "Other") {
          setShowHabitForm(true);
        }
        console.error(`Habit with title '${habit}' not found.`);
      }
    } else {
      setShowAlert(true);
      setAlertMessage(`${habit} already exists in your habits.`);
    }
  };

  const createOtherHabit = (newHabit) => {
    setShowHabitForm(false);
    const isHabitAlreadyAdded = currenthabits.some(
      (h) => h.title === newHabit.title
    );
    if (isHabitAlreadyAdded) {
      setShowAlert(true);
      setAlertMessage(`${newHabit} already exists in your habits.`);
      return;
    }
    setCurrenthabits([newHabit, ...currenthabits]);
  };

  const deleteHabit = (title) => {
    setCurrenthabits(currenthabits.filter((habit) => habit.title !== title));
  };

  return (
    <>
      <button
        class="add-habit-button"
        onClick={() => {
          setShowHabitDropdown(!showHabitDropdown);
          setShowHabitForm(false);
        }}
      >
        +
      </button>
      {showHabitDropdown && !showHabitForm && (
        <HabitDropdownMenu allHabits={allHabits} addHabit={addHabit} />
      )}
      {showHabitForm && <CreateHabitForm createOtherHabit={createOtherHabit} />}
      <div>
        {showAlert && (
          <DismissableAlert
            message={alertMessage}
            onClose={() => setShowAlert(false)}
            backgroundColor={"#ffcc80"}
          />
        )}
      </div>
      {currenthabits.map((habit) => (
        <HabitBlock
          key={habit.title}
          title={habit.title}
          description={habit.description}
          color={habit.color}
          image={habit.image}
          deleteHabit={deleteHabit}
        />
      ))}
    </>
  );
}
