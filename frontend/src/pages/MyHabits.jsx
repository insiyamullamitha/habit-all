import Habit from "../components/Habit";
import { useState } from "react";

export default function MyHabits() {
  const allHabits = [
    {
      title: "Water",
      description: "Drink 8 glasses of water a day",
      color: "#3f82fa",
      image: "waterimage",
    },
    {
      title: "Sleep",
      description: "Get 8 hours of sleep a day",
      color: "#ff5b59",
      image: "sleepimage",
    },
  ];

  const addHabit = () => {
    setCurrenthabits([...currenthabits, allHabits[0]]);
  };

  const [currenthabits, setCurrenthabits] = useState([]);
  return (
    <>
      {currenthabits.map((habit) => (
        <Habit
          key={habit.title}
          title={habit.title}
          description={habit.description}
          color={habit.color}
          image={habit.image}
        />
      ))}
      <button onClick={addHabit} className="btn">
        Add Habit
      </button>
    </>
  );
}
