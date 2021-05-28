import { Header } from './spec';
import React, { useState, useEffect } from 'react';
import { Footer } from './spec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { CreateSpecPage } from './spec';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";

export function CreateMainPage(props) {
    const [id, setId] = useState(0);
    console.log("before", props.cards)
    const [cards, setCards] = useState(props.cards);
    console.log(props.cardsCopy)
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
    // console.log(cards)

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
        // return (
        //     // <CreateCardList cards={searchOutput}/>
        // )
    }

    return (
        <Router>
            {/* <Switch> */}
            <Route exact path='/spec' exact={true} render={() => (
                <CreateSpecPage id={idCard} />
            )} />
            <Route path='/' exact={true} render={() => <CreateMainPageTest cardsList={cards} adoptCallback={handleAdopt} searchCallBack={renderSearch} clearCallback={clearCards} />} />
            {/* </Switch> */}
        </Router>
    )
}
function CreateMainPageTest(props) {
    return (
        <div className='sets'>
            <Header />
            <Main cardsList={props.cardsList} adoptCallback={props.adoptCallback} searchCallBack={props.searchCallBack} clearCallback={props.clearCallback} />
            <Footer />
        </div>
    )
}

function Main(props) {
    return (
        <main className="index-main">
            <CreateSearch cardsList={props.cardsList} adoptCallback={props.adoptCallback} searchCallBack={props.searchCallBack} clearCallback={props.clearCallback} />
            {/* <CreateCardList cards={props.cards} adoptCallback={props.adoptCallback}/> */}
        </main>
    )
}


// function CreateSearch() {
//     return (
//         <div class="flexbox-search-dropdown">
//             <div className="searchBox" role="search">
//                 <input type="text" placeholder=" Search..." id="sinput" aria-label="search input" />
//                 {/* <button aria-label="search" className="searchButton">
//                     <i className="fas fa-search" aria-label="search button" id="search"></i>
//                 </button> */}
//                 <button aria-label="search" className="searchButton"><FontAwesomeIcon icon={faSearch} aria-label="search button" id="search" /></button>
//             </div>
//         </div>
//     )
// }
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
                    <button aria-label="clear" onClick={() => { props.clearCallback(); clearInput() }}>clear</button>
                </div>
            </div>
            <CreateCardList cardsList={props.cardsList} adoptCallback={props.adoptCallback} />
        </div>
    )
}
// function RenderSearch(data, searchInput) {
//     let searchOutput = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].title.toLowerCase().includes(searchInput.toLowerCase())) {
//             searchOutput.push(data[i]);
//         } 
//     }
//     console.log(searchOutput)
//     setCards(searchOutput)
//     // return (
//     //     // <CreateCardList cards={searchOutput}/>
//     // )
// }

function CreateCard(props) {
    const handleClick = () => {
        props.adoptCallback(props.card.id)
    };

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CreateCardList(props) {
    let createCards = props.cardsList.map((card) => {
        return <CreateCard card={card} key={card.title} adoptCallback={props.adoptCallback} resetData={props.resetData} />
    })
    return (
        <div className="container">
            <div className="row">
                {createCards}
            </div>
        </div>
    )
}



