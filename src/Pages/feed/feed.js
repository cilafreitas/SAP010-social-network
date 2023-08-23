import card from "./card/card";

export default () => {
  const containerFeed = document.createElement('div');

  const templateFeed = `
    <h1>Feed</h1>
    <div>
      <input id="postInput" type="text"  placeholder="Digite seu post">
      <button id="postButton">Postar</button>
    </div>
    <div id="postList"></div>
    `;
  containerFeed.innerHTML = templateFeed;
    // função mostrar postagens com lista de postagens como parametro
  const postList = containerFeed.querySelector('#postList')
  const postButton = containerFeed.querySelector('#postButton');
  postButton.addEventListener('click', () => {
    // chamar função adcionar post
    console.log('testando');
    postList.innerHTML = card();
    // usar appendchild
  });
  return containerFeed;
};

// criar uma função para fazer o post 2 parametros
// vizualizar os posts
// conseguir postar e excluir o post
// iniciar o cloud firestone


// const adicionarPost = () =>
