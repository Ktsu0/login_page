import styles from "./login_page.module.scss"
import Inputs from './../../components/ui/inputs/Inputs';
import BtnsText from './../../components/ui/btns_info/Btns_texts';
import Btns_login from './../../components/ui/btns_login/Btns_login';
import IconsLogin from './../../components/ui/icons_login/IconsLogin';
import Last_text from './../../components/ui/last_text/LastText';
import Text_info from './../../components/ui/text_info/TextInfo';

function LoginPages() {
    return <>
        <div className={styles.frame}>
            <Text_info />
            <Inputs type="text" />
            <Inputs type="password" />
            <BtnsText text="Esqueceu sua Senha?" />
            <Btns_login text="ENTRAR" />
            <div className={styles.text_ou}>OU</div>
            <div className='icons'>
                <IconsLogin type="google" />
                <IconsLogin type="apple" />
                <IconsLogin type="windows" />
            </div>
            <Last_text />
        </div>
    </>

}
export default LoginPages