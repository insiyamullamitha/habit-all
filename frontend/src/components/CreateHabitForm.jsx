import { useState } from "react";

export default function CreateHabitForm({ createOtherHabit }) {
  const [habitInfo, setHabitInfo] = useState({
    title: "",
    description: "",
    color: "white",
    image: "",
  });

  const handleChange = (e) => {
    setHabitInfo({ ...habitInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOtherHabit(habitInfo);
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
          <label htmlFor="color">Colour:</label>
          <input
            className="input-box"
            style={{ border: "none !important" }}
            type="color"
            id="color"
            onChange={handleChange}
            placeholder="Enter color"
            required
          />
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
          </select>
        </div>
        <button className="habit-submit" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
