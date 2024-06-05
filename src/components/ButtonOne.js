import { useNavigate } from "react-router-dom";
import "./Button.css";

export default function ButtonOne({ option }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${option}`);
  };

  return (
    <div className="btn">
      <button className={option} onClick={handleClick}>
        {option}
      </button>
    </div>
  );
}
