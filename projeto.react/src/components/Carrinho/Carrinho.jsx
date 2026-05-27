import './Carrinho.css';

const fecharCarrinho = () => {
  const mostrarprodutos = document.getElementById("carrinho-compras")
  mostrarprodutos.classList.remove("mostrar-carrinho")
}

function Carrinho({ itens, removerDoCarrinho, limparCarrinho }) {
  const total = itens.reduce((acc, item) => acc + Number(item.precoProduto || 0), 0);

  return (
    <aside className="carrinho-compras" id='carrinho-compras'>
      <span className="material-symbols-outlined closebtn" id='btnclose' onClick={fecharCarrinho}>close</span>
      <h2>Carrinho</h2>
      {itens.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          <ul className="lista-carrinho">
            {itens.map((item, index) => (
              <li key={index} className="item-carrinho">
                <img src={item.imagemProduto} alt={item.nomeProduto} className="thumb" />
                <div className="detalhes">
                  <strong>{item.nomeProduto}</strong>
                  <span>{item.marca}</span>
                  <span>{Number(item.precoProduto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                <button className="removerbtn" onClick={() => removerDoCarrinho(index)}>Remover</button>
              </li>
            ))}
          </ul>

          <div className="resumo">
            <p><strong>Total:</strong> {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <div className="acoes">
              <button className="limparbtn" onClick={limparCarrinho}>Limpar Carrinho</button>
              <button className="finalizarbtn">Finalizar Compra</button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

export default Carrinho;
