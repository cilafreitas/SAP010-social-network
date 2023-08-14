// Este es el punto de entrada de tu aplicacion
import home from "./pages/login/login.js";
import feed from "./Pages/feed/feed.js"

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    console.log(window.location.hash)
    switch (window.location.hash) {
      case " ":
        main.appendChild(home());
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






