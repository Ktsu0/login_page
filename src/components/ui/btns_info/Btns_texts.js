import styles from "./btns_text.module.scss"

function Btns_text({text}) {

    return <>
        <button className={styles.Btns_text}>{text}</button>
    </>
}

export default Btns_text


