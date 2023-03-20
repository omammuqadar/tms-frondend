import { useState, useEffect  } from 'react';
// external 
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// internal
import './style/index.css';

 function App(){  

  return (
    <div className="app">
      <Outlet />
    </div>
  );
  }

export default App;
