import coracaoUrl from '../../img/logo-coracao.png';
import bemSocialUrl from '../../img/logo-bem-social.png';
import { realizarLogin } from '../../firebase/firebase';

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
      <input id="input-senha" type="password"/>
      <button id="botao-entrar" type="button">ENTRAR</button> 
      <button id="botao-registrar" type="button">REGISTRAR</button>
    </div>
    <div id="mensagem" > 
    </div>
  </main>
`;

  containerLogin.innerHTML = templateLogin;
  const mensagemElement = containerLogin.querySelector('#mensagem');
  // obter referencia aos inputs
  const inputEmail = containerLogin.querySelector('#input-email');
  // criar input senha
  const inputSenha = containerLogin.querySelector('#input-senha');
  inputEmail.addEventListener('focus', () => {
    mensagemElement.innerHTML = '';
  });

  inputSenha.addEventListener('focus', () => {
    mensagemElement.innerHTML = '';
  });
  const botaoEntrar = containerLogin.querySelector('#botao-entrar');
  botaoEntrar.addEventListener('click', async () => {
    // chamar uma função do firebase com os parâmetros e-mail e senha
    // eslint-disable-next-line no-shadow
    const user = await realizarLogin(inputEmail.value, inputSenha.value);
    if (typeof user === 'string') {
      mensagemElement.innerHTML = 'E-mail ou senha incorretos.';
    } else {
      const parametro = new URLSearchParams();
      parametro.append('userId', user.uid);
      window.location.hash = `feed?${parametro.toString()}`;
    }
  });
  // local storage
  // criar um evento para redirecionar para a página de registro
  // botaoRegistrar
  const botaoRegistrar = containerLogin.querySelector('#botao-registrar');
  botaoRegistrar.addEventListener('click', () => {
    window.location.hash = 'registro';
  });

  return containerLogin;
};
