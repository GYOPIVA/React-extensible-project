import './Navbar.css';
import '../Carrinho/Carrinho.css'
import CardCadastro from '../CardLogin/CardCadastro';
import CardLogin from '../CardLogin/Cardlogin';

const mostrarCarrinho = () => {
  const mostrarprodutos = document.getElementById("carrinho-compras")
  mostrarprodutos.classList.add("mostrar-carrinho")
}

const entrarlogin = () => {
  const logincontainer = document.getElementById("login-container")
  logincontainer.classList.add("mostrar-card")
}

const cadastro = () => {
  const cadastrocontainer = document.getElementById("container-card-cadastro")
  cadastrocontainer.classList.add("mostrar-card")
}

function Login({ itslogin, quantidade }) {
  return (
    <nav className="navbar">
      <div className="options-nav">
        <ul>
          <a href="#" className="logo"><img src="#" alt="" />VITRINE DA VITÓRIA</a>
          <li><a className="option active" href="#">Home</a></li>
          <li><a className="option" href="#">Camisas Masculinas</a></li>
          <li><a className="option" href="#">Camisas Femininas</a></li>
          <li><a className="option" href="#">Calças Femininas</a></li>
          <li><a className="option" href="#">Calças Masculinas</a></li>
        </ul>
      </div>

      <div className="myuser">
        <a href="#" className="user" onClick={entrarlogin}>
          {itslogin}
        </a>
        <a href="#" className='cadastro' onClick={cadastro}>Cadastrar</a>

        <div className="buy" id='card-buy' onClick={mostrarCarrinho}>
          <a href="#" className="cart" id='cart'>
            <span className="material-symbols-outlined carrinho">shopping_cart</span> Carrinho
          </a>
          <div className="itenscarrinho">{quantidade}</div>
        </div>
      </div>
    </nav>
  );
}

export default Login;
