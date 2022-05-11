import React from "react"
import styles from './dashboard.module.css'
import PropTypes from "prop-types"
import Resume from '../resume/resume'
import datas12 from '../datas/data12'
// import datas18 from '../datas/data18'
import BarCharts from '../graphs/barchart/barchart'
import RadarGraph from "../graphs/radarGraph/radarGraph"

function Dashboard (props) {
    
    return (
        <div className={styles.dashboard}>
        <div>
            <span className={styles.user}>Bonjour</span>
            <span className={`${styles.user} ${styles.name}`}>{props.name}</span>
            <p className={styles.congratulations}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
            <BarCharts data={datas12}></BarCharts>
            <Resume data={datas12}></Resume>
                <div className={styles.radar}>
                    <RadarGraph data={datas12}></RadarGraph>
                </div>
        </div>
    )
}

Dashboard.propTypes = {    
    name : PropTypes.string
}    



export default Dashboard