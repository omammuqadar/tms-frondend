import { Box, Divider } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { Program } from "../../../components/programs/programs";
import { useState, useEffect } from 'react';
import { getCookie } from '../../../hooks/useCookie';
import { decrypt } from '../../../hooks/useSecurity';

function AdminPrograms(){

  const [id, setId] = useState('');
  const [programs, setPrograms] = useState([]);

  useEffect(() => {

    setId(decrypt(getCookie('id')))

    // Program
    const xhr_prog = new XMLHttpRequest();
    const url_prog = `http://localhost:5000/backend/program`;
    xhr_prog.open('GET', url_prog, true);
    xhr_prog.onreadystatechange = function() {
      if (xhr_prog.readyState === XMLHttpRequest.DONE) {
        if (xhr_prog.status === 200) {
          const response = JSON.parse(xhr_prog.responseText);
          setPrograms(Object.values(response));
        } else {
        }
      }
    };
    xhr_prog.send();
    
  }, [id]);

  return (
    <>
      <Divider sx={{m:5}}/>
      <DashboardHead title="Programs" />

      <Box sx={{m:3}} ></Box>
      
      <div className="masonry-grid masonry-grid-count-4">
        <Program 
          data={programs}
        />    
      </div>

    </>
  );
};

export default AdminPrograms;