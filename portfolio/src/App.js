import React from 'react'; 
import MenuBar  from './components/Menu'
import Banner from './components/Banner'
import Presentation from './components/presentation'
import Competences from './components/Competences'
import Projets from './components/Projets'
import { ContactUs } from './components/Form'




function App() {
    return (
        <React.StrictMode>
            <MenuBar />
            <Banner />
            <Presentation />
            <Competences />
            <Projets />
            <ContactUs />
        </React.StrictMode>
    );
}

export default App;

