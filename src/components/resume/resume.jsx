import React from 'react'
import styles from './resume.module.css'
import calories from './calories.png'
import glucides from './glucides.png'
import lipides from './lipides.png'
import proteines from './proteines.png'

function Resume () {
    return (
        <div className={styles.resume}>
            <div className={styles.box}>
                <div className={styles.inside}>
                    <img src={calories} className={styles.resumeImg}></img>
                    <div className={styles.resumeDesc}>
                        <h4></h4>
                        <p>Calories</p>
                    </div>
                </div>
            </div>
                <div className={styles.box}>
                <div className={styles.inside}>
                    <img src={proteines} className={styles.resumeImg}></img>
                    <div className={styles.resumeDesc}>
                        <h4></h4>
                        <p>Proteines</p>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.inside}>
                    <img src={glucides} className={styles.resumeImg}></img>
                    <div className={styles.resumeDesc}>
                        <h4></h4>
                        <p>Glucides</p>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.inside}>
                    <img src={lipides} className={styles.resumeImg}></img>
                    <div className={styles.resumeDesc}>
                        <h4></h4>
                        <p>Lipides</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume