import styles from "./btns_login.module.scss"

function Btns_login({text}) {

    return <>
        <button className={styles.Btns_login}>{text}</button>
    </>
}

export default Btns_login


