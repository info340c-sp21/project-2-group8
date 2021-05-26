import React, { useState, useEffect} from 'react';

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
          <div className="App">
            <Header />
            <CreateSearch/>
            <CreateCardList cards={data}/>
            <Spec />
            <Footer />
          </div>
        );
      }

export default App;

function Spec() {
    return(
        <div>
            <SpecHeader />
            <SpecMain />
        </div>
    )
}

function SpecHeader() {
    return(
        <header>
            <div className="container">
                <h1>ANIWE</h1>
                <h2>Here is your anime!</h2>
            </div>
      </header>
    )
}

function SpecMain() {
    return(
        <main className="index-main">
        <div className="flexbox-single-anime">
          <div className="discription-container">
            <img className="poster" src="img/top1.jpg" alt="Demon Slayer: Kimetsu no Yaiba" />
          </div>
    
          <div className="discription-container-title">
            <h2 className="anime-title">Demon Slayer: Kimetsu no Yaiba</h2>
            <p className="discription-text">The anime is set in the Taisho period (1912-1926) in Japan where demons exist with
              human beings. The main character Tanjiro Kamado finds his family is killed by the attack of demons and only
              his sister Nezuko is changed into a demon. He decides to become a demon slayer to restore her to a human.</p>
            <p className="discription-text">Genre: Drama, Action, Adventure, Dark Fantasy</p>
            <p className="discription-text">Recommended for Beginners/Anime Fans</p>
            <p className="discription-text">Watch On:</p>
            <ul>
              <li><a href="https://www.netflix.com/title/81091393">Netflix</a></li>
              <li><a
                  href="https://www.amazon.co.jp/%E7%AC%AC%E5%8D%81%E5%85%AD%E8%A9%B1-%E8%87%AA%E5%88%86%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E8%AA%B0%E3%81%8B%E3%82%92%E5%89%8D%E3%81%B8/dp/B07QFDRBJP/ref=as_li_ss_tl?dchild=1&keywords=Kimetsu+no+Yaiba&qid=1589796832&s=instant-video&sr=1-1&linkCode=sl1&tag=japanwebmag09-22&linkId=1ad804688f820740f1cef476ab554995&language=en_US">Amazon
                  Prime Video</a></li>
            </ul>
          </div>
    
        </div>
    
      </main>
    )
}


// function App() {
//     ComponentDidMount() {

//     }

//     return(
//         <Spec />
//     )
// }


function CreateCard(props) {
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-sm-auto"> <img src={props.card.imgSrc} alt={"poster of" + props.card.title}></img></div>
                <div className="col-sm">
                    <h2 className="card-title">{props.card.title}</h2>
                    <p className="card-text">{"Air Dates: from " + props.card.airDate} </p>
                    <p className="card-text">{"Genre: " + props.card.genreString} </p>
                    <p className="card-text">{"Recommended for: " + props.card.recommendedString} </p>
                    <a href="spec.html" className="btn" id="see_more" role="button">See More</a>
                </div>
            </div>
        </div>
    )
}

function CreateCardList(props) {
    let createCards = props.cards.map((card) => {
        return <CreateCard card={card} key={card.title}/>
      })
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 d-flex">
                    <div className="card mb-4 ml-2 mr-2">
                        {createCards}
                    </div>
                </div>
            </div>
        </div>
    )
}

function CreateSearch(props) {
    return (
        <div className="searchBox" role="search">
        <input type="text" placeholder=" Search..." id="sinput" aria-label="search input"/>
        <button aria-label="search" className="searchButton"><i className="fas fa-search" aria-label="search button" id="search"></i></button>
        </div>
    )
}

export function Header() {
    return (
        <div className="landing-main">
            <header className="landing">
                <h1>WELCOME TO ANIWE</h1>
                <h2>A website for you to explore Anime!</h2>
            </header>
            <button type="button" className="explore_button" aria-label="Go Explore!"><a href="main.html">Go Explore!</a></button>
        </div>
    )
}

export function Footer() {
    return (
        <footer>
            <section className="author">
            <p>This website is develped by: <br />
                Cici Feng 
                <a href=" " className="linkMain">peiwenf@uw.edu</a > & Lei Lei
                <a href="leil4@uw.edu" className="linkMain">leil4@uw.edu</a >
                & Doris Yang<a href="yuxiny5@uw.edu" className="linkMain">yuxiny5@uw.edu</a >
                & Angela Yun<a href="ayun6@uw.edu" className="linkMain">ayun6@uw.edu</a > <br />
            
            {/* <p>This website is develped by: Cici Feng <a href=" " className="linkMain">peiwenf@uw.edu</a > & Lei Lei
                <a href="leil4@uw.edu" className="linkMain">leil4@uw.edu</a >
            </p > */}
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
{/* <p>Cici Feng <a href="peiwenf@uw.edu">peiwenf@uw.edu</a></p>
<p>Lei Lei <a href="leil4@uw.edu">leil4@uw.edu</a></p>
<p>Doris Yang <a href="yuxiny5@uw.edu">yuxiny5@uw.edu</a></p>
<p>Angela Yun <a href="ayun6@uw.edu">ayun6@uw.edu</a></p> */}