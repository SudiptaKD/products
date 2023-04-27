import { Box, Grid, Pagination } from "@mui/material"
import Avatars from "../Avatars/Avatars"
import HomeMain from "../HomeMain/HomeMain"

const HomePage = () => {
  return (
   <Box className="text-black">
    <Grid container  columns={5}>
<Grid item md={1} >
    sasa

</Grid>
<Grid item md={4} className="pr-2 py-5" >
    <HomeMain/>
    <Avatars/>
    <Pagination count={2} shape="rounded" className="flex justify-center content-center flex-wrap" />

</Grid>

    </Grid>

   </Box>
  )
}

export default HomePage