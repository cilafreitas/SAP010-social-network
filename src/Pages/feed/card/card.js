import { excluirPostagem } from '../../../firebase/firebase';

export default (mensagem, timestamp, id) => {
  const containerCard = document.createElement('div');

  const templateCard = `
    <div class='card'>
     <p>${mensagem}</p>
     <p>${timestamp.toDate().toLocaleString('pt-BR')}</p>
     <button id='excluir-postagem' class='excluir-postagem'>Excluir</button>
   </div>
  `;

  containerCard.innerHTML = templateCard;

  const deleteButton = containerCard.querySelector(`#excluir-postagem-${id}`);
  deleteButton.addEventListener('click', async () => {
    await excluirPostagem(id);
    printarPost();
  });

  return containerCard;
};
