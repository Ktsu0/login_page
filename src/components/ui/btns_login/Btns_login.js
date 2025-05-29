import styles from "./btns_login.module.scss"

function Btns_login({text, onClick}) {

    return <>
        <button className={styles.Btns_login} onClick={onClick}>{text}</button>
    </>
}

export default Btns_login


