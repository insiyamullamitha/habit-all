import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function HabitBlock({
  color,
  title,
  description,
  image,
  deleteHabit,
  editHabit,
}) {
  const handleDelete = () => {
    deleteHabit(title);
  };

  const handleEdit = () => {
    editHabit(title);
  };

  const imageFile = "/src/assets/" + image + ".png";
  return (
    <div>
      <div style={{ backgroundColor: color }} className="habit-box">
        <Link style={{ color: "black" }} to="/trackhabit">
          <img className="habit-icon" src={imageFile} alt="Image" />
          <div className="habit-info">
            <div className="habit-title">{title}</div>
            <div className="habit-description">{description}</div>
          </div>
        </Link>
        <div>
          <button className="delete-button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="edit-button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
    </div>
  );
}
