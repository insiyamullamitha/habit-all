import Habit from "../components/Habit";
import HabitDropdownMenu from "../components/HabitDropdownMenu";
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
      console.log(err);
      return [];
    }
  });

  const [showHabitMenu, setShowHabitMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(currenthabits));
  }, [currenthabits]);

  const addHabit = (habit) => {
    setShowHabitMenu(false);
    // Check if the habit is already in the list
    const isHabitAlreadyAdded = currenthabits.some((h) => h.title === habit);

    if (!isHabitAlreadyAdded) {
      const newHabit = allHabits.find((h) => h.title === habit);

      if (newHabit) {
        // Add the habit only if it's not already present
        setCurrenthabits([...currenthabits, newHabit]);
      } else {
        console.error(`Habit with title '${habit}' not found.`);
      }
    } else {
      <DismissableAlert message={`Habit '${habit}' is already added.`} />;

      // Optionally, you can provide feedback to the user that the habit is already added
    }
  };

  const deleteHabit = (title) => {
    setCurrenthabits(currenthabits.filter((habit) => habit.title !== title));
  };

  return (
    <>
      {currenthabits.map((habit) => (
        <Habit
          key={habit.title}
          title={habit.title}
          description={habit.description}
          color={habit.color}
          image={habit.image}
          deleteHabit={deleteHabit}
        />
      ))}
      <button
        style={{
          fontSize: "3vh",
        }}
        onClick={() => setShowHabitMenu(true)}
        className="btn"
      >
        +
      </button>
      {showHabitMenu && (
        <HabitDropdownMenu allHabits={allHabits} addHabit={addHabit} />
      )}
    </>
  );
}
