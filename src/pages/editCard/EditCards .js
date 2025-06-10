import Input from "../loginPage/login/inputs/input/Input";
import styles from "./edit_card.module.scss";
import Btns_login from "../loginPage/login/buttons/btns_login/Btns_login";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditCards() {
  const location = useLocation();
  const navigate = useNavigate();
  const { uid, id, nome, imgSrc } = location.state || {};

  const [imagem, setImagem] = useState(imgSrc || "");
  const [nomeCartao, setNomeCartao] = useState(nome || "");
  const [idCartao, setIdCartao] = useState(id || "");

  const salvarAlteracoes = (e) => {
    e.preventDefault();

    const dadosEditados = {
      uid: uid || crypto.randomUUID(),
      id: idCartao,  // agora vem do input editável
      nome: nomeCartao,
      imgSrc: imagem,
    };

    navigate("/home", { state: { card: dadosEditados } });
  };

  return (
    <>
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
            onChange={(e) => setIdCartao(e.target.value)} // permite editar o ID
          />
          <Btns_login text="SALVAR" onClick={salvarAlteracoes} />
        </div>
      </div>
    </>
  );
}

export default EditCards;