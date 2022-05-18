import React, {useEffect, useState} from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styles from './score.module.css'
import PropTypes from "prop-types"

// const data = [
//   {
//     name: '18-24',
//     uv: 31.47,
//     pv: 2400,
//     fill: '#8884d8',
//   },
//   {
//     name: '25-29',
//     uv: 26.69,
//     pv: 4567,
//     fill: '#83a6ed',
//   },
//   {
//     name: '30-34',
//     uv: 15.69,
//     pv: 1398,
//     fill: '#8dd1e1',
//   },
//   {
//     name: '35-39',
//     uv: 8.22,
//     pv: 9800,
//     fill: '#82ca9d',
//   },
//   {
//     name: '40-49',
//     uv: 8.63,
//     pv: 3908,
//     fill: '#a4de6c',
//   },
//   {
//     name: '50+',
//     uv: 2.63,
//     pv: 4800,
//     fill: '#d0ed57',
//   },
//   {
//     name: 'unknow',
//     uv: 6.67,
//     pv: 4800,
//     fill: '#ffc658',
//   },
// ];

function Score (props) {
  const score = props.data[0].todayScore
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
                            innerRadius={80}
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