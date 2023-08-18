import coracaoUrl from "../../img/logo-coracao.png";
import bemSocialUrl from "../../img/logo-bem-social.png";
import { registrarUsuario } from "../../firebase/firebase";

export default () => {
  const containerRegistro = document.createElement('div');


  const templateRegistro = `

  <main>
    <div class= "formulario-registro"> 
      <div class="logo-imagem">
      <img src=${coracaoUrl} alt="Logo-Coracao">
      <img src=${bemSocialUrl} alt="Logo-Bem-Social">
    </div>
      <h2>Cadastro de Usuário</h2>  
      <p>E-mail:</p>
      <input id="input-email" type="email"/>
      <p>Senha:</p>
      <input id="input-senha" type="password"/>
      <button id="botao-registrar" type="button">REGISTRAR</button>
    </div>
  </main>
`;

  containerRegistro.innerHTML = templateRegistro;

  const botaoRegistrar = containerRegistro.querySelector('#botao-registrar');

  botaoRegistrar.addEventListener('click', () => {
    console.log('chamei botão');
    //obter referencia aos inputs
    const inputEmail = containerRegistro.querySelector('#input-email');
    //obter e-mail e senha dos inputs
    console.log(inputEmail.value)
    //chamar uma função com os parâmetros e-mail e senha
    const inputSenha = containerRegistro.querySelector('#input-senha');

    registrarUsuario(inputEmail.value, inputSenha.value);


  });

  return containerRegistro

};

