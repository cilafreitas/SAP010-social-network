export default (mensagem, timestamp) => {
  const containerCard = document.createElement('div');

  const templateCard = `
    <div class='card'>
     <p>${mensagem}</p>
     <p>${timestamp}</p>
     <button id='deletebutton' class='delete-button'>Excluir</button>
      
    </div>
  `;

  containerCard.innerHTML = templateCard;

  const deletebutton = containerCard.querySelector('#deletebutton');
  deletebutton.addEventListener('click', () => {

  });

  return containerCard;
};
