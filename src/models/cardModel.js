// cardModel.js: Gera um array inicial de cartões fictícios com IDs únicos e imagens padrão
export function createCards() {
  return Array.from({ length: 10 }, (_, i) => ({
    uid: crypto.randomUUID(),
    id: i + 1,
    nome: `Cartão ${i + 1}`,
    imgSrc: "https://media1.giphy.com/media/OkoScrMcY324r1j1HZ/source.gif",
  }));
}
