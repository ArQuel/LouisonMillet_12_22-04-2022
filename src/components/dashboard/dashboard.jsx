import React, {useEffect, useState} from "react"
import { useParams } from "react-router"
import styles from './dashboard.module.css'
import Resume from '../resume/resume'
import BarCharts from '../graphs/barchart/barchart'
import RadarGraph from "../graphs/radarGraph/radarGraph"
import Score from '../graphs/score/score'
import Average from "../graphs/average/average"
import ApiServices from '../../services/fetch';
import datas12 from '../../datas/data12'
// import datas18 from '../../datas/data18'
import Error404 from "../Error404/Error404"

/**
 * @name Dashboard
 * @description - This component will main page including all the child components.
 * @returns {JSX.Element}
 */

function Dashboard () {
    const [user, setUser] = useState(undefined)
    let { id } = useParams()
    // if URL param is not user 12 or user 18, then display Error 404 component
    if (parseInt(id) !== 18 && parseInt(id) !== 12){
        return <Error404 />
    }

    useEffect(() => {

      // eslint-disable-next-line no-undef
      if (process.env.REACT_APP_SOURCE === "API") {
        
        ApiServices(id).then(datas => {
          setUser(datas)
        })
      } else {
        setUser(datas12)
      }
  
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
                    <Average data={user}></Average>
                    <RadarGraph data={user}></RadarGraph>
                    <Score data={user}></Score>
                </div>
        </div> : <h1>Chargement...</h1>
    )
}





export default Dashboard