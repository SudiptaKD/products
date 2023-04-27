import { Box, Grid, Pagination } from "@mui/material"
import { useState } from "react"
import Avatars from "../Avatars/Avatars"
import HomeLeft from "../HomeLeft/HomeLeft"
import HomeMain from "../HomeMain/HomeMain"

const HomePage = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
  return (
   <Box className="text-black">
    <Grid container  columns={5}>
<Grid item md={1} >
   <HomeLeft/> 

</Grid>
<Grid item md={4} className="pr-2 py-5" >
    <HomeMain/>
    <Avatars page={page} />
    <Pagination count={2} onChange={handleChange} shape="rounded" className="flex justify-center content-center flex-wrap" />

</Grid>

    </Grid>

   </Box>
  )
}

export default HomePage