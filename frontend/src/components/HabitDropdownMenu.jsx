import { useState } from "react";

export default function HabitDropdownMenu({ allHabits, addHabit }) {
  const [selectedHabit, setSelectedHabit] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    addHabit(selectedHabit);
    setSelectedHabit("");
  };
  return (
    <div className="dropdown-container">
      <form onSubmit={handleAdd}>
        <select
          className="select-habit"
          onChange={(e) => setSelectedHabit(e.target.value)}
          value={selectedHabit}
        >
          <option value="">Select a habit</option>
          {allHabits.map((habit) => (
            <option key={habit.title} value={habit.title}>
              {habit.title}
            </option>
          ))}
        </select>
        <button className="add-button" type="submit">
          <span>+</span>
        </button>
      </form>
    </div>
  );
}
