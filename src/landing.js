import { Footer } from './spec';

export function CreateLandingPage() {
    return (
        <body>
        <LandingMain/>
        <Footer/>
        </body>
    )
}

function LandingMain() {
    return (
        <div className="landing-main">
            <header className="landing">
                <h1>WELCOME TO ANIWE</h1>
                <h2>A website for you to explore Anime!</h2>
            </header>
            <button type="button" className="explore_button" aria-label="Go Explore!"><a href=" ">Go Explore!</a ></button>
        </div>
    )
}
