import ButtonOne from "../components/ButtonOne";
import styles from "./Home.module.css";

export default function Home() {
  const hTwo = "who do you believe";
  const options = ["cat", "human"];

  return (
    <div className={styles.home}>
      <div className="choice">
        <h2>{hTwo}</h2>
      </div>
      <div className="btn">
        {options.map((option) => (
          <ButtonOne key={option} option={option} />
        ))}
      </div>
    </div>
  );
}
