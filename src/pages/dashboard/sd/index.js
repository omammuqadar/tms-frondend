import { Fab   } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import Header from './header';
// import Sidenav from '../../component/sidenav/sidenav';
import {MdAdd, MdClose} from 'react-icons/md';
import { SdSidenav } from '../../../components/sidenav/sidenavSd';

function Sd(){

  return (
    <>
      {/* <Header /> */}
      <Container className="mg-container" fluid>
        <Row >
          <Col xl={1} xxl={1} className="sidenav" id="sidenav">
            <SdSidenav />
          </Col>
          <Col sm={12} md={12} lg={12} xl={10} xxl={10} className="mg-cont" >
            <Outlet />
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Sd;