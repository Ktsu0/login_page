import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../context/AuthContext";
import { supabase } from "../lib/supabase";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
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
    setSenhaError("");
  };

  const toggleMode = () => setIsRegister(!isRegister);

  const { taLogado } = useAuth();

  const typLogin = async () => {
    if (emailError || !email || !senha)
      return alert("Por favor, preencha os campos corretamente.");

    if (isRegister) {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: senha,
      });
      if (error) alert("Erro ao registrar: " + error.message);
      else
        alert(
          "Registro realizado! Verifique seu e-mail para confirmar a conta.",
        );
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha,
      });
      if (error) alert("Erro ao logar: " + error.message);
      else navigate("/home");
    }
  };

  return {
    email,
    senha,
    emailError,
    senhaError,
    isRegister,
    EmailChange,
    SenhaChange,
    toggleMode,
    typLogin,
  };
}
