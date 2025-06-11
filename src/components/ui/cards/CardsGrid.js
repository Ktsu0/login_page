// CardsGrid.js: Renderiza uma grade fixa de cartões e um botão para adicionar novo cartão
import { FixedSizeGrid } from "react-window";
import styles from "./../../container/cards/cards.module.scss";
import CardItem from "./CardItem";
import AddCardItem from "./AddCardItem";

function CardsGrid({ cartoes, onEditar, onRemover, onAdicionar }) {
    const columnCount = 4;
    const rowHeight = 300;
    const columnWidth = 280;
    const rowCount = Math.ceil((cartoes.length + 1) / columnCount);
    const alturaVisivel = rowHeight * 2;

    const Cell = ({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;

        if (index === cartoes.length) {
            return (
                <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
                    <AddCardItem onClick={onAdicionar} />
                </div>
            );
        }

        const cartao = cartoes[index];
        if (!cartao) return null;

        return (
            <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
                <CardItem
                    cartao={cartao}
                    onEditar={() => onEditar(cartao.uid)}
                    onRemover={() => onRemover(cartao.uid)}
                />
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

export default CardsGrid;
