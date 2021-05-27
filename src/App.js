import React, { useState, useEffect} from 'react';
import { CreateSpecPage } from './spec';
import { CreateMainPage } from './main';
import { CreateLandingPage } from './landing';


export function App (props) {
    // const [data,setData]=useState([]);
    // const [dataCopy, setDataCopy] = useState([]);
    
    // const getData=()=>{
    //     fetch('data.json')
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(myJson) {
    //         setData(myJson)
    //         setDataCopy(myJson)
    //     });
    // }
    // useEffect(()=>{
    //     getData()
    // },[])
    return (
    //   <div className="App">
    //     <Header />
    //     <CreateSearch/>
    //     <CreateCardList cards={data}/>
    //     <Spec />
    //     <Footer />
    //   </div>

    // <CreateLandingPage/>
    // <CreateMainPage cards={data} cardsCopy={dataCopy}/>
    <CreateMainPage/>
    // <CreateSpecPage/>
    );
}

export default App;



