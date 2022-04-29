import React from "react"
import styles from './leftbar.module.css'
import logoOne from './logoOne.PNG'
import logoTwo from './logoTwo.PNG'
import logoThree from './logoThree.PNG'
import logoFour from './logoFour.PNG'
// import PropTypes from "prop-types"
function Leftbar () {


return (
    <>
    <nav className={styles.leftbar}>
        <img src={logoOne} className={styles.logos}></img>
        <img src={logoTwo} className={styles.logos}></img>
        <img src={logoThree} className={styles.logos}></img>
        <img src={logoFour} className={styles.logos}></img>
        <span className={styles.copyright}>Copyright, SportSee 202</span>
    </nav>
    </>

)
}


// Leftbar.PropTypes = {    
//     name : PropTypes.string
// }    

// Leftbar.defaultProps = {
//     name : 'composant'
// }

export default Leftbar