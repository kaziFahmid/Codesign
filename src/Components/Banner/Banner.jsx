import { Box, Typography } from '@mui/material'
import React from 'react'
const isMobile = window.innerWidth <= 768;
export const Banner = () => {
  return (
    <Box sx={{
        backgroundImage:`url(https://i.ibb.co/196pQKg/bcbe654484b887659a17f19df0391cbc.jpg)`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height:"80vh",
        display:"flex",
        justifyContent:"center",alignItems:"center"
    }}>

<Box>
  {isMobile?    <Typography sx={{fontSize:'24px',textAlign:"center",mb:2,color:"white",fontWeight:"600"}}>
    Your local source of high quality images and videos directly from their creators
    </Typography>:    <Typography sx={{fontSize:{sm:"38px",md:"50px"},color:"white",fontWeight:"600",textAlign:{sm:"center",md:"left"}}}>
    Your local source of high quality images<br/> and videos directly from their creators
    </Typography>}


    <Box sx={{bgcolor:"white",py:{xs:1,sm:1,md:2},px:2,borderTopLeftRadius:"24px",borderTopRightRadius:"24px",borderBottomRightRadius:"24px",borderBottomLeftRadius:"24px"}}>
<input type="search" placeholder='Search photos and videos' style={{border:"none",outline:"none",width:"100%"}}/>
    </Box>
    <Typography sx={{mt:2,fontSize:"12px",color:"white",textAlign:{xs:"center",sm:'center',md:"left"}}}>Recommended: summer, food, covid-19, real estate, love</Typography>
</Box>









    </Box>
  )
}
