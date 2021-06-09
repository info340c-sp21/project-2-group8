import { Header } from './spec';
// import React, { useState, useEffect } from 'react';
import { Footer } from './spec';
import {CreateCard} from './main'

export function CreateFavPage(props) {
    return  (
     <div className='sets'>
    <Header />
    <CreateCardList cardsList={props.cardsList} adoptCallback={props.adoptCallback} currentUser={props.currentUser}/>
    <Footer />
    </div>
    )
}

function CreateCardList(props) {
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
        return <CreateCard card={card} key={card.title} adoptCallback={props.adoptCallback} currentUser={props.currentUser}/>
    })
    return (
        <div className="container">
            <div className="row">
                {createCards}
            </div>
        </div>
    )
}