import React from "react";
import '../style/style.css'
import Kasa from '../assets/Kasa.png'
import Booki from '../assets/Booki.png'
import Sophie from '../assets/Sophie-Bluel.png'
import Grimoire from '../assets/Mon-Vieux-Grimoire.png'
import '../style/queries.css'

function Projets () {
    return (
        <section className="sectionProjets" id="projets">
            <h2 className="sectionTitre">Mes projets</h2>
            <div className="projets-container">
                <a href="https://darielpeach.github.io/openclassrooms-projet2/" className="projet-card" target="_blank" rel="noopener noreferrer">
                    <img src={ Booki } alt="Booki" />
                    <h4>Booki</h4>
                    <p><b>Langages utilisés : </b>HTML, CSS</p>
                    <a href="https://github.com/darielpeach/openclassrooms-projet2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <b>Repo GitHub</b>
                    </a>
                </a>
                <a href="https://github.com/darielpeach/openclassrooms-projet3" className="projet-card" target="_blank" rel="noopener noreferrer">
                    <img src={ Sophie } alt="Portfolio Architecte d'intérieur" />
                    <h4>Portfolio - Architecte d'intérieur</h4>
                    <p><b>Langages utilisés : </b>JavaScript</p>
                </a>
                <a href="https://github.com/darielpeach/Projet-5" className="projet-card" target="_blank" rel="noopener noreferrer">
                    <img src={ Kasa } alt="Kasa" />
                    <h4>Kasa</h4>
                    <p><b>Frameworks utilisés : </b>React, SASS</p>
                </a>
                <a href="https://github.com/darielpeach/Projet-6" className="projet-card" target="_blank" rel="noopener noreferrer">
                    <img src={ Grimoire } alt="Mon Vieux Grimoire" />
                    <h4>Mon Vieux Grimoire</h4>
                    <p><b>Frameworks utilisés : </b>Express.js</p>
                    <p><b>Base de données utilisée : </b>MongoDB</p>
                </a>
            </div>
        </section>

    )
}

export default Projets
