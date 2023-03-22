import { Alert, Box, Button, CardActionArea, Chip, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { Program } from "../../../components/programs/programs";
import { useState, useEffect } from 'react';
import { getCookie } from '../../../hooks/useCookie';
import { decrypt } from '../../../hooks/useSecurity';
import Modal from 'react-bootstrap/Modal';

function AdminSessions(){

  const [id, setId] = useState('')
  const [result, setResult] = useState(false);

  useEffect(() => {

    setId(decrypt(getCookie('id')))

  }, [id]);

  // Modal
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleClose = () => {
    setShow(false);
    setResult(false)
  }; 
  const handleClose1 = () => {
    setShow1(false);
    setResult(false)
  };

  const programs = [
    {
      name:"Session",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    },
    {
      name:"Session",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    },
    {
      name:"Session",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    },
    {
      name:"Session",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    },
    {
      name:"Session",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    }
  ]

  return (
    <>
      <DashboardHead title="Sessions" func={handleShow} />

      <Box sx={{m:3}} ></Box>
      
      <div className="masonry-grid masonry-grid-count-4">
        <Program 
          data={programs}
        />    
      </div>
 
      {/* modal */}
      {/* Upload */}
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        keyboard={false}
      >

        {/* <form  action={A_CLASS_UL} method="POST" onSubmit={(event) => handleSumbit(event)}> */}
          <Modal.Header closeButton>
            <Modal.Title>Add Session</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign:"center"}}>

            <Divider style={{margin:"5px 0px"}}/>
              
            <div className='masonry-grid masonry-grid-count-1'>
                
              <div className='masonry-grid__item'>
                <FormControl sx={{textAlign: "left"}} variant='outlined' fullWidth size="medium">
                  <InputLabel id="Program">Select Program</InputLabel>
                  <Select
                    labelId="Program"
                    id="Program"
                    label="Select Program"
                    name="Program"
                    defaultValue={''}
                  >
                  <MenuItem value="Program 1">Program 1</MenuItem>
                  <MenuItem value="Program 2">Program 2</MenuItem>
                  </Select>
                </FormControl>
              </div>
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
                  id="center"
                  name='center'
                  label="Center"
                  rows={1}
                  required
                  fullWidth
                  variant="outlined"
                /> 
              </div>
              <div className='masonry-grid__item'>
                <FormControl sx={{textAlign: "left"}} variant='outlined' fullWidth size="medium">
                  <InputLabel id="Trainer">Select Trainer</InputLabel>
                  <Select
                    labelId="Trainer"
                    id="Trainer"
                    label="Select Trainer"
                    name="Trainer"
                    defaultValue={''}
                  >
                  <MenuItem value="Trainer 1">Trainer 1</MenuItem>
                  <MenuItem value="Trainer 2">Trainer 2</MenuItem>
                  </Select>
                </FormControl>
              </div>
              
              <div className='masonry-grid__item' style={{textAlign:"left"}}>
                <TextField
                  id="dob"
                  type={'date'}
                  name='dob'
                  rows={1}
                  InputLabelProps={{ shrink: true }} 
                  fullWidth
                  label="Start Date"
                  variant="outlined"
                />
              </div>
              
              <div className='masonry-grid__item' style={{textAlign:"left"}}>
                <TextField
                  id="dob"
                  type={'date'}
                  name='dob'
                  rows={1}
                  InputLabelProps={{ shrink: true }} 
                  fullWidth
                  label="End Date"
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
        show={show1}
        onHide={handleClose1}
        size="lg"
        keyboard={false}
      >

        <Modal.Header closeButton>
          <Modal.Title>
              <span >
                Session Name
              </span>
            &nbsp; 
            &nbsp; 
            &nbsp; 
              <span style={{color:"gray",fontSize:"13px"}}>
                03/23/2023 - 03/30/2023
              </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='m-card-contt' style={{padding:"20px"}}>  
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.
            </span>  
            
            <Divider style={{margin:"20px"}} textAlign="left">
              <Chip label="Assignments"/>
            </Divider>
            
            <Box>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Assignment 1"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"File"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Assignment 2"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"File"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
            </Box>

            <Divider style={{margin:"20px"}} textAlign="left">
              <Chip label="Feedbacks"/>
            </Divider>
            
            <Box>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Feedback 1"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"This is Feedback"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Feedback 2"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"This is Feedback"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
            </Box>

            <Divider style={{margin:"20px"}} textAlign="left">
              <Chip label="Videos"/>
            </Divider>
            
            <Box>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Video 1"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"File"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Video 2"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"File"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
            </Box>

            <Divider style={{margin:"20px"}} textAlign="left">
              <Chip label="Updates"/>
            </Divider>
            
            <Box>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Update 1"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"This is Update"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Update 2"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"This is Update"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
            </Box>

            <Divider style={{margin:"20px"}} textAlign="left">
              <Chip label="Reports"/>
            </Divider>
            
            <Box>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Report 1"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"File"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
              <CardActionArea className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Report 2"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"File"}
                    </span>
                  </div> 
                </div>
              </CardActionArea>
            </Box>

          </div>

        </Modal.Body>

      </Modal>

    </>
  );
};

export default AdminSessions;