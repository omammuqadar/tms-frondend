import { Box, Divider } from "@mui/material";
import DashboardHead from "../../../components/dashboardhead/dashboardhead";
import { SdProfile } from "../../../components/sd/sd";

function TrainerSession(){

  const sdsdata = [
    {
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "title": "Software engineer",
      "name": "Robert Glassbreaker",
      "email": "robert@glassbreaker.io",
      "phone": "+11 (876) 890 56 23"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "title": "Software engineer",
      "name": "Robert Glassbreaker",
      "email": "robert@glassbreaker.io",
      "phone": "+11 (876) 890 56 23"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "title": "Software engineer",
      "name": "Robert Glassbreaker",
      "email": "robert@glassbreaker.io",
      "phone": "+11 (876) 890 56 23"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "title": "Software engineer",
      "name": "Robert Glassbreaker",
      "email": "robert@glassbreaker.io",
      "phone": "+11 (876) 890 56 23"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "title": "Software engineer",
      "name": "Robert Glassbreaker",
      "email": "robert@glassbreaker.io",
      "phone": "+11 (876) 890 56 23"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "title": "Software engineer",
      "name": "Robert Glassbreaker",
      "email": "robert@glassbreaker.io",
      "phone": "+11 (876) 890 56 23"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "title": "Software engineer",
      "name": "Robert Glassbreaker",
      "email": "robert@glassbreaker.io",
      "phone": "+11 (876) 890 56 23"
    }
  ]

  return (
    <>
      <Divider sx={{m:5}}/>
      <DashboardHead title="Session" />

      <Box sx={{m:6}} ></Box>
      
      <div className="masonry-grid masonry-grid-count-4">
        {sdsdata.map(key => 
          <SdProfile 
            avatar={key.avatar}
            title={key.title}
            name={key.name}
            email={key.email}
            phone={key.phone}
          />
        )}
      </div>

    </>
  )
}

export default TrainerSession;