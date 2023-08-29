import { collection, addDoc, getDocs, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './config.firebase';

// const email = 'teste@gmail.com';
// const password = '123456';

const mensagemElement = document.createElement('div');
mensagemElement.id = 'mensagem';
document.body.appendChild(mensagemElement);
// mensagemElement.textContent = 'Login realizado com sucesso!';

export const registrarUsuario = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      mensagemElement.textContent = 'Cadastro realizado com sucesso';
      console.log('Email do usuário:', user.email);
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

export const salvarPost = async (message, userId) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    mensagem: message,
    timestamp: new Date(),
    userId 
});
  console.log('Document written with ID: ', docRef.id);
};

// passar id como parametro na hora de chamar a função salvarPost

export const postsSalvos = async () => {
  const listaPosts = [];
  const posts = collection(db, 'posts');
  const postsSnapshot = await getDocs(posts);
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

export const excluirPostagem = async (postId, userId) => {
  const postDoc = doc(db, 'posts', postId);
  const postsSnapshot = await getDoc(postDoc);
  if (postsSnapshot.exists()) {
    const post = postsSnapshot.data();
    if (true) {
      //if (post.userId === userId) 
      await deleteDoc(postDoc);
      mensagemElement.textContent = 'Postagem excluída com sucesso.';
    } else {
      mensagemElement.textContent = 'Você não tem permissão para excluir esta postagem.';
    }
  } else {
    mensagemElement.textContent = 'A postagem não existe.';
  }
};
