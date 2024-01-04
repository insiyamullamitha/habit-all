import { useState } from "react";

export default function CreateHabitForm({ createOtherHabit }) {
  const [habitInfo, setHabitInfo] = useState({
    title: "",
    description: "",
    color: "",
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
    <div styles={{ backgroundColor: "white" }} className="habit-menu-container">
      <form onSubmit={handleSubmit}>
        <div className="select-habit">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="select-habit">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            onChange={handleChange}
            required
          />
        </div>
        <div className="select-habit">
          <label htmlFor="color">Color</label>
          <input type="color" id="color" onChange={handleChange} required />
        </div>
        <div className="select-habit">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" onChange={handleChange} />
        </div>
        <button className="habit-submit" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
