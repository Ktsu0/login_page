import style from './last_text.module.scss'
import BtnsText from './../btns_info/Btns_texts';

function Last_text() {
    return <>
        <div className={style.Last_text}>
            <BtnsText text="Não tem uma Conta? Crie uma aqui..." />
        </div>
    </>

}

export default Last_text