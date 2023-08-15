export default (coracaoUrl, bemSocialUrl) => {
  const containerLogin = document.createElement('div');


  const templateLogin = `
  
<header>
  <img src=${coracaoUrl} alt="Logo-Coracao"
  <img src=${bemSocialUrl} alt="Logo-Bem-Social"
</header>


<main>

  <div class= "formulario-login">
      <h2>Login</h2>
      <p>E-mail:</p>
      <input type="email"/>
      <p>Senha:</p>
      <input type="password"/>
      <button type="button">ENTRAR</button>
  </div>

</main>
`;

  containerLogin.innerHTML = templateLogin;
  return containerLogin

}

