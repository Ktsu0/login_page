import React from "react";
import styles from "./cards.module.scss"
import { FixedSizeGrid } from "react-window";

function Cards() {
    // --- ESTADO DOS CARTÕES ---
    const [cartoes, setCartoes] = React.useState(
        Array.from({ length: 10 }, (_, i) => ({
            uid: crypto.randomUUID(),
            id: i + 1,
            nome: `Cartão ${i + 1}`,
            icon1: <i className="fa-solid fa-pen-to-square"></i>,
            icon2: <i className="fa-solid fa-trash"></i>,
            imgSrc:
                "https://img.freepik.com/fotos-premium/um-lobo-que-tem-um-fundo-preto-com-um-contorno-branco_905829-12805.jpg",
        }))
    );

    // --- FUNÇÕES DOS CARTÕES ---
    const editarCartao = (uid) => {
        setCartoes((prev) =>
            prev.map((cartao) => {
                if (cartao.uid === uid) {
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

    const removerCartao = (uid) => {
        setCartoes((prev) => prev.filter((cartao) => cartao.uid !== uid));
    };

    // --- CONFIGURAÇÕES DO GRID DE CARTÕES ---
    const columnCount = 4;
    const rowHeight = 300;
    const columnWidth = 280;
    const rowCount = Math.ceil((cartoes.length + 1) / columnCount); // +1 para o card de "+"
    const alturaVisivel = rowHeight * 2;

    // --- COMponente para renderizar cada célula do grid de cartões ---
    const Cell = ({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;

        // Card de "+" para criar novo cartão
        if (index === cartoes.length) {
            return (
                <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
                    <div
                        className={styles.addCard}
                        onClick={() => {
                            const novoNome = prompt("Digite o nome do novo cartão:");
                            if (!novoNome) return;

                            const novoIdStr = prompt("Digite o ID do novo cartão:");
                            const novoId = parseInt(novoIdStr, 10);
                            if (isNaN(novoId)) {
                                alert("ID inválido.");
                                return;
                            }

                            const novaImg = prompt("Cole a URL da imagem do novo cartão:");
                            if (!novaImg) return;

                            const novoCartao = {
                                uid: crypto.randomUUID(),
                                id: novoId,
                                nome: novoNome,
                                icon1: <i className="fa-solid fa-pen-to-square"></i>,
                                icon2: <i className="fa-solid fa-trash"></i>,
                                imgSrc: novaImg,
                            };
                            setCartoes((prev) => [...prev, novoCartao]);
                        }}
                    >
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            );
        }

        const cartao = cartoes[index];
        if (!cartao) return null;

        return (
            <div key={cartao.uid} style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
                <div className={styles.Card}>
                    <img className={styles.img} src={cartao.imgSrc} alt={cartao.nome} />
                    <h4>{cartao.nome}</h4>
                    <p>ID: {cartao.id}</p>
                    <div className={styles.icons}>
                        <button className={styles.edit} onClick={() => editarCartao(cartao.uid)}>
                            {cartao.icon1}
                        </button>
                        <button className={styles.delete} onClick={() => removerCartao(cartao.uid)}>
                            {cartao.icon2}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return <>
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
    </>
}

export default Cards