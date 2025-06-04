import React from "react";
import styles from "./home_page.module.scss";
import { FixedSizeGrid } from "react-window";

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
  const [bloks, setBloks] = React.useState(() => new Array(numX * numY).fill(0));
  const [colorIndexes, setColorIndexes] = React.useState(() => new Array(numX * numY).fill(null));

  const [cartoes, setCartoes] = React.useState(
    Array.from({ length: 500 }, (_, i) => ({
      id: i + 1,
      nome: `Cartão ${i + 1}`,
      icon1: <i className="fa-solid fa-pen-nib"></i>,
      icon2: <i className="fa-solid fa-xmark"></i>,
      imgSrc: "https://img.freepik.com/fotos-premium/um-lobo-que-tem-um-fundo-preto-com-um-contorno-branco_905829-12805.jpg"
    }))
  );

  const editarCartao = (id) => {
  setCartoes(prev =>
    prev.map(cartao => {
      if (cartao.id === id) {
        const novoNome = prompt("Digite o novo nome do cartão:", cartao.nome);
        const novoIdStr = prompt("Digite o novo ID do cartão:", cartao.id);
        const novaImg = prompt("Cole a nova URL da imagem:", cartao.imgSrc);

        const novoId = parseInt(novoIdStr, 10);
        if (!isNaN(novoId) && novoNome && novaImg) {
          return {
            ...cartao,
            id: novoId,
            nome: novoNome,
            imgSrc: novaImg,
          };
        }
      }
      return cartao;
    })
  );
};

  const removerCartao = (id) => {
    setCartoes(prev => prev.filter(cartao => cartao.id !== id));
  };

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
        if (i % numX === column || Math.floor(i / numY) === row) {
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

  const columnCount = 4;
  const rowHeight = 400;
  const columnWidth = 280;
  const rowCount = Math.ceil(cartoes.length / columnCount);
  const alturaVisivel = rowHeight * 2;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    const cartao = cartoes[index];
    if (!cartao) return null;

    return (
      <div style={{ ...style, padding: '10px', boxSizing: 'border-box' }}>
        <div className={styles.Card}>
          <img className={styles.img} src={cartao.imgSrc} alt={cartao.nome} />
          <h4>{cartao.nome}</h4>
          <p>ID: {cartao.id}</p>
          <div className={styles.icons}>
            <button onClick={() => editarCartao(cartao.id)}>{cartao.icon1}</button>
            <button onClick={() => removerCartao(cartao.id)}>{cartao.icon2}</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.body}>
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
      <div className={styles.cartaoContainer}>
        <FixedSizeGrid
          columnCount={columnCount}
          columnWidth={columnWidth}
          height={alturaVisivel}
          rowCount={rowCount}
          rowHeight={rowHeight}
          width={columnWidth * columnCount + 20}
        >
          {Cell}
        </FixedSizeGrid>
      </div>
    </div>
  );
};

export default HomePage;
