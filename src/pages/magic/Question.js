import styles from "./Question.module.css";

export default function Question({ showQuestion, query, onSubmit }) {
  return (
    <form
      className={styles.query}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        placeholder="ask it and click on magic 8"
        onChange={showQuestion}
        value={query}
      />
    </form>
  );
}
