import Habit from "../components/Habit";
import AddHabitMenu from "../components/AddHabitMenu";
import { useState, useEffect } from "react";

export default function MyHabits() {
  const allHabits = [
    {
      title: "Water",
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

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(currenthabits));
  }, [currenthabits]);

  const addHabit = () => {
    setCurrenthabits([...currenthabits, allHabits[0]]);
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
          backgroundColor: "#61dafb",
        }}
        onClick={addHabit}
        className="btn"
      >
        +
      </button>
    </>
  );
}
