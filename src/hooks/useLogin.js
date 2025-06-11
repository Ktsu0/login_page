// useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

        if (value !== "654321") {
            setSenhaError("Senha inválida");
        } else {
            setSenhaError("");
        }
    };

    const typLogin = () => {
        if (!emailError && !senhaError && email === "teste@gmail.com" && senha === "654321") {
            alert("Login realizado com sucesso!");
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
