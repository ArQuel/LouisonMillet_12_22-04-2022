import React from "react"
import styles from './dashboard.module.css'
import PropTypes from "prop-types"
import Graphiques from "../graphiques/graphiques"
import Resume from '../resume/resume'
function Dashboard (props) {

    
return (
    <div className={styles.dashboard}>
    <div>
        <span className={styles.user}>Bonjour</span>
        <span className={`${styles.user} ${styles.name}`}>{props.name}</span>
        <p className={styles.congratulations}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
        <Graphiques></Graphiques>
        <Resume></Resume>
    </div>

)
}

    Dashboard.propTypes = {    
        name : PropTypes.string
    }    



export default Dashboard