import React, {useEffect, useState} from "react"
import styles from './dashboard.module.css'
import PropTypes from "prop-types"
import Resume from '../resume/resume'
import BarCharts from '../graphs/barchart/barchart'
import RadarGraph from "../graphs/radarGraph/radarGraph"
import Score from '../graphs/score/score'
function Dashboard (props) {
    const [user, setUser] = useState(undefined)

  useEffect(() => {
    // ApiServices(12).then(datas => {
      setUser(props.user)
    // })
  }, [])
    return ( user ? 
        <div className={styles.dashboard}>
        <div>
            <span className={styles.user}>Bonjour</span>
            <span className={`${styles.user} ${styles.name}`}>{user[0].userInfos.firstName}</span>
            <p className={styles.congratulations}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
            <BarCharts data={user}></BarCharts>
            <Resume data={user}></Resume>
                <div className={styles.graphs}>
                    <RadarGraph data={user}></RadarGraph>
                    <Score data={user}></Score>
                </div>
        </div> : <h1>Chargement</h1>
    )
}

Dashboard.propTypes = {    
    user : PropTypes.array.isRequired
}    



export default Dashboard