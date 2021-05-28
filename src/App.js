import React, { useState, useEffect} from 'react';
import { CreateSpecPage } from './spec';
import { CreateMainPage } from './main';
import { CreateLandingPage } from './landing';
import { Router } from 'react-router';


function App (props) {
    const [data,setData]=useState([]);
        const getData=()=>{
          fetch('data.json')
            .then(function(response){
              return response.json();
            })
            .then(function(myJson) {
              setData(myJson)
            });
        }
        useEffect(()=>{
          getData()
        },[])
        return (
        //   <div className="App">
        //     <Header />
        //     <CreateSearch/>
        //     <CreateCardList cards={data}/>
        //     <Spec />
        //     <Footer />
        //   </div>

        // <CreateLandingPage/>
        <CreateMainPage cards={data}/>
       
        // <CreateSpecPage />
        );
      }

export default App;



