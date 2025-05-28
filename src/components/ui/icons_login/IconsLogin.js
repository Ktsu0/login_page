import styles from "./iconsLogin.module.scss"

function IconsLogin({ type }) {
    const iconLogins = {
        google: "fa-brands fa-google",
        apple: "fa-brands fa-apple",
        windows: "fa-brands fa-windows"
    };

    return <>
        <i className={`${iconLogins[type]} ${styles.icon}`}></i>
    </>
}

export default IconsLogin;
