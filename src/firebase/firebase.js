// TODO: Add SDKs for Firebase products that you want to use
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config.firebase';

// const email = 'teste@gmail.com';
// const password = '123456';
export const registrarUsuario = (email, password) => {
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Cadastro realizado com sucesso!');
      console.log('Email do usuário:', user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);

      window.location.href = '/login';
    });
};

// fazer função de login
// chamar método do firebase signInWithEmailAndPassword

export const realizarLogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Login realizado com sucesso!');
      console.log('Cadastro realizado com sucesso!');
      console.log('Email do usuário:', user.email);
    });
    
      .catch ((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(error);

  });
};

