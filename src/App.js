import React, { useState, useEffect } from 'react';
import { CreateMainPage } from './main';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Loader from "react-loader-spinner";

function App(props) {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  useEffect(() => {
    const cardRef = firebase.database().ref('cards');
    cardRef.on('value', (snapshot) => {
      let newCardState = [];
      newCardState = snapshot.val();
      setData(newCardState);
      setDataCopy(newCardState);
    })
  }, []);
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
      } else {
        setUser(null)
      }
    })
  })
  const uiConfig = {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      }
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  if (!user) {
    return (
      <div>
        <Loader
          type="Puff"
          color='rgba(0, 163, 255, 1)'
          height={100}
          width={100}
          timeout={1000}
          className='load' />
        <header>
          <div className="container">
            <h1>ANIWE</h1>
            <h2>Start searching for your anime!</h2>
          </div>
        </header>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>

    )
  } else {
    return (
      <CreateMainPage cards={data} cardsCopy={dataCopy} currentUser={user} />
    );
  }
}

export default App;