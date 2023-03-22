import { Alert, Box, Button, Chip, Divider, TextField } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { Program } from "../../../components/programs/programs";
import { useState, useEffect } from 'react';
import { getCookie } from '../../../hooks/useCookie';
import { decrypt } from '../../../hooks/useSecurity';
import Modal from 'react-bootstrap/Modal';
import { Tooltip } from "@mantine/core";

function AdminPrograms(){

  const [id, setId] = useState('')
  const [result, setResult] = useState(false);

  useEffect(() => {

    setId(decrypt(getCookie('id')))

    // Program
    // const xhr_prog = new XMLHttpRequest();
    // const url_prog = `http://localhost:5000/backend/program`;
    // xhr_prog.open('GET', url_prog, true);
    // xhr_prog.onreadystatechange = function() {
    //   if (xhr_prog.readyState === XMLHttpRequest.DONE) {
    //     if (xhr_prog.status === 200) {
    //       const response = JSON.parse(xhr_prog.responseText);
    //       setPrograms(Object.values(response));
    //     } else {
    //     }
    //   }
    // };
    // xhr_prog.send();

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
      name:"Program",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    },
    {
      name:"Program",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    },
    {
      name:"Program",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    },
    {
      name:"Program",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    },
    {
      name:"Program",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus neque, fermentum non tortor ut, luctus placerat est. Sed sit amet turpis turpis. Proin imperdiet congue tristique. Pellentesque iaculis aliquam blandit.",
      start_date:"03/23/2023",end_date:"03/30/2023",func:handleShow1,
    }
  ]

  return (
    <>
      <DashboardHead title="Programs" func={handleShow} />

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
            <Modal.Title>Add Program</Modal.Title>
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
                  id="name"
                  name='name'
                  label="Description"
                  rows={4}
                  multiline
                  required
                  fullWidth
                  variant="outlined"
                  helperText="Provide Description."
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
                Program Name
              </span>
            
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
              <Chip label="Sessions"/>
            </Divider>
            
            <Box>
              <div className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Session 1"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"Description for Session"}
                    </span>
                  </div> 
                </div>
              </div>
              <div className="m-card" style={{border:"1px solid gainsboro"}}>
                <div className='m-card-header'>
                  <div>{"Session 2"} - &nbsp;
                    <span className='secondary-color' 
                      style={{fontSize:"14px"}}>{"Description for Session"}
                    </span>
                  </div> 
                </div>
              </div>
            </Box>

          </div>

        </Modal.Body>

      </Modal>

    </>
  );
};

export default AdminPrograms;