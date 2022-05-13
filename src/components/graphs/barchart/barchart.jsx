import React, {useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import PropTypes from "prop-types"
import styles from './barcharts.module.css'

function BarCharts(props) {

      const sessions = props.data[1].sessions

      const [datas, setDatas] = useState(undefined)

      useEffect(() => {
        setDatas(sessions)
      }, [])

      const tickFormatter = (tick) => {
          const day = tick.split('-')
        return day[2]
      }


    return ( datas ?
      <div className={styles.ctn}>
        <h2 className={styles.title}>Activités quotidiennes</h2>
        <ResponsiveContainer width="65%" height="100%">
          <BarChart
               data={datas}
               margin={{
                   top: 0,
                   right: 0,
                   left: 0,
                   bottom: 0,
               }}
          >
          <CartesianGrid vertical={false} strokeDasharray="1 1"/>
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickFormatter={tickFormatter}/>
          <YAxis dataKey='kilogram' yAxisId="kilogram" axisLine={false} tickCount={4} orientation='right' domain={["dataMin - 1", "dataMax + 1"]}/>
          <YAxis
                  yAxisId="calories"
                  orientation="right"
                  tickLine={false}
                  dataKey="calories"
                  hide={true}/>
          <Tooltip />
          <Legend wrapperStyle={{fontSize: "1rem", bottom: "13.5rem"}}
                  align="right"
                  iconType="circle"
                  iconSize="5"/>

          <Bar    barSize={7}
                  name="Poids (kg)"
                  yAxisId="kilogram"
                  dataKey="kilogram" 
                  fill="#020203" 
                  radius={[50, 50, 0, 0]}/>
        
          <Bar    barSize={7}
                  yAxisId="calories"
                  name="Calories brûlées (kCal)" 
                  dataKey="calories" 
                  fill="#E60000" 
                  radius={[50, 50, 0, 0]}/>
         </BarChart>
        </ResponsiveContainer>
      </div>
    : null)
}

BarCharts.propTypes = {    
  data : PropTypes.array
} 

export default BarCharts

