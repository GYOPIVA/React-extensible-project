import './Card.css';
import Produtos from './Produtos.jsx';

function Card({ produtos, adicionarAoCarrinho }) {
  return (
    <div className="card-container">
      {produtos.map((produto, index) => (
        <div key={produto.id ?? index} className="card-wrapper">
          <Produtos
            imagemProduto={produto.imagemProduto}
            nomeProduto={produto.nomeProduto}
            precoProduto={produto.precoProduto}
            descricaoProduto={produto.descricaoProduto}
            marca={produto.marca}
            onAdd={() => adicionarAoCarrinho(produto)}
          />
        </div>
      ))}
    </div>
  );
}

export default Card;
