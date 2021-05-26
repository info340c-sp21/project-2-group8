import { Header } from './spec';
import { Footer } from './spec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function CreateMainPage(props) {
    return (
        <body>
            <Header />
            <Main cards={props.cards} />
            <Footer />
        </body>
    )
}

function Main(props) {
    return (
        <main className="index-main">
            <CreateSearch />
            <CreateCardList cards={props.cards} />
        </main>
    )
}


function CreateSearch() {
    return (
        <div class="flexbox-search-dropdown">
            <div className="searchBox" role="search">
                <input type="text" placeholder=" Search..." id="sinput" aria-label="search input" />
                {/* <button aria-label="search" className="searchButton">
                    <i className="fas fa-search" aria-label="search button" id="search"></i>
                </button> */}
                <button aria-label="search" className="searchButton"><FontAwesomeIcon icon={faSearch} aria-label="search button" id="search" /></button>
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
                            <button className="btn" id="see_more">See More</button>
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
