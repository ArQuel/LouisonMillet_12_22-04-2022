import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
  import React from 'react'
  import Error404 from '../components/Error404/Error404'
  import Dashboard from "../components/dashboard/dashboard";

  function Chemin() {
      return(
            <Routes>
              <Route path="/" element={<Navigate to="/user/12" replace />}/>
                <Route path="/user/:id" element={<Dashboard />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        );
  }
  
  export default Chemin