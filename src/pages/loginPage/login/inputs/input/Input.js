import { useState } from "react";
import styles from "./input.module.scss";

function Input({ type, inputType = "text", value, onChange, error }) {
    const [showPassword, setShowPassword] = useState(false);

    const iconMap = {
        text: "fa-solid fa-envelope",
        password: "fa-solid fa-lock",
        img: "fa-solid fa-image",
        card: "fa-solid fa-address-card",
        name: "fa-solid fa-user"
    };

    const iconClass = iconMap[type] || "fas fa-pen";

    const isPasswordInput = inputType === "password";
    const currentInputType = isPasswordInput && showPassword ? "text" : inputType;

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <>
            <div className={styles.inputWrapper}>
                <input
                    type={currentInputType}
                    className={`${styles.Inputs} ${error ? styles.inputError : ""}`}
                    value={value}
                    onChange={onChange}
                />
                <i className={`${iconClass} ${styles.inputIcon}`}></i>

                {isPasswordInput && (
                    <i
                        className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} ${styles.eyeIcon}`}
                        onClick={toggleShowPassword}
                    ></i>
                )}
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </>
    );
}

export default Input;