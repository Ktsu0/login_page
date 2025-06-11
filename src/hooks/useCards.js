// useCards.js: Hook customizado que gerencia o estado dos cartões com persistência no localStorage
import { useEffect, useState, useCallback } from "react";

export function useCards(initialCartoes = []) {
  const [cartoes, setCartoes] = useState(() => {
    const localData = localStorage.getItem("cartoes");
    return localData ? JSON.parse(localData) : initialCartoes;
  });

  useEffect(() => {
    localStorage.setItem("cartoes", JSON.stringify(cartoes));
  }, [cartoes]);

  const editarOuAdicionar = useCallback((novoCartao) => {
    setCartoes((prev) => {
      const existe = prev.some((c) => c.uid === novoCartao.uid);
      if (existe) {
        return prev.map((c) => (c.uid === novoCartao.uid ? novoCartao : c));
      } else {
        const maxId = prev.reduce((max, c) => Math.max(max, Number(c.id)), 0);
        return [...prev, { ...novoCartao, id: novoCartao.id || maxId + 1 }];
      }
    });
  }, []);

  const removerCartao = useCallback((uid) => {
    setCartoes((prev) => prev.filter((c) => c.uid !== uid));
  }, []);

  return { cartoes, setCartoes, editarOuAdicionar, removerCartao };
}

