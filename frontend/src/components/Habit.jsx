import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Habit({
  color,
  title,
  description,
  image,
  deleteHabit,
}) {
  const handleDelete = () => {
    deleteHabit(title);
  };
  const imageFile = "/src/assets/" + image + ".png";
  return (
    <div>
      <div style={{ backgroundColor: color }} className="habit-box">
        <img className="habit-icon" src={imageFile} alt="Image" />
        <div className="habit-info">
          <div className="habit-title">{title}</div>
          <div className="habit-description">{description}</div>
        </div>
        <div>
          <button className="delete-button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
}
