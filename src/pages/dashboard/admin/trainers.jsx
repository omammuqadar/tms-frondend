import { Box, Divider } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { TrainerProfile } from "../../../components/trainers/trainers";
import { useState } from 'react';
import { CardActionArea, Chip } from "@mui/material";
import Modal from 'react-bootstrap/Modal';

function AdminTrainers(){

  // Modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  }; 

  const trainersdata = [
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director",
      func:handleShow
    },       
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director",
      func:handleShow
    },        
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director",
      func:handleShow
    },        
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director",
      func:handleShow
    },    
  ]

  return (
    <>
      <DashboardHead title="Trainers" />

      <Box sx={{m:3}} ></Box>
      
      <div className="masonry-grid masonry-grid-count-4">
        {trainersdata.map(key => 
          <TrainerProfile 
            avatar={key.avatar}
            name={key.name}
            email={key.email}
            job={key.job}
            func={key.func}
          />
        )}
      </div>

      {/* Program Detail */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        keyboard={false}
      >
        
        <Modal.Header closeButton>
          <Modal.Title>
              <span >
                Trainer 
              </span>
            &nbsp; 
            &nbsp; 
            &nbsp; 
              <span style={{color:"gray",fontSize:"13px"}}>
                03/23/2023 
              </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='m-card-contt' style={{padding:"20px"}}>  

            <Divider style={{margin:"20px"}} textAlign="left">
              <Chip label="Sessions"/>
            </Divider>
            
            <Box>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Session 1"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"detail"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Session 2"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"detail"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
            </Box>
            

          </div>

        </Modal.Body>

      </Modal>

    </>
  )
}

export default AdminTrainers;