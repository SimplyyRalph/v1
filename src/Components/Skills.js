import React from "react"

export default function Skills() {
    return (
        <section className="skills">
            <div className="skills__title">Skills</div>
            <div className="skills__content">
                <div className="skills__list">
                    <div className="skills__category">
                        <div className="skills__catergory_label">Languages</div>
                        <ul>
                            <li className="skills__category__item">C++</li>
                            <li className="skills__category__item">CSS3</li>
                            <li className="skills__category__item">HTML5</li>
                            <li className="skills__category__item">Python</li>
                            <li className="skills__category__item">JavaScript (ES6)</li>
                        </ul>
                    </div>
                    <div className="skills__category">
                        <div className="skills__catergory_label">Frameworks</div>
                        <ul>
                            <li className="skills__category__item">React</li>
                            <li className="skills__category__item">Node</li>
                            <li className="skills__category__item">Bootstrap</li>
                        </ul>
                    </div>
                    <div className="skills__category">
                        <div className="skills__catergory_label">Tools</div>
                        <ul>
                            <li className="skills__category__item">Git</li>
                            <li className="skills__category__item">Bash</li>
                            <li className="skills__category__item">Github</li>
                            <li className="skills__category__item">Command line</li>
                            <li className="skills__category__item">Chrome DevTools</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}