import styles from "./header.module.scss";
import { textHeader } from './../../container/textEfect/text';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from "../../../theme/themeContext";
import { useAuth } from "../../../context/AuthContext";

function Header() {
    const location = useLocation();
    const { toggleTheme } = useTheme()

    // Aplica o efeito de texto ao carregar
    useEffect(() => {
        textHeader();
    }, []);

    // Verifica se a rota atual é "/EditCards"
    const isEditPage = location.pathname === "/EditCards";

    // //   Caso queira usar em outras Pages
    // const hideButtonsRoutes = ["/EditCards", "/outraRota"];
    // const isEditPage = hideButtonsRoutes.includes(location.pathname);

    const {logout} = useAuth()
    
    return (
        <header>
            <div className={styles.text}>
                <h1 id="programming-title" className={styles.programming_title}></h1>
            </div>

            {/* Botões só aparecem se NÃO estiver na página de edição */}
            {!isEditPage && (
                <nav className={styles.btns}>
                    <div className={styles.btn}>
                        <Link to={'/'} className={styles.link} onClick={logout}>LOGIN</Link>
                        <div className={styles.line_1}></div>
                    </div>
                    <div className={styles.btn}>
                        <Link to={'/home'} className={styles.link}>HOME</Link>
                        <div className={styles.line_1}></div>
                    </div>
                </nav>
            )}

            {/* Label (hambúrguer ou toggle) aparece SEMPRE */}
            <label className="hamburger">
                <input type="checkbox" onClick={toggleTheme} />
                <svg viewBox="0 0 32 32">
                    <path
                        className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                    </path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
        </header>


    );
}

export default Header;
