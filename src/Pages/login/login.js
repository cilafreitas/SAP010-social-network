export default () => {
  const containerLogin = document.createElement('div');
  const templateLogin = `
  
<header>
  <img src="${}" alt="Logo-Coracao"
  <img src="${}" alt="Logo-Bem-Social"
</header>


<main>

  <div class= containerLogin>
      <input type = "text"  id = "login" name="login" placeholder = "Login" requered>
      <label for="login" >Login</label>

      <input type = "password"  id = "senha-login" name="senha" placeholder = "Senha" requered>
      <label for="senha" >Senha</label>

      <a href = "/#feed"><button type="submit">Entrar</button></a>

      <p>Não está cadastrado? <a href= "/#cadastro-clique-aqui" id="clique-aqui">Clique aqui!</a></p>

  </div>
</main>


`;

  containerLogin.innerHTML = templateLogin;
  return containerLogin

}

