import React from 'react';
// import Fetch from './components/datas/fetch';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/leftbar/leftbar';
import Dashboard from './components/dashboard/dashboard';
import styles from './App.module.css'

function App() {
  return (
      <body>
        <Navbar></Navbar>
        <div className={styles.contenu}>
          <Leftbar></Leftbar>
          <Dashboard></Dashboard>
        </div>
      </body>
  );
}

export default App;
