import 
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

    return containerFeed;
};

// criar uma função para fazer o post 2 parametros
// vizualizar os posts
// conseguir postar e excluir o post
const adicionarPost = () =>
    const 