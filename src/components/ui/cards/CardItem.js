// CardItem.js: Exibe um cartão individual com imagem, nome, id e botões para editar e remover
import styles from "./../../container/cards/cards.module.scss";

function CardItem({ cartao, onEditar, onRemover }) {
    return (
        <div className={styles.Card}>
            <img className={styles.img} src={cartao.imgSrc} alt={cartao.nome} />
            <h4>{cartao.nome}</h4>
            <p>ID: {cartao.id}</p>
            <div className={styles.icons}>
                <button className={styles.edit} onClick={onEditar}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className={styles.delete} onClick={onRemover}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default CardItem;
