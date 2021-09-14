import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyClygnCM5GWkSRz38D0uuxNuRKPRvWGvqI",
  authDomain: "pokemons-91c42.firebaseapp.com",
  databaseURL: "https://pokemons-91c42-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pokemons-91c42",
  storageBucket: "pokemons-91c42.appspot.com",
  messagingSenderId: "999097412004",
  appId: "1:999097412004:web:258b3eda191a5e36973931"
};

firebase.initializeApp(firebaseConfig)
export default firebase