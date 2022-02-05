import React from "react"

export default function Projects() {
    return (
        <section className="projects">
            <div className="projects__title">Projects</div>
            <div className="projects__content">
                <div className="project">
                    <div className="projects__name">
                        <a href="https://simplyyralph.github.io/AirBnb-clone/" target="_blank">AirBnb Clone</a>
                    </div>
                    <p>
                        Made this clone using purely HTML and CSS,
                        just to get a better understanding the semantic tags in HTML5,
                        and to reinforce naming and styling patterns for CSS.
                        I also used the Google map API to place the map.
                    </p>
                    <div className="projects__languages">
                        <span className="projects__languages__used">HTML</span>
                        <span className="projects__languages__used">CSS</span>
                        <span className="projects__languages__used">Google API</span>
                    </div>
                </div>
                <div className="project">
                    <div className="projects__name">
                        <a href="#" target="_blank">Command Hack</a>
                    </div>
                    <p>
                        A command line application that generates a ReadME markdown file. It was made to streamline the task of making mark down files to explain a project. In this project I used JavaScript, NPM: Inquirer, Node.js
                    </p>
                    <div className="projects__languages">
                        <span className="projects__languages__used">JavaScript</span>
                        <span className="projects__languages__used">Inquirer</span>
                        <span className="projects__languages__used">Node.js</span>
                    </div>
                </div>
                <div className="project">
                    <div className="projects__name">
                        <a href="#" target="_blank">Screen Share</a>
                    </div>
                    <p>
                        Using desktopCapture API to capture the contents on the screen this project allows the user to put any current screen into picture-in-picture mode. Aided me in studying efforts. I used HTML, CSS, and JavaScript.
                    </p>
                    <div className="projects__languages">
                        <span className="projects__languages__used">HTML</span>
                        <span className="projects__languages__used">CSS</span>
                        <span className="projects__languages__used">JavaScript</span>
                    </div>
                </div>
            </div>
        </section>
    )
}