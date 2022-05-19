import React from 'react';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/leftbar/leftbar';
import styles from './App.module.css'
import Chemin from './route/route';

/**
 * @name App
 * @description - This component is the parent of the project, he will call all the child components and push them datas as props
 * @returns {JSX Element}
 */

function App() {


  return (
      <div>
        <Navbar></Navbar>
        <div className={styles.contenu}>
          <Leftbar></Leftbar>
          <Chemin />
        </div>
      </div>
  )}

export default App;
