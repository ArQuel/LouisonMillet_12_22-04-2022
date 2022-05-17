import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import styles from './radarGraph.module.css'
function RadarGraph (props) {

  const [datas, setDatas] = useState(undefined)

  useEffect(() => {
    const performances = props.data[3].data.map((performance, index) => {
      // Formater les données
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
        <ResponsiveContainer className={styles} width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="55%" data={datas}>
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
