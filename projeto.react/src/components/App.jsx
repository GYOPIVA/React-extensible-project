import { useState } from "react";
import Card from "./Card/Card";
import imagemteste from '../assets/camisa.webp'
import camisa01 from '../assets/camisabasica.webp'
import camisa02 from '../assets/camisabasica2.webp'
import camisa03 from '../assets/camisabasica3.webp'
import vestido1 from '../assets/vestido1.webp'
import vestido2 from '../assets/vestido2.webp'
import vestido3 from '../assets/vestido3.webp'
import vestido4 from '../assets/vestido4.webp'
import vestido5 from '../assets/vestido5.webp'
import calcaM1 from '../assets/calçaM1.webp'
import calcaM2 from '../assets/calcaM2.webp'
import calcaF1 from '../assets/calcaF1.webp'
import calcaF2 from '../assets/calcaF2.webp'
import bolsa1 from '../assets/bolsa1.webp'
import bolsa2 from '../assets/bolsa2.webp'
import CardCadastro from "./CardLogin/CardCadastro";
import Carrinho from "./Carrinho/Carrinho";
import Login from "./NavBar/Login";
import CardLogin from "./CardLogin/Cardlogin";


const produtos = [
  {
    id: 1,
    imagemProduto: camisa03,
    nomeProduto: "Camisa Polo",
    precoProduto: 79.9,
    descricaoProduto: "Camisa polo confortável",
    marca: "Marca A"
  },
  {
    id: 2,
    imagemProduto: camisa01,
    nomeProduto: "Camisa Jeans",
    precoProduto: 129.9,
    descricaoProduto: "Camisa jeans slim",
    marca: "Marca B"
  },
  {
    id: 3,
    imagemProduto: vestido2,
    nomeProduto: "Vestido Simples Laranja",
    precoProduto: 149.0,
    descricaoProduto: "Vestido leve para o dia a dia",
    marca: "Marca C"
  },
  {
    id: 4,
    imagemProduto: camisa02,
    nomeProduto: "Camisa Xadrez",
    precoProduto: 159.9,
    descricaoProduto: "Camisa Xadrez",
    marca: "Marca B"
  },
  {
    id: 5,
    imagemProduto: vestido1,
    nomeProduto: "Vestido Floral",
    precoProduto: 149.0,
    descricaoProduto: "Vestido leve para o dia a dia",
    marca: "Marca C"
  },
  {
    id: 6,
    imagemProduto: vestido3,
    nomeProduto: "Vestido Floral",
    precoProduto: 149.0,
    descricaoProduto: "Vestido leve para o dia a dia",
    marca: "Marca C"
  },
  {
    id: 7,
    imagemProduto: vestido4,
    nomeProduto: "Vestido Listrado Rosa",
    precoProduto: 149.0,
    descricaoProduto: "Vestido listrado leve para o dia a dia",
    marca: "Marca C"
  },
  {
    id: 8,
    imagemProduto: vestido5,
    nomeProduto: "Vestido Preto Black",
    precoProduto: 149.0,
    descricaoProduto: "Vestido leve para o dia a dia",
    marca: "Marca C"
  },
  {
    id: 9,
    imagemProduto: calcaF2,
    nomeProduto: "Calça Jeans Slim Feminina",
    precoProduto: 149.0,
    descricaoProduto: "Calça Jeans Slim Premium Feminina Moda todo dia",
    marca: "Marca C"
  },
  {
    id: 10,
    imagemProduto: calcaF1,
    nomeProduto: "Calça Jeans Feminina",
    precoProduto: 149.0,
    descricaoProduto: "Calça Jeans Premium Feminina Moda todo dia",
    marca: "Marca C"
  },
  {
    id: 11,
    imagemProduto: calcaM1,
    nomeProduto: "Calça Jeans Masculina V8",
    precoProduto: 149.0,
    descricaoProduto: "Calça Jeans Masculina V8 para o dia a dia",
    marca: "Marca C"
  }
  
];

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prev => [...prev, produto]);
  };

  const removerDoCarrinho = (index) => {
    setCarrinho(prev => prev.filter((_, i) => i !== index));
  };
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <>
      <Login quantidade={carrinho.length} itslogin="Entrar" />
      <Card produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />
      <Carrinho itens={carrinho} removerDoCarrinho={removerDoCarrinho} limparCarrinho={limparCarrinho} />
      <CardCadastro/>
      <CardLogin/>
    </>
  );
}

export default App;