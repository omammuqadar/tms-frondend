import { Box, Divider } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { CardMasonry } from "../../../components/card/card";
import { TableRow } from "../../../components/table/table";

function TrainerHome(){

  const programsData = [
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
    {
      name:"Name",
      value:"Program",
    },
    {
      name:"Name",
      value:"Program",
    },
  ]
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
  
  return (
    <>
      <Divider sx={{m:5}}/>
      <DashboardHead title="Home" />

      <Box sx={{m:3}} ></Box>
      
      <div className="masonry-grid masonry-grid-count-2">
        <CardMasonry head="Programs" >
          <div className="m-card-tb">
            <TableRow rows={programsData}/>
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

export default TrainerHome;