function Produtos({ nomeProduto, precoProduto, imagemProduto, descricaoProduto, marca, onAdd }) {
  return (
    <div className="card">
      <img src={imagemProduto} alt={nomeProduto} />
      <div className="infoProduto">
        <p className="marca">{marca}</p>
        <h2>{nomeProduto}</h2>
        <h3>{precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
        <p className="descricao">{descricaoProduto}</p>
        <button
          className="adicionarbtn"
          onClick={(e) => { e.stopPropagation(); onAdd(); }}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
export default Produtos;
