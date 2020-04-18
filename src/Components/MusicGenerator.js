import React from "react";
import Navigation from "./Navigation";

function MusicGenerator(){
    return (
        <div>
            <Navigation/>
            {window.open("http://melodify.live/webapp/webapp.html")}
        </div>
    );
}

export default MusicGenerator;