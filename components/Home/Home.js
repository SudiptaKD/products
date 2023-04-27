import { Box, Grid } from "@mui/material"
import Avatars from "../Avatars/Avatars"

const HomePage = () => {
  return (
   <Box className="text-black">
    <Grid container  columns={5}>
<Grid item md={1} >
    sasa

</Grid>
<Grid item md={4} >
    <Avatars/>

</Grid>

    </Grid>

   </Box>
  )
}

export default HomePage