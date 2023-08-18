
// TODO: Add SDKs for Firebase products that you want to use
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config.firebase';


//const email = 'teste@gmail.com';
//const password = '123456';
export const registrarUsuario = (email, password) => {
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Deu certo!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
};

//fazer função de login
//chamar método do firebase signInWithEmailAndPassword