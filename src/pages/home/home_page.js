import React from "react";
import styles from "./home_page.module.scss";

const numX = 12;
const numY = 12;

document.documentElement.style.setProperty("--numX", numX);

// Função que gera cor RGB aleatória
const randomColor = () => {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const Blok = ({ onClick, blokClass, color }) => {
  return (
    <div
      className={`${styles.blok} ${styles[blokClass]}`}
      onClick={onClick}
      style={color ? { backgroundColor: color } : {}}
    />
  );
};

const HomePage = () => {
  // Estado para on/off dos blocos
  const [bloks, setBloks] = React.useState(() =>
    new Array(numX * numY).fill(0)
  );

  // Estado para cores dos blocos (null = sem cor)
  const [colors, setColors] = React.useState(() =>
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

    setColors((prevColors) =>
      prevColors.map((color, colorIndex) => {
        if (
          colorIndex % numX === column ||
          Math.floor(colorIndex / numY) === row
        ) {
          // Se o bloco vai ficar ativo (0->1), gera cor nova
          // Se vai desativar (1->0), remove a cor
          return prevColors[colorIndex] === null ? randomColor() : null;
        } else {
          return color;
        }
      })
    );
  };

  const scoreNum = bloks.reduce((total, n) => total + n, 0);

  return (
    <div>
      <div className={styles.score}>
        score: {scoreNum}/{numX * numY}
      </div>
      <div className={styles.container}>
        {bloks.map((value, index) => {
          const blokClass = value === 1 ? "toggle-on" : "toggle-off";
          return (
            <Blok
              key={index}
              blokClass={blokClass}
              onClick={() => handleClick(index)}
              color={colors[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
