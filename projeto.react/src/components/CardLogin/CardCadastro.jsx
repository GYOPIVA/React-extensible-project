import { useState } from "react";
import './CardMain.css';

function CardCadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    telefone: "",
    senha: "",
    senhaConfirmacao: ""
  });

  // Atualiza os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Busca endereço pelo CEP ao clicar no botão
  const handleBuscarCep = async () => {
    if (formData.cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${formData.cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setFormData({
            ...formData,
            endereco: `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
          });
        } else {
          alert("CEP não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    } else {
      alert("Digite um CEP válido com 8 dígitos.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode enviar para seu backend ou banco de dados
  };

    const fecharcadastro = () => {
    const containercadastro = document.getElementById("container-card-cadastro")
    containercadastro.classList.remove("mostrar-card")
  }

  return (
    <div className="container-card-cadastro" id="container-card-cadastro">
      <form className="form-cadastro" onSubmit={handleSubmit}>
          <span className="material-symbols-outlined closelogin" onClick={fecharcadastro}>close</span>
        <h1>Cadastro</h1>
        <div className="input">
          <label htmlFor="nome-usuario">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome-usuario"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <label htmlFor="sobrenome-usuario">Sobrenome:</label>
          <input
            type="text"
            name="sobrenome"
            id="sobrenome-usuario"
            value={formData.sobrenome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <label htmlFor="email-usuario">Email:</label>
          <input
            type="email"
            name="email"
            id="email-usuario"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <label htmlFor="cep-usuario">CEP:</label>
          <input
            type="number"
            name="cep"
            id="cep-usuario"
            value={formData.cep}
            onChange={handleChange}
            required
          />
        </div>
          <button
            type="button"
            className="ProcurarCep"
            onClick={handleBuscarCep}
           >
            Procurar Endereço
          </button>

        <div className="input">
          <label htmlFor="endereco-usuario">Endereço:</label>
          <input
            type="text"
            name="endereco"
            id="endereco-usuario"
            value={formData.endereco}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="input">
          <label htmlFor="numero-residencia-usuario">Número:</label>
          <input
            type="number"
            name="numero"
            id="numero-residencia-usuario"
            value={formData.numero}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label htmlFor="complemento-usuario">Complemento:</label>
          <input
            type="text"
            name="complemento"
            id="complemento-usuario"
            value={formData.complemento}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label htmlFor="telefone-usuario">Tel. Celular:</label>
          <input
            type="tel"
            name="telefone"
            id="telefone-usuario"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <label htmlFor="senha-usuario">Senha:</label>
          <input
            type="password"
            name="senha"
            id="senha-usuario"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <label htmlFor="senha-usuario-confirmacao">Confirme Sua Senha:</label>
          <input
            type="password"
            name="senhaConfirmacao"
            id="senha-usuario-confirmacao"
            value={formData.senhaConfirmacao}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CardCadastro;
