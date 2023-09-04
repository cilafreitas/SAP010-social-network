// Este es el punto de entrada de tu aplicacion
import login from './Pages/login/login.js';
import feed from './Pages/feed/feed.js';
import registro from './Pages/registro/registro.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';

    if (window.location.hash.includes('#feed')) {
      main.appendChild(feed());
    } else {
      switch (window.location.hash) {
        case '#login':
          main.appendChild(login());
          break;
        case '#registro':
          main.appendChild(registro());
          break;
        default:
          main.appendChild(login());
      }
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});
