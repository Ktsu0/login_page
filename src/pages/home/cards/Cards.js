import React from "react";
import styles from "./cards.module.scss";
import { FixedSizeGrid } from "react-window";
import { useNavigate, useLocation } from "react-router-dom";

function Cards() {
    const location = useLocation();
    const navigate = useNavigate();

    // Função para criar os cartões iniciais
    const createCard = () =>
        Array.from({ length: 10 }, (_, i) => ({
            uid: crypto.randomUUID(),
            id: i + 1,
            nome: `Cartão ${i + 1}`,
            imgSrc: "https://media1.giphy.com/media/OkoScrMcY324r1j1HZ/source.gif",
        }));

    // Estado inicial: carrega do localStorage ou cria cartões
    const [cartoes, setCartoes] = React.useState(() => {
        const localData = localStorage.getItem("cartoes");
        return localData ? JSON.parse(localData) : createCard();
    });

    // Atualiza localStorage sempre que os cartões mudam
    React.useEffect(() => {
        localStorage.setItem("cartoes", JSON.stringify(cartoes));
    }, [cartoes]);

    // Recebe cartão editado ou novo via location.state e atualiza o estado
    React.useEffect(() => {
        if (location.state && location.state.card) {
            const novoCartao = location.state.card;

            setCartoes((prevCartoes) => {
                const existe = prevCartoes.some((c) => c.uid === novoCartao.uid);

                if (existe) {
                    // Atualiza cartão existente
                    return prevCartoes.map((c) =>
                        c.uid === novoCartao.uid ? novoCartao : c
                    );
                } else {
                    // Adiciona novo cartão, garante id único incremental
                    const maxId = prevCartoes.reduce(
                        (max, c) => Math.max(max, Number(c.id)),
                        0
                    );
                    return [...prevCartoes, { ...novoCartao, id: novoCartao.id || maxId + 1 }];
                }
            });

            // Limpa o estado para evitar repetição da ação
            navigate(location.pathname, { replace: true, state: null });
        }
    }, [location, navigate]);

    // Função para editar cartão (navega para tela de edição)
    const editarCartao = (uid) => {
        const cartao = cartoes.find((c) => c.uid === uid);
        if (cartao) {
            const { uid, id, nome, imgSrc } = cartao;
            navigate("/EditCards", { state: { uid, id, nome, imgSrc } });
        }
    };

    // Função para remover cartão do estado
    const removerCartao = (uid) => {
        setCartoes((prev) => prev.filter((cartao) => cartao.uid !== uid));
    };

    // Configurações do grid de cartões
    const columnCount = 4;
    const rowHeight = 300;
    const columnWidth = 280;
    const rowCount = Math.ceil((cartoes.length + 1) / columnCount); // +1 para o card de "+"
    const alturaVisivel = rowHeight * 2;

    // Componente para renderizar cada célula do grid de cartões
    const Cell = ({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;

        // Card de "+" para criar novo cartão
        if (index === cartoes.length) {
            return (
                <div
                    style={{ ...style, padding: "10px", boxSizing: "border-box" }}
                    key="add-card"
                >
                    <div className={styles.addCard} onClick={() => navigate("/EditCards")}>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            );
        }

        const cartao = cartoes[index];
        if (!cartao) return null;

        return (
            <div
                key={cartao.uid}
                style={{ ...style, padding: "10px", boxSizing: "border-box" }}
            >
                <div className={styles.Card}>
                    <img className={styles.img} src={cartao.imgSrc} alt={cartao.nome} />
                    <h4>{cartao.nome}</h4>
                    <p>ID: {cartao.id}</p>
                    <div className={styles.icons}>
                        <button className={styles.edit} onClick={() => editarCartao(cartao.uid)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                            className={styles.delete}
                            onClick={() => removerCartao(cartao.uid)}
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
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
    );
}

export default Cards;
