import React, {useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import PropTypes from "prop-types"


function BarCharts(props) {
    // const monthTickFormatter = (tick) => {
    //     const date = new Date(tick);
      
    //     return date.getMonth() + 1;
    //   };
          // tickFormatter={monthTickFormatter}

      const [datas, setDatas] = useState(undefined)

      const sessions = props.data[1].sessions

      const tickFormatterX = () => {
        for (let i = 0; i < sessions.length; i++){
          const day = sessions[i].day.split('-0')
          return parseInt(day[2])
        } 
      }
      
      useEffect(() => {
        setDatas(sessions)
      }, [])

      let tab = []

      for (let i = 0; i < sessions.length; i++){
        tab.push(sessions[i].kilogram)
      } 
      

    return ( datas ?
      <ResponsiveContainer width="65%" height="40%">
       <BarChart
           width={500}
           height={300}
           data={datas}
           margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
        }}
       >
       <CartesianGrid vertical={false} strokeDasharray="1 1"/>
       <XAxis dataKey="day" tickFormatter={tickFormatterX}/>
       <XAxis
         dataKey="day"
         axisLine={false}
         tickLine={false}
         interval={0}
         height={1}
         scale="band"
       />
       <YAxis dataKey='kilogram' orientation='right' domain={[Math.min(tab), Math.max(tab)]}/>
       <Tooltip />
       <Legend />
       <Bar barSize={8} dataKey="kilogram" fill="#282D30" radius={[50, 50, 0, 0]}/>
       <Bar barSize={8} dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]}/>
       </BarChart>
      </ResponsiveContainer>
    : null)
}

BarCharts.propTypes = {    
  data : PropTypes.array
} 

export default BarCharts

