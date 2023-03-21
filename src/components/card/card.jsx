
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Card } from '@mui/material/';
import './card.css';

/** 
 * @param {head} is the head for the card
 * @param {table} is the main cont for the card
 * */
export function CardMasonry (param){

  return (
    <>
      <Card className="masonry-grid__item" variant='outlined'>
        <div className='m-card-header'>
          <h1>{param.head}</h1>  
        </div>
        <div className='m-card-cont ' style={{textAlign:"center"}}>  
          {param.children}
        </div>
      </Card>
    </>
  )

}
// ___________