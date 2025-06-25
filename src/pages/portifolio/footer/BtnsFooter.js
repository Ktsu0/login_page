import styles from "./footer.module.scss"

function BtnsFooter({ id, iconClass }) {
    return <>
        <button className={styles.btn_footer} id={id}>
            <i className={iconClass}></i>
        </button>
    </>
}

export default BtnsFooter