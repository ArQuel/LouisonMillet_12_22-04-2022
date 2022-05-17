import React, {useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types"
import styles from './barcharts.module.css'


const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload) return null
      return (
          <div className={styles.tooltip_container}>
              <p>{payload[0].value}kg</p>
              <p>{payload[1].value}Kcal</p>
          </div>
      );

};

const tickFormatter = (tick) => {
  const day = tick.split('-')
return day[2]
}

function BarCharts(props) {

      const sessions = props.data[1].sessions

      const [datas, setDatas] = useState(undefined)

      useEffect(() => {
        setDatas(sessions)
      }, [])

    return ( datas ?
      <div className={styles.ctn}>
        <h2 className={styles.title}>Activités quotidiennes</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
               data={datas}
               margin={{
                   top: 0,
                   right: 0,
                   left: 0,
                   bottom: 0,
               }}
          >
          <CartesianGrid vertical={false} 
                         strokeDasharray="1 1"/>
          <XAxis dataKey="day" 
                 tickLine={false} 
                 axisLine={false} 
                 tickFormatter={tickFormatter}/>
          <YAxis 
                  dataKey='kilogram' 
                  tickLine={false} 
                  yAxisId="kilogram" 
                  axisLine={false} 
                  tickCount={4} 
                  orientation='right' 
                  domain={["dataMin - 1", "dataMax + 1"]}/>
          <YAxis
                  yAxisId="calories"
                  orientation="right"
                  tickLine={false}
                  dataKey="calories"
                  hide={true}/>
          <Tooltip content={<CustomTooltip />}/>
          <Legend wrapperStyle={{fontSize: "13px", bottom: "13.5rem"}}
                  align="right"
                  iconType="circle"
                  iconSize="4.5"/>

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
  data : PropTypes.array.isRequired,
} 

CustomTooltip.propTypes = {
  payload: PropTypes.array.isRequired,
  active: PropTypes.any
}


export default BarCharts

