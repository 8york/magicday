// import ButtonOne from "../components/ButtonOne";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const hTwos = [
    { text: "Ask who you believe", link: "/ask" },
    { text: "Ask Oracle", link: "/oracle" },
  ];

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };
  // const options = ["cat", "human"];

  return (
    <div className={styles.home}>
      <div className="choice">
        <ul>
          {hTwos.map((tag, index) => (
            <li key={index} onClick={() => handleClick(tag.link)}>
              {tag.text}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="btn">
        {options.map((option) => (
          <ButtonOne key={option} option={option} />
        ))}
      </div> */}
    </div>
  );
}
