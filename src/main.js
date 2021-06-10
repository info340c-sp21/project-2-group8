import { Header } from './spec';
import React, { useState, useEffect } from 'react';
import { Footer } from './spec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faRandom, faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons'
import { CreateSpecPage } from './spec';
import {CreateFavPage} from './favorites'
import firebase from 'firebase';
import Loader from "react-loader-spinner";


import {
    BrowserRouter as Router,
    Link,
    Route,
} from "react-router-dom";

export function CreateMainPage(props) {
    const [id, setId] = useState(0);
    const [cards, setCards] = useState(props.cards);
    // this resetdata makes aniwe go back by resetting the cards when see more is clicked
    const [resetData, setReset] = useState(false);
    useEffect(() => {
        if (resetData === false) {
            setCards(props.cards)
        }
    }, [props.cards])
    useEffect(() => {
        if (resetData === true) {
            setCards(props.cardsCopy);
            setReset(false);
        }
    }, [resetData])

    const handleAdopt = (id) => {
        setId(id);
        setReset(true);
    }

    const clearCards = () => {
        setCards(props.cardsCopy);
    }

    // const resetDataVar = (variable) => {
    //     variable = true;
    // }


    let idCard = [];
    for (let i = 0; i < props.cards.length; i++) {
        if (id === props.cards[i].id) {
            idCard.push(props.cards[i]);
        }
    }

    const renderSearch = (searchInput) => {

        let searchOutput = [];
        for (let i = 0; i < props.cardsCopy.length; i++) {
            if (props.cardsCopy[i].title.toLowerCase().includes(searchInput.toLowerCase())) {
                searchOutput.push(props.cardsCopy[i]);
            }
        }
        setCards(searchOutput)
    }

    const randomCard = () => {
        let num1 = Math.floor(Math.random() * 30);
        let num2 = Math.floor(Math.random() * 30);
        while (num1 === num2) {
            num2 = Math.floor(Math.random() * 30);
        }
        let randomArr = [];
        randomArr.push(props.cardsCopy[num1]);
        randomArr.push(props.cardsCopy[num2]);
        setCards(randomArr);
    }
    let favoriteCard = [];
    cards.map((card) => {
        // let favId = props.card.id-1
        // let facDS = firebase.database().ref('cards').child(likeId +'/favorites');
        let updateFav = {};
        if (card.favorites != undefined) {
          updateFav = card.favorites;
        }
        if (updateFav.hasOwnProperty(props.currentUser.uid)) {
            favoriteCard.push(card);
        } 
        // likeDS.set(updateLikes)
        // .catch((error)=> {console.log(error.message)})
    })

    return (
        <Router>
            <Loader
        type="Puff"
        color='rgba(0, 163, 255, 1)'
        height={100}
        width={100}
        timeout={1000}
        className='load' 
      />
            {/* <Switch> */}
            <Route exact path='/spec' exact={true} render={() => (
                <CreateSpecPage id={idCard} />
            )} />
            <Route path='/' exact={true} render={() => <CreateMainPageTest cardsList={cards} adoptCallback={handleAdopt} searchCallBack={renderSearch} clearCallback={clearCards} randomCallback={randomCard} currentUser={props.currentUser} />} />
            {/* </Switch> */}
            <Route path='/favorites' render = {() =>
                 <CreateFavPage  cardsList={favoriteCard} adoptCallback={handleAdopt} currentUser={props.currentUser} />}/>
                 <Route path='/random' exact={true} render = {() => <RandomCard cardsList = {cards} adoptCallback={handleAdopt} searchCallBack={renderSearch} clearCallback={clearCards} randomCallback={randomCard} currentUser={props.currentUser}/>} />
        </Router>
    )
}

function CreateMainPageTest(props) {
    return (
        <div className='sets'>
            <Header />
            <Main cardsList={props.cardsList} adoptCallback={props.adoptCallback} searchCallBack={props.searchCallBack} clearCallback={props.clearCallback} randomCallback={props.randomCallback} currentUser={props.currentUser}/>
            <Footer />
        </div>
    )
}

function Main(props) {
    return (
        <main className="index-main">
            <CreateSearch cardsList={props.cardsList} adoptCallback={props.adoptCallback} searchCallBack={props.searchCallBack} clearCallback={props.clearCallback} randomCallback={props.randomCallback} currentUser={props.currentUser}/>
            {/* <CreateCardList cards={props.cards} adoptCallback={props.adoptCallback}/> */}
        </main>
    )
}

