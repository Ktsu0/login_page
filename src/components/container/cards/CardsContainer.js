import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardsGrid from "../../ui/cards/CardsGrid";
import { createCards } from '../../../models/cardModel';
import { useCards } from "../../../hooks/useCards";

const CardsContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Hook personalizado para manipular os cartões com persistência
  const {
    cartoes,
    editarOuAdicionar,
    removerCartao
  } = useCards(createCards());

  // Recupera cartão enviado via estado da navegação (ao editar ou adicionar)
  const card = location.state?.card;

  // Se houver cartão no estado, adiciona ou edita e limpa o estado de navegação
  useEffect(() => {
    if (card) {
      editarOuAdicionar(card);
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [card, navigate, editarOuAdicionar]);

  // Redireciona para a tela de edição passando o cartão como estado
  const handleEditar = (uid) => {
    const card = cartoes.find((c) => c.uid === uid);
    if (card) navigate("/EditCards", { state: card });
  };

  // Renderiza o grid de cartões com funções de ação
  return (
    <CardsGrid
      cartoes={cartoes}
      onEditar={handleEditar}
      onRemover={removerCartao}
      onAdicionar={() => navigate("/EditCards")}
    />
  );
};

export default CardsContainer;
