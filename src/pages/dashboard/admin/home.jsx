import { Box, Divider } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { CardMasonry } from "../../../components/card/card";
import { TableRow } from "../../../components/table/table";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCookie, setCookie } from '../../../hooks/useCookie';
import { decrypt } from '../../../hooks/useSecurity';
import CryptoJS from 'crypto-js';
import { ProgramSm } from "../../../components/programs/programs";

function AdminHome(){

  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  const [programs, setPrograms] = useState([]);

  // Get
  useEffect(() => {

    setId(decrypt(getCookie('id')))

    const xhr = new XMLHttpRequest();
    const url = `http://localhost:5000/backend/user?id=`+decrypt(getCookie('id'));
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setData(Object.values(response));
          console.log(Object.values(response));
        } else {
        }
      }
    };
    xhr.send();

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

  const sessionsData = [
    {
      name:"Name",
      value:"Program",
    },
    {
      name:"Name",
      value:"Program",
    },
    {
      name:"Name",
      value:"Program",
    },
  ]  
  const trainersData = [
    {
      name:"Name",
      value:"Program",
    },
    {
      name:"Name",
      value:"Program",
    },
  ]
  
  const adminProfile = data.map(key => {
    return (
      <>
        <h1>{key.name}</h1>
      </>
    )
  })

  return (
    <>
      <Divider sx={{m:5}}/>
      <DashboardHead title="Home" />

      <Box sx={{m:3}} ></Box>

      <div className="masonry-grid masonry-grid-count-2">
        <CardMasonry head="Programs" >
          <div className="m-card-tb">
            <ProgramSm data={programs}/>
          </div> 
        </CardMasonry>
        <CardMasonry head="Sessions" >
          <div className="m-card-tb">
            <TableRow rows={sessionsData}/>
          </div> 
        </CardMasonry>
        <CardMasonry head="Trainers" >
          <div className="m-card-tb">
            <TableRow rows={trainersData}/>
          </div> 
        </CardMasonry>
        <CardMasonry head="Students" >
          <div className="m-card-tb">
            <TableRow rows={sessionsData}/>
          </div> 
        </CardMasonry>
      </div>

    </>
  );
};

export default AdminHome;