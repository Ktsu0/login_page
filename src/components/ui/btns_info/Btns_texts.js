import styles from "./btns_text.module.scss";

function Btns_text({ text, onClick }) {
  return (
    <>
      <button className={styles.Btns_text} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Btns_text;
