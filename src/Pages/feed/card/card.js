

export default () => {
    const containerCard = document.createElement('div');

    const templateCard = `
    <div>
      teste
    </div>
  `;

    containerCard.innerHTML = templateCard;

    return containerCard;
};
