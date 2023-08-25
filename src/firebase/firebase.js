// TODO: Add SDKs for Firebase products that you want to use
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './config.firebase';

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
      // const errorCode = error.code;
      const errorMessage = error.message;
      // console.log('Erro durante o registro:', errorMessage);

      alert(`Erro durante o registro: ${errorMessage}`);

      window.location.href = '/login';
    });
};

// fazer função de login
// chamar método do firebase signInWithEmailAndPassword

export const realizarLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Login realizado com sucesso!');
      console.log('Email do usuário:', user.email);
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      // console.log('Erro durante o login:', errorMessage);

      alert(`Erro durante o registro: ${errorMessage}`);
    });
};

export const salvarPost = async (message) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    mensagem: message,
    timestamp: new Date(),
  });
  console.log('Document written with ID: ', docRef.id);
};

export const postsSalvos = async () => {
  const listaPosts = [];
  const posts = collection(db, 'posts');
  const postsSnapshot = await getDocs(posts);
  postsSnapshot.forEach((doc) => {
    console.log(doc.data());
    listaPosts.push(doc.data());
  });
  return listaPosts;
};

// criar função adicionar post com parametro texto utilizando addDoc
// firebase tem funções para adcionar dados: addDoc
// e para ler dados: getDocs/onSnapshot

export const excluirPostagem = () => {

};

