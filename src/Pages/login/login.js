import coracaoUrl from "../../img/logo-coracao.png";
import bemSocialUrl from "../../img/logo-bem-social.png";

export default () => {
  const containerLogin = document.createElement('div');


  const templateLogin = `
  <header>
    <div class="logo-imagem">
      <img src=${coracaoUrl} alt="Logo-Coracao">
      <img src=${bemSocialUrl} alt="Logo-Bem-Social">
  </header>


  <main>
    <div class= "formulario-login">
      <p>E-mail:</p>
      <input type="email"/>
      <p>Senha:</p>
      <input type="password"/>
      <button class="botao-entrar" type="button">ENTRAR</button> 
      <button class="botao-registrar" type="button">REGISTRAR</button>
    </div>
  </main>
`;

  containerLogin.innerHTML = templateLogin;
  return containerLogin

};

