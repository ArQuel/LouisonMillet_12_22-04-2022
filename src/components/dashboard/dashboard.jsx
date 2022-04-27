import React from "react"
import styles from './dashboard.module.css'
// import { ReactPropTypes } from "react"

function Dashboard () {
    // Dashboard.ReactPropTypes = {    
    //     name : 'Utilisateur'
    // }    
    
    // Changer le className et le Utilisateur lorsque API sera fait
return (
    <>
    <div className={styles.dashboard}>
        <span className={styles.user}>Bonjour</span>
        <span className={styles.user}>{props.name}</span>
    </div>
    </>

)
}



export default Dashboard