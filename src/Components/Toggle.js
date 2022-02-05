import React from "react"
import sunDark from "../Images/sun-light.png"
import moonDark from "../Images/moon-dark.png"

export default function Toggle() {
    return (
        <section className="toggle">
            <img className="toggle__moon-dark" src={moonDark} alt="dark moon" />
            <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
            </label>
            <img className="toggle__sun-dark" src={sunDark} alt="dark sun" />
        </section>
    )
}