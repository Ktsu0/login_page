import Input from "../input/Input";
import Btns_login from "../btns_login/Btns_login";
import styles from "./../../../pages/editCard/edit_card.module.scss";

const EditCardForm = ({
  imagem,
  setImagem,
  nomeCartao,
  setNomeCartao,
  idCartao,
  setIdCartao,
  onSalvar,
}) => {
  return (
    <div className={styles.frameBox}>
      <div className={styles.frame}>
        <h1 className={styles.textEdit}>EDIT CARDS</h1>

        <Input
          type="img"
          inputType="text"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <Input
          type="name"
          inputType="text"
          value={nomeCartao}
          onChange={(e) => setNomeCartao(e.target.value)}
        />
        <Input
          type="card"
          inputType="text"
          value={idCartao}
          onChange={(e) => setIdCartao(e.target.value)}
        />
        <Btns_login text="SALVAR" onClick={onSalvar} />
      </div>
    </div>
  );
};

export default EditCardForm;
