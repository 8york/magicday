import styles from "./Cat.module.css";
export default function Cat() {
  return (
    <div className={styles.catPage}>
      <h2>cats all</h2>
      <div className={styles.img}></div>
    </div>
  );
}
