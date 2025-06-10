import styles from "./frame_login.module.scss"
import Last_text from './../../../components/ui/last_text/LastText';
import Text_info from './../../../components/ui/text_info/TextInfo';
import IconsL from "./iconsL/IconsL";
import Inputs from "./inputs/Inputs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Buttons from './buttons/Buttons';

function FrameLogin() {

    const navigate = useNavigate();
    const typLogin = () => {
        if (!emailError && !senhaError && email === "teste@gmail.com" && senha === "654321") {
            alert("Login realizado com sucesso!");
            navigate("/home");
        } else {
            alert("⚠️ Senha ou E-mail incorretos!");
        }
    };
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailError, setEmailError] = useState("");
    const [senhaError, setSenhaError] = useState("");

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

    return <>
        <div className={styles.frame}>
            <Text_info />

            <Inputs
                email={email}
                senha={senha}
                emailError={emailError}
                senhaError={senhaError}
                EmailChange={EmailChange}
                SenhaChange={SenhaChange}
            />

            <Buttons typLogin={typLogin} />

            <div className={styles.text_ou}>OU</div>
            <IconsL />
            <Last_text />
        </div>
    </>
}

export default FrameLogin
