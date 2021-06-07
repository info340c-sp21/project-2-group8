import { Footer } from './spec';
import App from './App'
import Route from 'react';

export function CreateLandingPage() {
    return (
        <body>
            <LandingMain />
            <Footer />
        </body>
    )
}

export function LandingMain() {
    return (
        <div className="landing-main">
            <header className="landing">
                <h1>WELCOME TO ANIWE</h1>
                <h2>A website for you to explore Anime!</h2>
            </header>
            <Route path="/app"> <button type="button" className="explore_button" aria-label="Go Explore!"><a href=" ">Go Explore!<App /></a ></button> </Route>
        </div>
    )
}

