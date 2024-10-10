
import React from 'react'
import imgBanner from '../assets/pikaso_edit.jpeg'
import '../style/style.css'

function Banner () {
    return (
        <section className='banner'>
            <img src={ imgBanner } className='imgBanner' alt='Laptop coding'></img>
            <p className='txtBanner'>Lemonnier Sami - Développeur Front-End</p>
        </section>
    )
}

export default Banner;