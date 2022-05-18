import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import styles from './radarGraph.module.css'

/**
 * @name RadarGraph
 * @description - This component render the radar graph component
 * @returns {JSX.Element}
 */

function RadarGraph (props) {

  const [datas, setDatas] = useState(undefined)

  useEffect(() => {
    const performances = props.data[3].data.map((performance, index) => {
      // Formate datas
      const kindName = ["cardio", "energie", "endurance", "force", "vitesse", "intensité"]
      return {
          kind: kindName[index],
          value: performance.value
      }
    })  
    setDatas(performances)
  }, [])

    return ( datas ?
      <div className={styles.radarCtn}>
        <ResponsiveContainer className={styles} width="98%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="50%" data={datas}>
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="kind" tickSize={8}
                    tick={{
                        fill: "white",
                        fontSize: 11,
                        fontWeight: 500,
                    }}/>
            <Radar dataKey="value" fill="#FF0101B2" stroke="#FF0101" fillOpacity={1} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    : null
    );
  }

  RadarGraph.propTypes = {    
    data : PropTypes.array
  } 

  export default RadarGraph
