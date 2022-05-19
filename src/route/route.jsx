import {
    Routes,
    Route,
  } from "react-router-dom";
  import React from 'react'
//   import Error404 from '../Error404/Error404'
  import Dashboard from "../components/dashboard/dashboard";

  function Chemin() {
      return(
            <Routes>
              <Route path="/" />
                <Route path="/user/:id" element={<Dashboard />} />
              {/* <Route path="*" element={<Error404 />} /> */}
            </Routes>
        );
  }
  
  export default Chemin