import React, { useState, useEffect } from 'react';
import {Tooltip, ResponsiveContainer, XAxis, YAxis,Line, LineChart} from 'recharts';
import PropTypes from "prop-types"
import styles from './average.module.css'

/**
 * @name Average
 * @description - This component render the Average duration sessions graph component
 * @returns {JSX.Element}
 */

// Create custom tooltip
const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload) return null
        return (
            <div className={styles.averageTooltip}>
                <p className={styles.insideTooltip}>{payload[0].value} min</p>
            </div>
        );
  };


function Average (props) {

    const sessions = props.data[2].sessions
    const [datas, setDatas] = useState(undefined)

    useEffect(() => {
        const average = sessions.map((session, index) => {
            // Formater les données
            const daysLetters = ["L", "M", "M", "J", "V", "S", "D"];
      
            return {
                day: daysLetters[index],
                sessionLength: session.sessionLength
            }
          })  
          setDatas(average)
    }, [])
    
    return (datas ?
        <div className={styles.averageCtn}>
            <h2 className={styles.titleAverage}>Durée moyenne des<br />sessions</h2>
            <ResponsiveContainer title="Durée moyenne des sessions" width="100%" height="100%">
                <LineChart width="100%" height="100%" data={datas}
                    margin={{ top: 80, right: 10, left: 10, bottom: 20 }}>
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            stroke: 'rgba(0, 0, 0, 0.1)',
                            strokeWidth: 0,
                        }}
                    />
                    <XAxis dataKey="day"
                        stroke="rgba(255, 255, 255, 0.6)"
                        axisLine={false}
                        dy={15}
                        tickLine={false}
                        tick={{
                            fill: "white", fontSize: 10, fontWeight: 0
                        }}
                    />
                    <YAxis dataKey="sessionLength" hide={true} domain={[0, "dataMax +10"]} />
                    <Line type="natural"
                        strokeWidth={1}
                        dataKey="sessionLength"
                        stroke="white"
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255,255,255, 0.5)", strokeWidth: 8, r: 2.5
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
        : null)
}

Average.propTypes = {    
    data : PropTypes.array
  } 
 
CustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.any
}

// CustomCursor.propTypes = {
//     points: PropTypes.any,
//     width: PropTypes.any,
//     height: PropTypes.any,
//     stroke: PropTypes.any
// }

export default Average

