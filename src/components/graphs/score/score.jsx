import React, {useEffect, useState} from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styles from './score.module.css'
import PropTypes from "prop-types"

/**
 * @name Score
 * @description - This component render the score graph component
 * @returns {JSX.Element}
 */

function Score (props) {
  const score = props.data[0].todayScore
  // Formate datas
  const currentScore = score *100
  const valueScore = [{
    value: currentScore
  }]
  const [datas, setDatas] = useState(undefined)
  useEffect(() => {
    setDatas(valueScore)
  }, [])
    return ( datas ?
        <div className={styles.scoreCtn}>
          <h2 className={styles.titreScore}>Score</h2>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart data={datas}
                            innerRadius={100}
                            barSize={10}
                            startAngle={90}
                            endAngle={450}
                            fill={'#ff0000'}>
              <PolarAngleAxis type="number"
                              domain={[0, 100]}
                              tick={false}/>
              <RadialBar dataKey="value"
                         cornerRadius={5}
                         background/>
              <text x="50%"
                    y="45%"
                    textAnchor="middle"
                    fontSize="26"
                    fontWeight="700"
                    fill="black">
              {currentScore}%
              </text>
              <text x="50%" 
                    y="60%"
                    textAnchor="middle" 
                    fontSize="14" 
                    fill="grey" 
                    fontWeight="500">
              de votre  objectif
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      
    : null);
  }

  Score.propTypes = {    
    data : PropTypes.array.isRequired,
  } 

  export default Score