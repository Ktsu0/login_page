import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import EditCardForm from "./../../ui/editCard/EditCardForm";

const EditCardsContainer = () => {
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
      id: idCartao,
      nome: nomeCartao,
      imgSrc: imagem,
    };

    navigate("/home", { state: { card: dadosEditados } });
  };

  return (
    <EditCardForm
      imagem={imagem}
      setImagem={setImagem}
      nomeCartao={nomeCartao}
      setNomeCartao={setNomeCartao}
      idCartao={idCartao}
      setIdCartao={setIdCartao}
      onSalvar={salvarAlteracoes}
    />
  );
};

export default EditCardsContainer;
