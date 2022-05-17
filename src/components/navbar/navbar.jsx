import React from "react"
import logo from './Vector.png'
import styles from './navbar.module.css'

function Navbar () {
return (
    <>
    <nav className={styles.navbar}>
            <img src={logo} className={styles.image}></img>
        <div>
            <span className={styles.spanNav}>Accueil</span>
        </div>
        <div>
            <span className={styles.spanNav}>Profil</span>
        </div>
        <div>
            <span className={styles.spanNav}>Réglages</span>
        </div>
        <div>
            <span className={styles.spanNav}>Communauté</span>
        </div>
    </nav>
    </>

)
}

export default Navbar