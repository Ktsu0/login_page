import styles from "./login_page.module.scss"
import Inputs from './../../components/ui/inputs/Inputs';
import BtnsText from './../../components/ui/btns_info/Btns_texts';
import Btns_login from './../../components/ui/btns_login/Btns_login';
import IconsLogin from './../../components/ui/icons_login/IconsLogin';
import Last_text from './../../components/ui/last_text/LastText';
import Text_info from './../../components/ui/text_info/TextInfo';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginPages() {
    
    const navigate = useNavigate();

    const typLogin = () => {
    if (!emailError && !senhaError && email && senha === "654321") {
        navigate("/home");
    } else {
        alert("Senha ou E-mail incorretos.");
    }
};

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailError, setEmailError] = useState("");
    const [senhaError, setSenhaError] = useState("");

    const EmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // if (!value.includes("@") || !value.includes(".com")) {
        if (!value.includes("test@gmail.com")){
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

    return (
        <div className={styles.frame}>
            <Text_info />
            
            <Inputs
                type="text"
                value={email}
                onChange={EmailChange}
                error={emailError}
            />
            
            <Inputs
                type="password"
                value={senha}
                onChange={SenhaChange}
                error={senhaError}
            />

            <BtnsText text="Esqueceu sua Senha?" />
            <Btns_login text="ENTRAR" onClick={typLogin} />

            <div className={styles.text_ou}>OU</div>
            <div className='icons'>
                <IconsLogin type="google" />
                <IconsLogin type="apple" />
                <IconsLogin type="windows" />
            </div>

            <Last_text />
        </div>
    );
}

export default LoginPages;
