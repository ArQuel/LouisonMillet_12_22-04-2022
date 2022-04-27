import React from "react"
import styles from './leftbar.module.css'
import logoOne from './logoOne.PNG'
import logoTwo from './logoTwo.PNG'
import logoThree from './logoThree.PNG'
import logoFour from './logoFour.PNG'

function Leftbar () {
return (
    <>
    <nav className={styles.leftbar}>
        <img src={logoOne} className={styles.logos}></img>
        <img src={logoTwo} className={styles.logos}></img>
        <img src={logoThree} className={styles.logos}></img>
        <img src={logoFour} className={styles.logos}></img>
    </nav>
    </>

)
}

export default Leftbar