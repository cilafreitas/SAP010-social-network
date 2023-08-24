import { salvarPost } from '../../firebase/firebase';
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

  const postList = containerFeed.querySelector('#postList');
  const postButton = containerFeed.querySelector('#postButton');

  // função mostrar postagens com lista de postagens como parametro
  // usar appendchild
  const printarPost = (message, timestamp) => {
    const novoCard = card(message, timestamp);
    postList.appendchild (novoCard);
    // console.log('adicionarPost ok', postList);
  };

  // ouvinte de evento para o botão postar
  // chamar função adcionar post
  postButton.addEventListener('click', () => {
    const postInput = containerFeed.querySelector('#postInput');
    salvarPost(postInput);
  });
  return containerFeed;
};

// criar uma função para fazer o post 2 parametros ok
// iniciar o cloud firestone ok
// vizualizar os posts
// conseguir postar e excluir o post
// Verificar a autenticação do usuário antes de permitir a..
// ...exclusão de uma postagem. Exibir alerta em caso de erro.

// const adicionarPost = () =>
