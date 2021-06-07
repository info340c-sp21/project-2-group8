import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/auth';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCb5FfIe815Zv00jPAbJIBekatfYdt0rPs",
  //   authDomain: "info340-project2-feb8f.firebaseapp.com",
  //   projectId: "info340-project2-feb8f",
  //   storageBucket: "info340-project2-feb8f.appspot.com",
  //   messagingSenderId: "103534683675",
  //   appId: "1:103534683675:web:28c0fa79f4329edb723abe",
  //   measurementId: "G-E6SQB2Z4WB"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyB34d8UidaZFE513Kr0WMlvHPaLHyfk02U",
      authDomain: "aniwe-info340.firebaseapp.com",
      projectId: "aniwe-info340",
      storageBucket: "aniwe-info340.appspot.com",
      messagingSenderId: "313530294262",
      appId: "1:313530294262:web:0fa7865fd4e4ce5b29b1d7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
