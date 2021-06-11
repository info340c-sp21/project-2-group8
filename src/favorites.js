import { Header } from './spec';
import { Footer } from './spec';
import {CreateCard} from './main'

export function CreateFavPage(props) {
    return  (
     <div className='sets'>
    <Header />
    <div className='push'></div>

    <CreateCardList cardsList={props.cardsList} adoptCallback={props.adoptCallback} currentUser={props.currentUser}/>

    <Footer />
    </div>
    )
}

function CreateCardList(props) {
    if (props.cardsList.length === 0) {
        return (
        <div className='randomContainer'>
            <p className='alert'>No Favorite Anime Yet</p >
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