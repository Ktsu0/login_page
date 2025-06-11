import { useState } from "react";
import styles from "./input.module.scss";

function Input({ type, inputType = "text", value, onChange, error }) {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const tiposComIcone = {
        text: "fa-solid fa-envelope",
        password: "fa-solid fa-lock",
        img: "fa-solid fa-image",
        card: "fa-solid fa-address-card",
        name: "fa-solid fa-user"
    };

    const iconeDoInput = tiposComIcone[type] || "fas fa-pen";

    const ehSenha = inputType === "password";
    const tipoVisual = ehSenha && mostrarSenha ? "text" : inputType;

    function alternarVisibilidadeSenha() {
        setMostrarSenha(!mostrarSenha);
    }

    return (
        <>
            <div className={styles.inputWrapper}>
                <input
                    type={tipoVisual}
                    className={`${styles.Inputs} ${error ? styles.inputError : ""}`}
                    value={value}
                    onChange={onChange}
                />

                {/* Ícone principal do input */}
                <i className={`${iconeDoInput} ${styles.inputIcon}`}></i>
                
                {/* Botão de mostrar/ocultar senha */}
                {ehSenha && (
                    <i
                        className={`fa-solid ${mostrarSenha ? "fa-eye-slash" : "fa-eye"} ${styles.eyeIcon}`}
                        onClick={alternarVisibilidadeSenha}
                    ></i>
                )}
            </div>
            {/* Mensagem de erro abaixo do input */}
            {error && <p className={styles.error}>{error}</p>}
        </>
    );
}

export default Input;