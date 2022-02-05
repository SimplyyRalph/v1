import React from "react";
import Toggle from "./Components/Toggle";
import Header from "./Components/Header";
import Background from "./Components/Background";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";


export default function App() {
    return (
        <>
            <Toggle />
            <Header />
            <Background />
            <Skills />
            <Projects/>
            <Footer />
        </>
    );
}
