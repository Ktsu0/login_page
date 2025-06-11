import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardsGrid from "../../ui/cards/CardsGrid";
import { createCards } from '../../../models/cardModel';
import { useCards } from "../../../hooks/useCards";

const CardsContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    cartoes,
    editarOuAdicionar,
    removerCartao
  } = useCards(createCards());

  const card = location.state?.card;

  useEffect(() => {
    if (card) {
      editarOuAdicionar(card);
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [card, navigate, editarOuAdicionar]);

  const handleEditar = (uid) => {
    const card = cartoes.find((c) => c.uid === uid);
    if (card) navigate("/EditCards", { state: card });
  };

  return (
    <CardsGrid
      cartoes={cartoes}
      onEditar={handleEditar}
      onRemover={removerCartao}
      onAdd={() => navigate("/EditCards")}
    />
  );
};

export default CardsContainer;
