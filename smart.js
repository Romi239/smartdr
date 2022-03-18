$(document).ready(function () {
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCSOhXGWqGy32yMLTKjc6w4LEXPF6iHOcQ",
    authDomain: "smart-doctor-75e8a.firebaseapp.com",
    projectId: "smart-doctor-75e8a",
    storageBucket: "smart-doctor-75e8a.appspot.com",
    messagingSenderId: "1096661833530",
    appId: "1:1096661833530:web:b875173dd3076d47e32203",
    measurementId: "G-DZHLV83YBM"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Inicializar Auth de Firebase
  const auth = firebase.auth();

  // Inicializar Auth de Google
  var provider = new firebase.auth.GoogleAuthProvider();

  // Inicializar Firestore (Base de datos)
  const db = firebase.firestore();

  

  // Ingresar con google
  $("#btnIngresoGmail").click(function (e) {
    e.preventDefault();
    auth.signInWithPopup(provider)
      .then(result => {
        console.log("Ingreso con Google");
      })
      .catch(err => {
        console.log(err);
      })
  })

  
  
})


function pintarNombre() {
  document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}

pintarNombre()