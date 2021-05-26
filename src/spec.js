export function CreateSpecPage() {
    return (
        <body>
        <Header/>
        <SpecMain/>
        <Footer/>
        </body>
    )
    }

export function Header() {
    return (
            <header>
                <div className="container">
                    <button className="aniweButton">
                    <h1>ANIWE</h1>
                    </button>
                <h2>Start searching for your anime!</h2>
                </div>
            </header>
    )
}
function SpecMain() {
    return(
        <main className="index-main">
        <div className="flexbox-single-anime">
          <div className="discription-container">
            <img className="poster" src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UY1200_CR115,0,630,1200_AL_.jpg" alt="Demon Slayer: Kimetsu no Yaiba" />
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