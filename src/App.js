import React, { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/leftbar/leftbar';
import Dashboard from './components/dashboard/dashboard';
import styles from './App.module.css'
import ApiServices from './components/datas/fetch';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    ApiServices(12).then(datas => {
      console.log(datas)
      setUser(datas.data.userInfos)
    })
  }, [])

  return (user ? 
      <div>
        <Navbar></Navbar>
        <div className={styles.contenu}>
          <Leftbar></Leftbar>
          <Dashboard name={user.firstName}></Dashboard>
        </div>
      </div> : <p>Chargement...</p>
  )}

export default App;
