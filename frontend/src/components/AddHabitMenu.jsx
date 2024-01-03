export default function AddHabitMenu() {
  //dropdown menu for adding type of habit
  const [showMenu, setShowMenu] = useState(false);
  const [habitName, setHabitName] = useState("");

  function closeMenu() {
    setShowMenu(false);
  }

  function addHabit() {
    setShowMenu(true);
  }

  function handleHabitChange(event) {
    setHabitName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowMenu(false);
  }
  return (
    <>
      <div className="addHabit">
        <button onClick={addHabit} className="btn">
          Add Habit
        </button>
      </div>
      {showMenu && (
        <div className="addHabitMenu">
          <form onSubmit={handleSubmit}>
            <label>
              <select value={habitName} onChange={handleHabitChange}>
                <option value="water">Water</option>
                <option value="sleep">Sleep</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button onClick={closeMenu} className="btn">
            Close
          </button>
        </div>
      )}
    </>
  );
}
