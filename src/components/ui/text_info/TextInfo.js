import styles from "./text_info.module.scss";

function TextInfo() {
  return (
    <div className={styles.TextInfo}>
      <div className={styles.textLogo}>
        <div>Login</div>
        <div className={styles['food-icons']}>
          <i className="fa-solid fa-burger"></i>
          <i className="fa-solid fa-pizza-slice"></i>
          <i className="fa-solid fa-utensils"></i>
          <i className="fa-solid fa-ice-cream"></i>
          <i class="fa-solid fa-hotdog"></i>
        </div>
      </div>
    </div>
  );
}

export default TextInfo;
