import { salvarPost, postsSalvos } from '../../firebase/firebase';
import card from "./card/card";

export default () => {
  const containerFeed = document.createElement('div');

  const templateFeed = `
    <h1>Feed</h1>
    <div>
      <input id="postInput" type="text"  placeholder="Digite seu post">
      <button id="postButton">Postar</button>
      <button id="sairButton">Sair</button>
    </div>
    <div id="postList"></div>
    `;

  containerFeed.innerHTML = templateFeed;

  const postList = containerFeed.querySelector('#postList');
  const postButton = containerFeed.querySelector('#postButton');
  const sairButton = containerFeed.querySelector('#sairButton');

  // função mostrar postagens com lista de postagens como parametro
  // usar appendchild
  const printarPost = async () => {
    postList.innerHTML = '';

    const posts = await postsSalvos();
    posts.forEach(post => {
      console.log(post);
      const novoCard = card(post.mensagem, post.timestamp, post.id, printarPost);
      postList.appendChild(novoCard);
    });
    // console.log('adicionarPost ok', postList);
  };
  printarPost();
  // ouvinte de evento para o botão postar
  // chamar função adcionar post
  postButton.addEventListener('click', () => {
    const postInput = containerFeed.querySelector('#postInput');
    console.log(postInput);
    salvarPost(postInput.value);
    printarPost();
  });

  // criar uma função para fazer o post 2 parametros ok
  // iniciar o cloud firestone ok
  // vizualizar os posts
  // conseguir postar e excluir o post
  // Verificar a autenticação do usuário antes de permitir a..
  // ...exclusão de uma postagem. Exibir alerta em caso de erro.

  // const adicionarPost = () =>

  // função para retornar a página de login com evento de clique
  const retornarParaLogin = () => {
    window.location.hash = 'login';
  };

  sairButton.addEventListener('click', retornarParaLogin);

  return containerFeed;
};
