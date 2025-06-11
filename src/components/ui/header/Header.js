import styles from "./header.module.scss"
import { textHeader } from '../../../textEfect/text';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    useEffect(() =>
        textHeader()
    )

    return <>
        <header>
            <div className={styles.text}>
                <h1 id="programming-title" className={styles.programming_title}></h1>
            </div>
            <nav className={styles.btns}>
                <div className={styles.btn}>
                    <Link to={'/'} className={styles.link}>LOGIN</Link>
                    <div className={styles.line_1}></div>
                </div>
                <div className={styles.btn}>
                    <Link to={'/home'} className={styles.link}>HOME</Link>
                    <div className={styles.line_1}></div>
                </div>
                <div className={styles.btn}>
                    <Link to={'/EditCards'} className={styles.link}>CARDS</Link>
                    <div className={styles.line_1}></div>
                </div>
            </nav>
        </header>
    </>

}

export default Header