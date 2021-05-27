import { Header } from './spec';
import { Footer } from './spec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from "react-router-dom";
import { CreateSpecPage } from './spec';

export function CreateMainPage(props){
    return(
        <Router>
        <Switch>
            <Route exact path='/spec' exact={true} render={() => (
              <CreateSpecPage/>
              )}/>

            <Route path='/' exact={true} render={() => <CreateMainPageTest />} />          
        </Switch>
    </Router>
    )
}


function CreateMainPageTest(props) {
    const [data,setData]=useState([]);
    const [dataCopy, setDataCopy] = useState([]);
    useEffect(()=>{
        console.log(data);
    },[data])
    useEffect(() => {
        console.log(setDataCopy)
    }, [dataCopy])
    const getData=()=>{
        fetch('data.json')
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            setData(myJson)
            setDataCopy(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])

    function RenderSearch(data, dataCopy, searchInput) {
        let searchOutput = [];
        // let dataCopyArr = dataCopy.map((anime) => {
        //     return anime
        // })
        // console.log(dataCopyArr);
        // setData(dataCopyArr);
        // console.log(dataCopy);
        // console.log(data);
        
        for (let i = 0; i < data.length; i++) {
            if (searchInput.toLowerCase() === data[i].title.toLowerCase()) {
                searchOutput.push(data[i]);
            } 
        }
        // console.log(searchOutput);
        setData(searchOutput);
        console.log(data);
        console.log(dataCopy);
        // console.log(data, dataCopy);
        return (
            // <body>
            //     <Header />
            //     <Main cards={props.cardsCopy} cardsCopy = {props.cardsCopy}/>
            //     <Footer />
            // </body>
            <div>
                123
            </div>
        )
    }
    // return (
    // //   <div className="App">
    // //     <Header />
    // //     <CreateSearch/>
    // //     <CreateCardList cards={data}/>
    // //     <Spec />
    // //     <Footer />
    // //   </div>

    // // <CreateLandingPage/>
    // <CreateMainPage cards={data} cardsCopy={dataCopy}/>
    // // <CreateSpecPage/>
    // );
    function ClearSearch(data, dataCopy) {
        setData(dataCopy);
    }
    function Main(props) {
        return (
            <main className="index-main">
                <CreateSearch cards={props.cards} cardsCopy = {props.cardsCopy}/>
                <CreateCardList cards={props.cards} cardsCopy = {props.cardsCopy}/>
            </main>
        )
    }
    
    
    function CreateSearch(props) {
        const [searchInput, setSearchInput] = useState("");
        // useEffect(()=>{
        //     console.log(searchInput)
        // },[searchInput])
        return (
            <div className="flexbox-search-dropdown">
                <div className="searchBox" role="search">
                    <input type="text" placeholder=" Search..." id="sinput" aria-label="search input" onChange={e => setSearchInput(e.target.value)} value={searchInput}/>
                    {/* <button aria-label="search" className="searchButton">
                        <i className="fas fa-search" aria-label="search button" id="search"></i>
                    </button> */}
                    <button aria-label="search" className="searchButton" onClick={() => RenderSearch(props.cards, props.cardsCopy, searchInput)}><FontAwesomeIcon icon={faSearch} aria-label="search button" id="search" /></button>
                    <button onClick={() => ClearSearch(props.cards, props.cardsCopy)}>clear</button>
                </div>
            </div>
        )
    }
    
    
    
    function CreateCard(props) {
        return (
            <div className="singleCard col-sm-12 col-md-6 d-flex">
                <div className="card mb-4 ml-2 mr-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-auto">
                                <img src={props.card.imgSrc} alt={"poster of" + props.card.title}></img>
                            </div>
                            <div className="col-sm">
                                <h2 className="card-title">{props.card.title}</h2>
                                <p className="card-text">{"Air Dates: From " + props.card.airDate} </p>
                                <p className="card-text">{"Genre: " + props.card.genreString} </p>
                                <p className="card-text">{"Recommended for: " + props.card.recommendedString} </p>
                                <button className="btn" id="see_more">
                                <Link to={'/spec'}>See More</Link>                          
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    function CreateCardList(props) {
        let createCards = props.cards.map((card) => {
            return <CreateCard card={card} key={card.title} />
        })
        return (
            <div className="container">
                <div className="row">
                    {createCards}
                </div>
            </div>
        )
    }
    return (
        <body>
            <Header />
            <Main cards={data} cardsCopy = {dataCopy}/>
            <Footer />
        </body>
    )
}




