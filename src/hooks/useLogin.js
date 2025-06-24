// useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../context/AuthContext";

export function useLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailError, setEmailError] = useState("");
    const [senhaError, setSenhaError] = useState("");
    const navigate = useNavigate();

    const EmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!value.includes("@") || !value.includes(".com")) {
            setEmailError("E-mail inválido");
        } else {
            setEmailError("");
        }
    };

    const SenhaChange = (e) => {
        const value = e.target.value;
        setSenha(value);

        if (value !== "123456") {
            setSenhaError("Senha inválida");
        } else {
            setSenhaError("");
        }
    };

    const { login } = useAuth()

    const typLogin = () => {
        if (!emailError && !senhaError && email === "teste@gmail.com" && senha === "123456") {
            alert("Login realizado com sucesso!");
            login()
            navigate("/home");
        } else {
            alert("⚠️ Senha ou E-mail incorretos!");
        }
    };

    return {
        email, senha,
        emailError, senhaError,
        EmailChange, SenhaChange,
        typLogin
    };
}
