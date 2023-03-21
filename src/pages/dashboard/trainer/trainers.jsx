import { Box, Divider } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { Program } from "../../../components/programs/programs";
import { Session } from "../../../components/session/session";
import { TrainerProfile } from "../../../components/trainers/trainers";

function TrainerTrainers(){

  const trainersdata = [
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director"
    },    
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director"
    },    
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director"
    },    
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director"
    },    
    {
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Jane Fingerlicker",
      email: "jfingerlicker@me.io",
      job: "Art director"
    }
  ]

  return (
    <>
      <Divider sx={{m:5}}/>
      <DashboardHead title="Trainers" />

      <Box sx={{m:3}} ></Box>
      
      <div className="masonry-grid masonry-grid-count-4">
        {trainersdata.map(key => 
          <TrainerProfile 
            avatar={key.avatar}
            name={key.name}
            email={key.email}
            job={key.job}
          />
        )}
      </div>

    </>
  )
}

export default TrainerTrainers;