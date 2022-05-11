import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
// import { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import styles from './radarGraph.module.css'

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function RadarGraph () {

  // const [datas, setDatas] = useState(undefined)

  // let kindTab = []
  
  // useEffect(() => {
  //   setDatas(props.data[3])
  // }, [])
  //   console.log(datas)

  //   for (let i = 0; i < datas.kind.length; i++){
  //     console.log(datas.data.kind[i])
  //   }

    return (
      <ResponsiveContainer className={styles} width="20%" height={150}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar dataKey="A" fill="#FF0101B2" fillOpacity={1} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }

  RadarGraph.propTypes = {    
    data : PropTypes.array
  } 

  export default RadarGraph
