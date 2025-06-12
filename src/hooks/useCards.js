import { useEffect, useState, useCallback } from "react";

// Hook customizado que gerencia o estado dos cartões com persistência em localStorage
export function useCards(initialCartoes = []) {
  // Inicializa estado com dados do localStorage ou valor inicial
  const [cartoes, setCartoes] = useState(() => {
    const localData = localStorage.getItem("cartoes");
    return localData ? JSON.parse(localData) : initialCartoes;
  });

  // Atualiza o localStorage sempre que os cartões mudam
  useEffect(() => {
    localStorage.setItem("cartoes", JSON.stringify(cartoes));
  }, [cartoes]);

  // Adiciona novo cartão ou edita um existente com base no uid
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

  // Remove cartão com base no uid
  const removerCartao = useCallback((uid) => {
    setCartoes((prev) => prev.filter((c) => c.uid !== uid));
  }, []);

  // Retorna o estado e as funções de manipulação
  return {
    cartoes,
    setCartoes,
    editarOuAdicionar,
    removerCartao
  };
}
