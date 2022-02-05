import React from "react";
import waveHand from "../Images/wave-hand.png"
export default function Header() {
    return (
        <header className="intro">
            <h1 className="intro__hello">
                Hello!
                <img src={waveHand} alt="Hand Waving" className="emoji animated wave" />
            </h1>
            <h2 className="intro__tagline">
                I'm
                <span className="name"> Ralph Almonor</span>
                , a junior front-end software engineer focused on building user friendly websites and experiences 🧑🏽‍💻
            </h2>
            <h3 className="intro__contact">
                Get in touch 👉🏽 <span><a className="highlight-link" href="mailto:ralphalmonor4@gmail.com" target="_blank">ralphalmonor4@gmail.com</a></span>
            </h3>
        </header>
    )
}