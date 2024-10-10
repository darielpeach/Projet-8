import React from "react";
import '../style/style.css'
import htmlLogo from '../assets/html-logo.png'
import tools from '../assets/tools.png'
import mongodbLogo from '../assets/mongodb-logo.png'
import '../style/queries.css'

function Competences () {
    return (
        <section className="sectionCompetences" id="competences">
            <h2 className="sectionTitre">Mes compétences</h2>
            <div>
                <div>
                    <img src={ htmlLogo } alt="Logo HTML"></img>
                    <h3>Front-end</h3>
                    <p><b>Langages : </b>HTML, CSS, JavaScript</p>
                    <p><b>Frameworks et Bibliothèques : </b>React</p>
                </div>
                <div>
                    <img src={ mongodbLogo } alt="Logo MongoDB"></img>
                    <h3>Back-End</h3>
                    <p><b>Langages : </b>Node.js</p>
                    <p><b>Base de données : </b>MongoDB</p>
                    <p><b>Frameworks : </b>Express.js</p>
                    <p><b>API : </b>Création et utilisation d'API</p>
                </div>
                <div>
                    <img src={ tools } alt="Image d'outils"></img>
                    <h3>Outils</h3>
                    <p><b>Environnement de développement : </b>VScode</p>
                    <p><b>Gestion de projets : </b>Git, GitHub</p>
                    <p><b>Outils d'Assistance au Codage : </b>Prettier, Codeium, ChatGPT</p>
                </div>
            </div>
        </section>
    )
}

export default Competences