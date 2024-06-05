import styles from "./Eightball.module.css";

export default function Eightball({ getRandom, shaking, setShaking }) {
  const handleCLick = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      getRandom();
    }, 500);
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.ball} ${shaking ? styles.shake : ""}`}>
        <button className={styles.circle} onClick={handleCLick}>
          <h2>8</h2>
        </button>
      </div>
    </div>
  );
}
