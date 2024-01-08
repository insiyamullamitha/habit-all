import { useState } from "react";

export default function CreateHabitForm({ createHabit }) {
  const [habitInfo, setHabitInfo] = useState({
    title: "",
    description: "",
    color: "white",
    image: "nature",
    frequency: "Daily",
    status: "active",
  });

  const handleChange = (e) => {
    setHabitInfo({ ...habitInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createHabit(habitInfo);
  };

  return (
    <div
      styles={{ backgroundColor: "white" }}
      className="other-habit-container"
    >
      <form onSubmit={handleSubmit}>
        <div className="select-habit">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            className="input-box"
            required
          />
        </div>
        <div className="select-habit">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="input-box"
            id="description"
            onChange={handleChange}
            required
          />
        </div>
        <div className="select-habit">
          <label htmlFor="frequency">Frequency:</label>
          <select
            className="input-box"
            id="frequency"
            onChange={handleChange}
            required
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className="select-habit">
          <label htmlFor="image">Icon:</label>
          <select
            className="input-box"
            id="image"
            onChange={handleChange}
            required
          >
            <option value="nature">&#127793;</option>
            <option value="salad">&#129367;</option>
            <option value="pill">&#128138;</option>
            <option value="phone">&#128241;</option>
            <option value="shower">&#128703;</option>
            <option value="book">&#128214;</option>
            <option value="water">&#128167;</option>
            <option value="exercise">&#129728;</option>
            <option value="sleep">&#128564;</option>
            <option value="meditation">&#129496;</option>
            <option value="money">&#128176;</option>
            <option value="computer">&#128187;</option>
            <option value="newspaper">&#128240;</option>
          </select>
        </div>
        <div className="select-habit">
          <label htmlFor="color">Colour:</label>
          <input
            className="input-box"
            style={{ border: "none" }}
            type="color"
            id="color"
            onChange={handleChange}
            placeholder="Enter color"
            required
          />
        </div>
        <button className="habit-submit" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
