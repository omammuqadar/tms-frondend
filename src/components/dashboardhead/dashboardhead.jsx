// external

// material component
import {IconButton, Tooltip} from '@mui/material/';
  // icons
import { GrFormAdd } from 'react-icons/gr';

// _______ //

// internal
import './dashboardhead.css'
// _______ //

/** 
 * @param {title} is the text for head
 * @param {func} is the function that will open the modal
 * @return {jsx} for the head
 * */

 function DashboardHead({title,func}) {
  return (
    <div className='mg-head' >
      <div className='mg-head-l' style={{textAlign:"left"}}>
        <h2 className='secondary-color manage-head'>{title}</h2>
      </div>
      {func &&
      <div className='mg-head-r'>
        <Tooltip title="Add - space">
          <IconButton size="medium" onClick={func} >
            <GrFormAdd />
          </IconButton>
        </Tooltip>
      </div>
      }
    </div>
  )
 }

 export default DashboardHead;