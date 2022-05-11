import React from 'react';
import styles from './resume.module.css'
import calories from './calories.png'
import glucides from './glucides.png'
import lipides from './lipides.png'
import proteines from './proteines.png'
import PropTypes from "prop-types"
import { useState, useEffect } from 'react';

function Resume (props) {

    const [datas, setDatas] = useState(undefined)

      useEffect(() => {
        setDatas(props.data[0].keyData)
      }, [])
    

    return ( datas ?
        <div className={styles.resume}>
            <div className={styles.box}>
                <div className={styles.inside}>
                    <img src={calories} className={styles.resumeImg}></img>
                    <div className={styles.resumeDesc}>
                        <h4 className={styles.count}>{datas.calorieCount}kCal</h4>
                        <p className={styles.name}>Calories</p>
                    </div>
                </div>
            </div>
                <div className={styles.box}>
                <div className={styles.inside}>
                    <img src={proteines} className={styles.resumeImg}></img>
                    <div className={styles.resumeDesc}>
                        <h4 className={styles.count}>{datas.proteinCount}g</h4>
                        <p className={styles.name}>Proteines</p>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.inside}>
                    <img src={glucides} className={styles.resumeImg}></img>
                    <div className={styles.resumeDesc}>
                        <h4 className={styles.count}>{datas.carbohydrateCount}g</h4>
                        <p className={styles.name}>Glucides</p>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.inside}>
                    <img src={lipides} className={styles.resumeImg}></img>
                    <div className={styles.resumeDesc}>
                        <h4 className={styles.count}>{datas.lipidCount}g</h4>
                        <p className={styles.name}>Lipides</p>
                    </div>
                </div>
            </div>
        </div>
    : null)
}

Resume.propTypes = {    
    data : PropTypes.array
  } 

export default Resume