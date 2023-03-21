import {  useEffect  } from 'react';
// external 
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// internal
import './style/index.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

 function App(){  
  useEffect(()=>{
    // its a animation of js 
    Aos.init();

  },[])

  return (
    <div className="app">
      <Outlet />
    </div>
  );
  }

export default App;
