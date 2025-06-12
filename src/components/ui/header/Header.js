import styles from "./header.module.scss";
import { textHeader } from './../../container/textEfect/text';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    // Aplica o efeito de texto ao carregar
    useEffect(() => {
        textHeader();
    }, []);

    // Verifica se a rota atual é "/EditCards"
    const isEditPage = location.pathname === "/EditCards";

    // //   Caso queira usar em outras Pages
    // const hideButtonsRoutes = ["/EditCards", "/outraRota"];
    // const isEditPage = hideButtonsRoutes.includes(location.pathname);

    return (
        <header>
            <div className={styles.text}>
                <h1 id="programming-title" className={styles.programming_title}></h1>
            </div>

            {/* Só exibe os botões se NÃO estiver na página de edição */}
            {!isEditPage && (
                <nav className={styles.btns}>
                    <div className={styles.btn}>
                        <Link to={'/'} className={styles.link}>LOGIN</Link>
                        <div className={styles.line_1}></div>
                    </div>
                    <div className={styles.btn}>
                        <Link to={'/home'} className={styles.link}>HOME</Link>
                        <div className={styles.line_1}></div>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
