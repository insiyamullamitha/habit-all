import Habit from "./Habit";

const HabitList = ({ habits }) => {
  return (
    <div>
      {habits.map((habit) => (
        <Habit key={habit.id} {...habit} />
      ))}
    </div>
  );
};