function CreateSearch(props) {
    const [searchInput, setSearchInput] = useState("");
    const clearInput = () => {
        setSearchInput('');
    }

    return (
        <div>
            <div className="flexbox-search-dropdown">
                <div className="searchBox" role="search">
                    <input type="text" placeholder=" Search..." id="sinput" aria-label="search input" onChange={e => setSearchInput(e.target.value)} value={searchInput} />
                    <button aria-label="search" className="searchButton" onClick={() => props.searchCallBack(searchInput)}><FontAwesomeIcon icon={faSearch} aria-label="search button" id="search" /></button>
                    {/* <button aria-label="random" className="searchButton" onClick={() => props.randomCallback()}><FontAwesomeIcon icon={faRandom} aria-label="random button" /></button> */}
                    <button aria-label="clear" onClick={() => { props.clearCallback(); clearInput() }}>clear</button>
                </div>
            </div>
            <CreateCardList cardsList={props.cardsList} adoptCallback={props.adoptCallback} randomCallback={props.randomCallback} currentUser={props.currentUser}/>
        </div>
    )
}

export function CreateCard(props) {
    const handleClick = () => {
        props.adoptCallback(props.card.id)
    };

    const likeAnime = () => {
        let likeId = props.card.id-1
        let likeDS = firebase.database().ref('cards').child(likeId +'/likes');
        let updateLikes = {};
        if (props.card.likes != undefined) {
          updateLikes = props.card.likes;
        }
        if (updateLikes.hasOwnProperty(props.currentUser.uid)) {
          updateLikes[props.currentUser.uid] = null;
        } else {
          updateLikes[props.currentUser.uid] = true;
        }
        likeDS.set(updateLikes)
        .catch((error)=> {console.log(error.message)})
    }
     
      let card = props.card; 
    
      //counting likes
      let likeCount = 0; //count likes
      let userLikes = false; //current user has liked
      if(card.likes){
        likeCount = Object.keys(card.likes).length;
        if(card.likes[props.currentUser.uid]) 
          userLikes = true; 
      }

      const favoriteAnime = () => {
        let likeId = props.card.id-1
        let favoriteDS = firebase.database().ref('cards').child(likeId +'/favorites');
        let updateFavorites = {};
        if (props.card.favorites != undefined) {
          updateFavorites = props.card.favorites;
        }
        if (updateFavorites.hasOwnProperty(props.currentUser.uid)) {
            updateFavorites[props.currentUser.uid] = null;
        } else {
            updateFavorites[props.currentUser.uid] = true;
        }
        favoriteDS.set(updateFavorites)
        .catch((error)=> {console.log(error.message)})

        let favoriteID = props.card.id -1;
        var updates = {};
        updates['/' + props.card] = 1;
      }
      let userFavorites = false; //current user has liked
      if(card.favorites){
        // likeCount = Object.keys(card.likes).length;
        if(card.favorites[props.currentUser.uid]) 
        userFavorites = true; 
      }

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
                                <Link className="reactButton" to={'/spec'} onClick={handleClick}>See More</Link>
                            </button>
                            <FontAwesomeIcon icon={faHeart} aria-label="favorite button" className={(userFavorites ? "heartActive": "heart")} onClick={favoriteAnime}/>
                            <FontAwesomeIcon icon={faThumbsUp} aria-label="like button" className={(userLikes ? 'user-liked': 'thumb')} onClick={likeAnime}/><span>{/*space*/} {likeCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CreateCardList(props) {
    if(props.cardsList.length === 0){
        return (
            <div>       
                <p className='alert'>No Result Found</p >
            </div>
        
        )
    }
    if (props.card == []) {
        return (
        <div className="container">
            <div className="row">
                <p>"Results Not Found"</p>
            </div>
         </div>
        )
    }
    let createCards = props.cardsList.map((card) => {
        return <CreateCard card={card} key={card.title} adoptCallback={props.adoptCallback} resetData={props.resetData} randomCallback={props.randomCallback} currentUser={props.currentUser}/>
    })
    return (
        <div className="container">
            <div className="row">
                {createCards}
            </div>
        </div>
    )
}

function RandomCard(random) { 
    
    return(
        <div>
            <Header />
            <RandomComponents random={random} adoptCallback={random.adoptCallback} searchCallBack={random.searchCallBack} clearCallback={random.clearCallback} randomCallback={random.randomCallback} currentUser={random.currentUser}/>
            
        </div>
    )
}
{/* <CreateRandomCardList random={resultNew} adoptCallback={random.adoptCallback} randomCallback={random.randomCallback} currentUser={random.currentUser}/> */}

function RandomComponents(random) {
    const [resultNew, setResultNew] = useState("");
    const[Id, setId]=useState(undefined);

    let cardsList = random.random.cardsList;
    const [filterVal, setFilterVal] = useState("");
    const filter = (e) => {
        // e.preventDefault();
        setFilterVal(e.target.value);
        // console.log(e.target.value);
    }
    
    let singleCard = <div></div>;
    // var cardsList = [];
    // for (var key in cardsListReplace) {
    // cardsList.push(cardsListReplace[key]);
    // }

    const generate = () => {
        let result = "";
        if (filterVal === "") {
            return;
        } else if (filterVal === "beginners") {
            let beginerList = [];
            for (let i = 0; i < cardsList.length-1; i++) {
                if (cardsList[i].recommendedString.includes("Beginners")) {
                    beginerList.push(cardsList[i])
                }
            }
            let num = Math.floor(Math.random() * beginerList.length);
            result = beginerList[num];
            // setResult(beginerList[num]);
            // console.log(beginerList[num])
        } else if (filterVal === "fans") {
            let fanList = [];
            for (let i = 0; i < cardsList.length-1; i++) {
                if (cardsList[i].recommendedString.includes("Fans")) {
                    fanList.push(cardsList[i])
                }
            }
            let num = Math.floor(Math.random() * fanList.length);
            result = fanList[num];
        } else {
            let freakList = [];
            for (let i = 0; i < cardsList.length-1; i++) {
                if (cardsList[i].recommendedString.includes("Freaks")) {
                    freakList.push(cardsList[i])
                }
            }
            let num = Math.floor(Math.random() * freakList.length);
            result = freakList[num];
        }
        // console.log(result);
        let realId = result.id-1;
        setId(realId)

        
        setResultNew(result);
        // singleCard = <CreateCardList random={result}/>
        
    }
    // console.log(resultNew);
    // if (result !== "") {
    //     singleCard = <CreateCardList random={result}/>
    //     console.log(123);
    // } else {
    //     console.log(0)
    // }
    return(
        <div className="randomContainer">
            {/* <div className="randomContainer">
                <button className="randomBtn">Generate</button>
            </div> */}
            <main>
                <div className="flex-container">
                    <button className="button-dropdown" value="beginners" id="beginners" aria-label="Beginners" onClick={e => filter(e)}>Beginners</button>
                    <button className="button-dropdown" value="fans" id="anime_fans" aria-label="Anime Fans" onClick={e => filter(e)}>Anime Fans</button>
                    <button className="button-dropdown" value="freaks" id="anime_freaks" aria-label="Anime Freaks" onClick={e => filter(e)}>Anime Freaks</button>
                </div>
                <button className="button-dropdown randomBtn" onClick={() => generate()}>Generate</button>
            </main>
            <CreateRandomCardList random={random.random.cardsList[Id]} adoptCallback={random.adoptCallback} randomCallback={random.randomCallback} currentUser={random.currentUser}/> 
            {/* {singleCard} */}
        </div>
    )
}

function CreateRandomCardList(result) {
    
    // console.log(result.random);

    // let createCards = random.random.cardsList.map((card) => {
    //     return <CreateCard card={card} key={card.title}/>
    // })
    if(result.random === undefined) {
        return <p className='alert'>Start Generating!</p >
    }
    if (result.random.length === 0) {
        return <p className='alert'>Start Generating!</p >

        

    } else {
        return (
            <div className="container">
                <div className="row">
                    {/* {createCards} */}
                    <CreateCard card={result.random} key={result.random.title} adoptCallback={result.adoptCallback} resetData={result.resetData} randomCallback={result.randomCallback} currentUser={result.currentUser}/>
                </div>
            </div>
        )
    }
}
