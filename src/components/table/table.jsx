// external 
import {IconButton} from '@mui/material/';
import { BiEditAlt } from 'react-icons/bi';

// internal
import './table.css';

export function TableRow ({rows}){

  const updateCards = rows.map(key => 
    <div className='m-card-tb-row' id={key}>
      <div className='m-card-tb-col'>
        <span>{key.name}</span>
      </div>
      <div className='m-card-tb-col'>
        <span>{key.value}</span>
      </div>
    </div>
  ) 
  
  return (

    <>

      {updateCards}
  
    </> 

  )

}
