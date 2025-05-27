import styles from "./inputs.module.scss"

function Inputs({ type }) {

    const iconMap = {
        text: "fa-solid fa-envelope",
        password: "fa-solid fa-lock",
    }

    const iconClass = iconMap[type] || "fas fa-pen"

    return <>
        <div className={styles.inputWrapper}>
            <input type={type} className={styles.Inputs} />
            <i class={iconClass}></i>
        </div>
    </>
}

export default Inputs
