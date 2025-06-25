import { useEffect } from "react"
import Main from "./main/main.js"
import Footer from "./footer/Footer.js"
import styles from "./portifolio.module.scss"

import {
    footerIcons,
    textHeader,
    ghost,
    ghostShadow
} from './js/seusModulos.js'


function Portifolio() {
    useEffect(() => {
        textHeader()
        ghostShadow()
        const cleanupGhost = ghost()
        const cleanupFooter = footerIcons()

        return () => {
            cleanupGhost && cleanupGhost()
            cleanupFooter && cleanupFooter()
        }
    }, [])

    return <div className={styles.portifolio}>
        <Main />
        <Footer />
    </div>
}

export default Portifolio
