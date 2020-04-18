import React from "react";
import "./styles.css";
function Home() {

    return <div className="div">
        <h1 className="header">Melodify</h1>
        <h2 className="header2">Science. Technology. Music.</h2>
        <button type="submit" className="Button1" onClick={x => window.open("https://drive.google.com/file/d/1HJCLTb-KIfr8xe4C_qfeLLwlslryFEo8/view?usp=sharing")}>Download Android App</button>
        <button type="submit" className="Button2" onClick={x => window.open("https://drive.google.com/file/d/1qKlJ-OcgFeuezOiElewcE1pE4bYRHp3R/view?usp=sharing")}>Download Windows App</button>
        <button type="submit" className="Button3" onClick={x => window.open("http://melodify.live/webapp/webapp.html")}>Go to Music Generator</button>
        <p className="paragraph">Melodify uses scientifically proven techniques to help you relax.</p>
        <p className="paragraph">Customize your "sound bath," and when you're ready, hit start, close your eyes and relax for 45 minutes.</p>
        <p className="paragraph">Click the Music Generator button to start your relaxing experience</p>
    </div>;
}
export default Home;