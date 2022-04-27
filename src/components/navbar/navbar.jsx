import React from "react"
import logo from './Vector.png'
import styles from './navbar.module.css'

function Navbar () {
return (
    <>
    <nav className={styles.navbar}>
            <img src={logo} className={styles.image}></img>
        <div>
            <span>Accueil</span>
        </div>
        <div>
            <span>Profil</span>
        </div>
        <div>
            <span>Réglages</span>
        </div>
        <div>
            <span>Communauté</span>
        </div>
    </nav>
    </>

)
}

export default Navbar