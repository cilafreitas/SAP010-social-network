

export default () => {
  const containerLogin = document.createElement('div');
  
  
  const templateLogin = `
  
<header>
  <img src=${coracao} alt="Logo-Coracao"
  <img src=${BemSocial} alt="Logo-Bem-Social"
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

