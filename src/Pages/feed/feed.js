import { salvarPost } from "../../firebase/firebase";
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
  // usar appendchild
  const printarPost = (postList) => {
    // const novoCard = card();
    // postList.appendchild = card();
    console.log('adicionarPost ok', postList);
  };

  const postList = containerFeed.querySelector('#postList');
  const postButton = containerFeed.querySelector('#postButton');

  // ouvinte de evento para o botão postar
  postButton.addEventListener('click', () => {
    // chamar função adcionar post
    salvarPost();
    printarPost(postList);
    console.log('testando');
  });
  return containerFeed;
};

// criar uma função para fazer o post 2 parametros
// iniciar o cloud firestone
// vizualizar os posts
// conseguir postar e excluir o post

// const adicionarPost = () =>
