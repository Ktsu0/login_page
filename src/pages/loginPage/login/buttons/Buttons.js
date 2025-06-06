import BtnsText from './btns_info/Btns_texts'
import Btns_login from './btns_login/Btns_login'


function Buttons({ typLogin }) {
    return <>
        <BtnsText text="Esqueceu sua Senha?" />
        <Btns_login text="ENTRAR" onClick={typLogin} />
    </>
}

export default Buttons


