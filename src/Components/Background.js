import React from "react"
import cv from "../Images/Front-End.pdf"

export default function Background() {
    return (
        <section className="background">
            <div className="background__title">Background</div>
            <div className="background__content">
                <p>I'm a self-taught developer, who is fueled by curiosity and discipline,
                    I am highly motivated to <span className="imp">continue learning </span>
                    and improving my craft. I believe communication and collaboration are
                    the cornerstones of my approach to software engineering.
                    Reach out to me for any opportunities you think would be a good fit.
                </p>
                <p>
                    <span className="imp" >When I'm not programming</span>, I enjoy day trading, chess or basketball.
                </p>
                <a className="status" href="">
                    <div class="status__ring-light">
                        <div class="status__ringring"></div>
                        <div class="status__ring-circle"></div>
                    </div>
                    <a href={cv} target="_blank" className="status__message">Currently seeking full-time opportunities</a>
                </a>
            </div>
        </section>
    )
}