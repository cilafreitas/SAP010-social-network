import { excluirPostagem } from '../../../firebase/firebase';

export default (mensagem, timestamp, postId, userId) => {
  const containerCard = document.createElement('div');

  const templateCard = `
    <div class='card'>
     <p>${mensagem}</p>
     <p>${timestamp.toDate().toLocaleString('pt-BR')}</p>
     <button id='excluir-postagem-${postId}' class='excluir-postagem'>Excluir</button>
   </div>
  `;

  containerCard.innerHTML = templateCard;

  const deleteButton = containerCard.querySelector(`#excluir-postagem-${postId}`);
  deleteButton.addEventListener('click', async (event) => {
    await excluirPostagem(postId, userId);
    event.target.closest('.card').remove();
  });

  return containerCard;
};

// login chamar a página do feed com userId