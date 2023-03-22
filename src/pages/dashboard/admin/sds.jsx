import { Alert, Box, Button, CardActionArea, Chip, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { SdProfile } from "../../../components/sd/sd";
import { useState } from 'react';
import { Modal } from "react-bootstrap";

function AdminSds(){

  const [result, setResult] = useState(false);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  }; 
  
  const [show1, setShow1] = useState(false);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => {
    setShow1(false);
  }; 

  const sdsdata = [
    {
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "title": "Software engineer",
      "name": "Robert Glassbreaker",
      "email": "robert@glassbreaker.io",
      "phone": "+11 (876) 890 56 23",
      func:handleShow
    },
  ]

  return (
    <>
      <DashboardHead title="Students" func={handleShow1}/>

      <Box sx={{m:6}} ></Box>
      
      <div className="masonry-grid masonry-grid-count-4">
        {sdsdata.map(key => 
          <SdProfile 
            avatar={key.avatar}
            title={key.title}
            name={key.name}
            email={key.email}
            phone={key.phone}
            func={key.func}
          />
        )}
      </div>


      {/* modal */}
      {/* Upload */}
      <Modal
        show={show1}
        onHide={handleClose1}
        size="md"
        keyboard={false}
      >

        {/* <form  action={A_CLASS_UL} method="POST" onSubmit={(event) => handleSumbit(event)}> */}
          <Modal.Header closeButton>
            <Modal.Title>Add Student</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign:"center"}}>

            <Divider style={{margin:"5px 0px"}}/>
              
            <div className='masonry-grid masonry-grid-count-1'>
                
              <div className='masonry-grid__item'>
                <TextField
                  id="name"
                  name='name'
                  label="Name"
                  rows={1}
                  required
                  fullWidth
                  variant="outlined"
                /> 
              </div>
              <div className='masonry-grid__item'>
                <TextField
                  id="email"
                  name='email'
                  label="Email"
                  rows={1}
                  required
                  fullWidth
                  variant="outlined"
                /> 
              </div>
              <div className='masonry-grid__item'>
                <TextField
                  id="password"
                  name='password'
                  label="Password"
                  type={'password'}
                  rows={1}
                  required
                  fullWidth
                  variant="outlined"
                /> 
              </div>

            </div>

            <Divider style={{margin:"5px 0px"}}/>

            {result === true &&
              <Alert severity="success">
                Class Added Successfully.
              </Alert>
            }
            
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit' size='large' variant="contained" className='prime-btn'>
              {result === true ? "Adding" : 'Add'}
            </Button>
          </Modal.Footer>
      
        {/* </form> */}

      </Modal>
      
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
                Student 
              </span>
            &nbsp; 
            &nbsp; 
            &nbsp; 
              <span style={{color:"gray",fontSize:"13px"}}>
                a@gmail.com
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
          
          <Modal.Footer>
            <Button type='submit' size='large' variant="contained" className='prime-btn'>Remove</Button>
          </Modal.Footer>
        </Modal.Body>

      </Modal>

    </>
  )
}

export default AdminSds;