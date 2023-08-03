// Este es el punto de entrada de tu aplicacion
window.addEventListener("load",)




import { myFunction } from "./lib/index.js";
// Import the functions you need from the SDKs you need

const email = "teste@gmail.com";
const password = "123456";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

myFunction();
