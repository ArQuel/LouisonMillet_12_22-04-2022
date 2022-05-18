import React, { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/leftbar/leftbar';
import Dashboard from './components/dashboard/dashboard';
import styles from './App.module.css'
// import ApiServices from './services/fetch';
// import datas12 from './datas/data12'
import datas18 from './datas/data18'
import { useState } from 'react';

/**
 * @name App
 * @description - This component is the parent of the project, he will call all the child components and push them datas as props
 * @returns {JSX Element}
 */

function App() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    // ApiServices(12).then(datas => {
      setUser(datas18)
    // })
  }, [])

  return (user ? 
      <div>
        <Navbar></Navbar>
        <div className={styles.contenu}>
          <Leftbar></Leftbar>
          <Dashboard user={user}></Dashboard>
        </div>
      </div> : <p>Chargement...</p>
  )}

export default App;
