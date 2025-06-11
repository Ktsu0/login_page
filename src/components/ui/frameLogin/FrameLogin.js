import styles from "./frame_login.module.scss"
import Last_text from '../last_text/LastText';
import Text_info from '../text_info/TextInfo';
import IconsL from "../../container/iconsL/IconsL";
import Buttons from '../../container/buttons/Buttons';
import { useLogin } from '../../../hooks/useLogin';
import Inputs from './../../container/inputs/Inputs'

function FrameLogin() {
    const {
        email, senha,
        emailError, senhaError,
        EmailChange, SenhaChange,
        typLogin
    } = useLogin();


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
