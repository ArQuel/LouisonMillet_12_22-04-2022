import React from "react"
import styles from './Error404.module.css'

function Error404 () {

    return (
        <div className={styles.ErrorCtn}>
            <h1 className={styles.Error404}>
                Erreur 404
            </h1>
            <h2 className={styles.ErrorDesc}>
                Veuillez rentrer une URL et/ou un ID valide 
            </h2>
        </div>
    )
}

export default Error404