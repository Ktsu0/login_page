import React from "react";
import styles from "./home_page.module.scss";

const numX = 12;
const numY = 12;
document.documentElement.style.setProperty("--numX", numX);

const colorPalette = ["#226559", "#266B47"];

const Blok = ({ onClick, blokClass, colorIndex }) => {
  const backgroundColor = colorIndex !== null ? colorPalette[colorIndex] : undefined;

  return (
    <div
      className={`${styles.blok} ${styles[blokClass]}`}
      onClick={onClick}
      style={backgroundColor ? { backgroundColor } : {}}
    />
  );
};

const HomePage = () => {
  const [bloks, setBloks] = React.useState(() =>
    new Array(numX * numY).fill(0)
  );
  const [colorIndexes, setColorIndexes] = React.useState(() =>
    new Array(numX * numY).fill(null)
  );

  const handleClick = (index) => {
    const column = index % numX;
    const row = Math.floor(index / numY);

    setBloks((prevBloks) =>
      prevBloks.map((value, blokIndex) => {
        if (
          blokIndex % numX === column ||
          Math.floor(blokIndex / numY) === row
        ) {
          return 1 - value;
        } else {
          return value;
        }
      })
    );

    setColorIndexes((prevColors) =>
      prevColors.map((color, i) => {
        if (
          i % numX === column ||
          Math.floor(i / numY) === row
        ) {
          return prevColors[i] === null
            ? Math.floor(Math.random() * colorPalette.length)
            : null;
        } else {
          return color;
        }
      })
    );
  };

  const scoreNum = bloks.reduce((total, n) => total + n, 0);

  const getProgressMessage = (score) => {
    if (score === 144) return "🎉 Você venceu!";
    if (score >= 108) return "🔥 Está quase lá!";
    if (score >= 72) return "💪 Já passou da metade!";
    if (score >= 36) return "👍 Bom começo!";
    return "";
  };

  let scoreClass = styles.scoreLow;
  if (scoreNum >= 108) {
    scoreClass = styles.scoreFinal;
  } else if (scoreNum >= 72) {
    scoreClass = styles.scoreHigh;
  } else if (scoreNum >= 36) {
    scoreClass = styles.scoreMedium;
  }

  const progressMessage = getProgressMessage(scoreNum);

  return (
    <div className={styles.home}>
      <div>
        <h1 className={styles.game}> GRID STRIKE</h1>

        <div className={`${styles.score} ${scoreClass}`}>
          Score: {scoreNum}/{numX * numY}
        </div>

        {progressMessage && (
          <div className={styles.message}>
            {progressMessage}
          </div>
        )}

        <div className={styles.container}>
          {bloks.map((value, index) => {
            const blokClass = value === 1 ? "toggle-on" : "toggle-off";
            return (
              <Blok
                key={index}
                blokClass={blokClass}
                onClick={() => handleClick(index)}
                colorIndex={colorIndexes[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage
