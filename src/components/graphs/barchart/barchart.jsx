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

      useEffect(() => {
        setDatas(sessions)
      }, [])


      const sessions = props.data[1].sessions

      const tickFormatterX = (tick) => {
          const day = tick.split('-')
        return day[2]
      }

      let tabPds = []

      for (let i = 0; i < sessions.length; i++){
        tabPds.push(parseInt(sessions[i].kilogram))
      } 
      
      let tabCal =[]

      for (let i = 0; i < sessions.length; i++){
        tabCal.push(parseInt(sessions[i].calories))
      }

      // const factor = Math.max(...tabPds) / Math.max(...tabCal)

      // const formatedData = datas?.map(data => {
      //   data.adaptedCal = data.calories * factor
      //   return data
      // } )

      // console.log(formatedData)

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
       <XAxis dataKey="day" tickLine={false} axisLine={false} tickFormatter={tickFormatterX}/>
       <XAxis
         dataKey="day"
         axisLine={false}
         interval={0}
         height={1}
         scale="band"
       />
       <YAxis dataKey='kilogram' axisLine={false} tickCount={4} orientation='right' domain={["dataMin - 1", "dataMax + 1"]}/>
       <Tooltip />
       <Legend  wrapperStyle={{fontSize: "1.6rem", position: "relative", bottom: "19rem"}}
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize="10"/>
                
       <Bar     barSize={8}
                name="Poids (kg)"
                dataKey="kilogram" 
                fill="#020203" 
                radius={[50, 50, 0, 0]}/>

       <Bar     barSize={8}
                name="Calories brûlées (kCal)" 
                dataKey="calories" 
                fill="#E60000" 
                radius={[50, 50, 0, 0]}/>
       </BarChart>
      </ResponsiveContainer>
    : null)
}

BarCharts.propTypes = {    
  data : PropTypes.array
} 

export default BarCharts

