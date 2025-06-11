// AddCardItem.js: Botão visual para adicionar um novo cartão à grade
import styles from "./../../container/cards/cards.module.scss";

function AddCardItem({ onClick }) {
    return (
        <div className={styles.addCard} onClick={onClick}>
            <i className="fa-solid fa-plus"></i>
        </div>
    );
}

export default AddCardItem;
