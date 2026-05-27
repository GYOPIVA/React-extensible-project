import './CardMain.css';
import { useState } from 'react';

function CardLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterLogin, setManterLogin] = useState(false);

  const enviarDados = (event) => {
    event.preventDefault(); // evita recarregar a página

    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Manter login:", manterLogin);

    alert("Login enviado!");
  };

  const fecharlogin = () => {
    const logincontainer = document.getElementById("login-container")
    logincontainer.classList.remove("mostrar-card")
  }

  return (
    <div className="card-main-container">
      <div className="login-container" id='login-container'>
        <form id="form-login" className='form-login' onSubmit={enviarDados}>
          <span className="material-symbols-outlined closelogin" onClick={fecharlogin}>close</span>
          <h2>Login</h2>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="input-save-login">
            <label>
              <input
                type="checkbox"
                id="manterLogin"
                name="manterLogin"
                checked={manterLogin}
                onChange={(e) => setManterLogin(e.target.checked)}
              />
              Manter Login
            </label>
          </div>

          <button type="submit" id="submitbtn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default CardLogin;
