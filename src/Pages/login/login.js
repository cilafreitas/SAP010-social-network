import coracaoUrl from "../../img/logo-coracao.png";
import bemSocialUrl from "../../img/logo-bem-social.png";

export default () => {
  const containerLogin = document.createElement('div');


  const templateLogin = `
  
<header>
  <img src=${coracaoUrl} alt="Logo-Coracao">
  <img src=${bemSocialUrl} alt="Logo-Bem-Social">
</header>


<main>

  <div class= "formulario-login">
      <p>E-mail:</p>
      <input type="email"/>
      <p>Senha:</p>
      <input type="password"/>
      <button type="button">ENTRAR</button> 
      <input type="password"/>
      <button type="button">REGISTRAR</button>
      <input type="password"/>
  </div>

</main>
`;

  containerLogin.innerHTML = templateLogin;
  return containerLogin

}

