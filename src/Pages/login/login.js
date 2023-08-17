import coracaoUrl from "../../img/logo-coracao.png";
import bemSocialUrl from "../../img/logo-bem-social.png";

export default () => {
  const containerLogin = document.createElement('div');


  const templateLogin = `
  
  <main>
    <div class= "formulario-login"> 
      <div class="logo-imagem">
      <img src=${coracaoUrl} alt="Logo-Coracao">
      <img src=${bemSocialUrl} alt="Logo-Bem-Social">
    </div>
      <p>E-mail:</p>
      <input id="input-email" type="email"/>
      <p>Senha:</p>
      <input type="password"/>
      <button id="botao-entrar" type="button">ENTRAR</button> 
      <button id="botao-registrar" type="button">REGISTRAR</button>
    </div>
  </main>
`;

  containerLogin.innerHTML = templateLogin;

  const botaoEntrar = containerLogin.querySelector('#botao-entrar');

  botaoEntrar.addEventListener('click', () => {
    console.log('chamei botão');
    //obter referencia aos inputs
    const inputEmail = containerLogin.querySelector('#input-email');
    //obter e-mail e senha dos inputs
    console.log(inputEmail.value)
    //chamar uma função com os parâmetros e-mail e senha
  });

  return containerLogin

};

