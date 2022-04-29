import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import styles from './barchart.module.css'
import ApiServices from '../../datas/fetch';
import { useState } from 'react';

// const data = [
//   {
//     date: '2000-01',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     date: '2000-02',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     date: '2000-03',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     date: '2000-04',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     date: '2000-05',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     date: '2000-06',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     date: '2000-07',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     date: '2000-08',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     date: '2000-09',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     date: '2000-10',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     date: '2000-11',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     date: '2000-12',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
// ];





function BarCharts() {
    const monthTickFormatter = (tick) => {
        const date = new Date(tick);
      
        return date.getMonth() + 1;
      };

      const [datas, setDatas] = useState(undefined)

  useEffect(() => {
    ApiServices(12, 'activity').then(datas => {
      const sessions = datas.data.sessions
      console.log(sessions)
      setDatas(sessions)
    })
  }, [])
      
    return (
      <ResponsiveContainer width="50%" height="40%">
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
       <CartesianGrid vertical={false} strokeDasharray="1 1" />
       <XAxis dataKey="day" tickFormatter={monthTickFormatter} />
       <XAxis
         dataKey="date"
         axisLine={false}
         tickLine={false}
         interval={0}
         height={1}
         scale="band"
       />
       <YAxis />
       <Tooltip />
       <Legend />
       <Bar dataKey="pv" fill="#282D30" radius={[50, 50, 0, 0]}/>
       <Bar dataKey="uv" fill="#E60000" radius={[50, 50, 0, 0]}/>
       </BarChart>
      </ResponsiveContainer>
    )
}

export default BarCharts