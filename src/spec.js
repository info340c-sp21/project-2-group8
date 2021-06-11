import { Link, Redirect, NavLink, useParams } from "react-router-dom";
import { React } from 'react';
import firebase from 'firebase';

export function CreateSpecPage(idCard) {
    return (
        <div>
            <Header />
            <SpecMain id={idCard.id} singleCard={idCard.singleCard} />
            <Footer />
        </div>
    )
}
const handleSignOut = () => {
    firebase.auth().signOut()
}

export function Header() {

    return (
        <header>
            <div className="container" >
                <button className="aniweButton">
                    <h1><Link className="reactButton" to={'/'}>ANIWE</Link>  </h1>
                </button>
                <button className="signout" onClick={handleSignOut}>Sign Out</button>
                {/* <ul className="list-unstyled" id="nav"> */}

                <NavLink exact to='/favorites' className="favoriteNav">Favorites</NavLink>
                <NavLink exact to='/random' className="randomNav">Random</NavLink>

                {/* </ul> */}




                <h2>Start searching for your anime!</h2>
            </div>



        </header>
    )
}

function SpecMain(idCard) {
    const urlParams = useParams();
    let cardId = urlParams.id - 1;
    if (idCard.singleCard === undefined) {
        return (
            <Redirect to='/' />
        )
    }
    console.log(idCard.id)
    let current = idCard.singleCard[cardId];
    console.log(current);
    let creatWebLinks = current.watchOn.map((item) => {
        return <li key={item.source}><a href={item.link}>{item.source}</a ></li>
    })

    return (
        <main className="index-main">
            <div className="flexbox-single-anime">
                <div className="discription-container">
                    < img className="poster" src={current.imgSrc} alt={"poster of" + current.title} />
                </div>

                <div className="discription-container-title">
                    <h2 className="anime-title">{current.title}</h2>
                    <p className="discription-text">{current.description}</p >
                    <p className="discription-text">{"Recommended for: " + current.recommendedString}</p >
                    <p className="discription-text">Watch On:</p >
                    <ul>
                        {creatWebLinks}
                    </ul>
                </div>
            </div>
        </main>
    )
}

    export function Footer() {
        return (
            <footer>
                <section className="author">
                    <p>This website is developed by: <br />
                Cici Feng
                <a href=" " className="linkMain"> peiwenf@uw.edu </a > & Lei Lei
                <a href="leil4@uw.edu" className="linkMain"> leil4@uw.edu </a >
                & Doris Yang<a href="yuxiny5@uw.edu" className="linkMain"> yuxiny5@uw.edu </a >
                & Angela Yun<a href="ayun6@uw.edu" className="linkMain"> ayun6@uw.edu </a > <br />

                        <cite> Background image from <a href="https://unsplash.com/" className="linkMain">Unsplash.com</a ></cite>.
            <cite> Website icon from <a href="https://www.iconfinder.com/" className="linkMain">Iconfinder.com</a ></cite>.
            <cite> Information from <a href="https://jw-webmagazine.com/best-anime/"
                            className="linkMain">Jw-Webmagazine.com</a ></cite>.
            </p >
                </section>
                <p id="copyright">&copy; 2021 Cici Feng & Lei Lei & Doris Yang & Angela Yun.</p >
            </footer>
        )
    }
