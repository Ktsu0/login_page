import Input from "../loginPage/login/inputs/input/Input"
import styles from "./edit_card.module.scss"
import Btns_login from './../loginPage/login/buttons/btns_login/Btns_login';

function EditCards({typLogin, img, card, name}) {
    return <>
        <div className={styles.frameBox}>
            <div className={styles.frame}>
                <h1 className={styles.textEdit}>EDIT CARDS</h1>
                <Input
                type="img"
                inputType="text"
                value={img}/>
                <Input
                type="name"
                inputType="text"
                value={name}/>
                <Input
                type="card"
                inputType="text"
                value={card}/>
                <Btns_login text="ENTRAR" onClick={typLogin} />
            </div>
        </div>
    </>
}

export default EditCards