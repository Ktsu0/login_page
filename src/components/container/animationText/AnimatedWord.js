import React, { useEffect, useState } from "react";
import styles from "./animatedWord.module.scss";

const AnimatedWord = ({ word }) => {
  const letters = word.split("");
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % letters.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <h1 className={styles.word}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className={`${styles.letter} ${activeIndex === i ? styles.active : ""}`}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedWord;
