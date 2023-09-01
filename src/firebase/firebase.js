import {
  collection, addDoc, getDocs, doc, deleteDoc, getDoc,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from './config.firebase';

// const email = 'teste@gmail.com';
// const password = '123456';

const mensagemElement = document.createElement('div');
mensagemElement.id = 'mensagem';
document.body.appendChild(mensagemElement);
// mensagemElement.textContent = 'Login realizado com sucesso!';

export const registrarUsuario = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      mensagemElement.textContent = 'Cadastro realizado com sucesso';
      const voltarParaLoginButton = document.createElement('button');
      voltarParaLoginButton.textContent = 'Voltar para o Login';
      voltarParaLoginButton.addEventListener('click', () => {
        window.location.href = '/login'; // Redirecionar para a página de login
      });
      mensagemElement.appendChild(voltarParaLoginButton);
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      // console.log('Erro durante o registro:', errorMessage);
      mensagemElement.textContent = `Erro durante o registro: ${errorMessage}`;

      window.location.href = '/login';
    });
};

// fazer função de login
// chamar método do firebase signInWithEmailAndPassword
export const realizarLogin = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential.user)
  .catch((error) => error.message);

export const salvarPost = async (message) => {
  await addDoc(collection(db, 'posts'), {
    mensagem: message,
    timestamp: new Date(),
    userId: auth.currentUser.uid,
  });
};

// passar id como parametro na hora de chamar a função salvarPost

export const postsSalvos = async () => {
  const listaPosts = [];
  const posts = collection(db, 'posts');
  const postsSnapshot = await getDocs(posts);
  // eslint-disable-next-line no-shadow
  postsSnapshot.forEach((doc) => {
    const docData = doc.data();
    docData.id = doc.id;
    listaPosts.push(docData);
  });
  return listaPosts;
};

// criar função adicionar post com parametro texto utilizando addDoc
// firebase tem funções para adcionar dados: addDoc
// e para ler dados: getDocs/onSnapshot

// eslint-disable-next-line consistent-return
export const excluirPostagem = async (postId) => {
  const userId = auth.currentUser.uid;
  const postDoc = doc(db, 'posts', postId);
  const postsSnapshot = await getDoc(postDoc);
  if (postsSnapshot.exists()) {
    const post = postsSnapshot.data();
    if (post.userId === userId) {
      await deleteDoc(postDoc);
      mensagemElement.textContent = 'Postagem excluída com sucesso.';
      return true;
    }
    mensagemElement.textContent = 'Você não tem permissão para excluir esta postagem.';
    return false;
  }
};
