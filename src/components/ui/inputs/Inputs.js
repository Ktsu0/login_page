import React, { useState } from "react";
import styles from "./inputs.module.scss"

function Inputs({ type }) {

    const [showPassword, setShowPassword] = useState(false);

    const iconMap = {
        text: "fa-solid fa-envelope",
        password: "fa-solid fa-lock",
    }

    const iconClass = iconMap[type] || "fas fa-pen"

     const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

    return <>
        <div className={styles.inputWrapper}>
            <input
                type={type === "password" && showPassword ? "text" : type}
                className={styles.Inputs}
            />
            <i className={iconClass}></i>

            {type === "password" && (
                <i
                    className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} ${styles.eyeIcon}`}
                    onClick={toggleShowPassword}
                ></i>
            )}
        </div>
    </>
}

export default Inputs
