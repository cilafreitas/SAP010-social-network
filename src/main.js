// Este es el punto de entrada de tu aplicacion
import home from "./pages/login/login.js";
import feed from "./pages/feed/feed.js"

const main = document.querySelector('#root');

const init = () => {
  const coracaoUrl = "./img/logo-coracao.png"; 
  const bemSocialUrl = "./img/logo-bem-social.png";
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    console.log(window.location.hash)

    switch (window.location.hash) {
      case "home":
        main.appendChild(home(coracaoUrl, bemSocialUrl));
        break;
      case "feed":
        main.appendChild(feed());
        break;
      default:
        main.appendChild(home());
    };
  })

}

window.addEventListener("load", () => {
  main.appendChild(home());
  init();
})






