import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import Habit from "../components/Habit";
import { useState, useEffect } from "react";

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
      <button onClick={addHabit} className="btn">
        Add Habit
      </button>
    </>
  );
}
