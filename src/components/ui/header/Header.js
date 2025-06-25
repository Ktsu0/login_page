import styles from "./header.module.scss";
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from "../../../theme/themeContext";
import Logo from "../../../pages/portifolio/header/Logo";
import { useAuth } from "../../../context/AuthContext";

function Header() {
    const location = useLocation();
    const { toggleTheme } = useTheme()

    // Verifica se a rota atual é "/EditCards"
    const isEditPage = location.pathname === "/EditCards";

    // //   Caso queira usar em outras Pages
    // const hideButtonsRoutes = ["/EditCards", "/outraRota"];
    // const isEditPage = hideButtonsRoutes.includes(location.pathname);

    const {logout} = useAuth()
    return (
        <header>
                <Logo />
            {/* Botões só aparecem se NÃO estiver na página de edição */}
            {!isEditPage && (
                <nav className={styles.btns}>
                    <div className={styles.btn}>
                        <Link to={'/'} className={styles.link}><i class="fa-solid fa-id-badge"></i> PORTIFOLIO</Link>
                        <div className={styles.line_1}></div>
                    </div>
                    <div className={styles.btn}>
                        <Link to={'/login'} className={styles.link}><i class="fa-solid fa-user"></i> LOGIN</Link>
                        <div className={styles.line_1}></div>
                    </div>
                    <div className={styles.btn}>
                        <Link to={'/home'} className={styles.link}><i class="fa-solid fa-house"></i> HOME</Link>
                        <div className={styles.line_1}></div>
                    </div>
                    <div className={styles.logout}>
                        <Link className={styles.link} onClick={logout}><i class="fa-solid fa-right-from-bracket"></i></Link>
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
