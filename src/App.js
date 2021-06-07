import React, { useState, useEffect} from 'react';
import { CreateSpecPage } from './spec';
import { CreateMainPage } from './main';
import { CreateLandingPage } from './landing';
import { Router } from 'react-router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Header from './spec';

function App (props) {
    const [data,setData]=useState([]);
    const [dataCopy,setDataCopy]=useState([]);
        // const getData=()=>{
        //   fetch('data.json') 
        //     .then(function(response){
        //       return response.json();
        //     })
        //     .then(function(myJson) {
        //       setData(myJson)
        //       setDataCopy(myJson)
        //     });
        // }
        // useEffect(()=>{
        //   getData()
        // },[])
        useEffect(()=>{
        const cardRef = firebase.database().ref('cards');
        cardRef.on('value', (snapshot) => {
          let newCardState = [];
          snapshot.forEach(data => {
            const dataVal = data.val()
            newCardState.push({
              id: dataVal.id,
              title: dataVal.title,
              airDate: dataVal.airDate,
              genre:dataVal.genre,
              genreString: dataVal.genreString,
              recommendedString: dataVal.recommendedString,
              recommended: dataVal.recommended,
              description: dataVal.description,
              imgSrc: dataVal.imgSrc,
              watchOn: dataVal.watchOn
            })
          })
          newCardState = newCardState.slice(0,30);
          setData(newCardState);
          setDataCopy(newCardState);
        })},[]);
          
        const [user, setUser] = useState(undefined);
        // const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
          firebase.auth().onAuthStateChanged((firebaseUser) => {
            if(firebaseUser) {
              setUser(firebaseUser) 
              //setIsLoading(false);
            } else {
              setUser(null)
            }
          })
        })
          const uiConfig = {
            signInOptions: [
              {provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            }
          ],
          // credentialHelper: 'none',
          callbacks: {
            signInSuccessWithAuthResult: () => false,
          },
    };
    
    // if (isLoading) {
    //   return (
    //     <div>
    //       <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."> </i>
    //     </div>
    //    )
      
    // }
        if (!user) {
          return (
  
              <div>
                <header>
              <div className="container">
                  <h1>ANIWE</h1>
                  <h2>Start searching for your anime!</h2> 
              </div>
              
            </header>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/> 
              </div>
      
            )
        } else {
          return (
            //   <div className="App">
            //     <Header />
            //     <CreateSearch/>
            //     <CreateCardList cards={data}/>
            //     <Spec />
            //     <Footer />
            //   </div>
    
            // <CreateLandingPage/>


            <CreateMainPage cards={data} cardsCopy={dataCopy} currentUser={user}/>


            
            // <CreateSpecPage />
            );
        }
       
      }

export default App;