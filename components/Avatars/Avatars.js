import { Box, Typography } from "@mui/material"

const Avatars = () => {
  return (
    <Box className="pr-2 py-2">
        <Box className="flex justify-between" >
            <Typography className="text-3xl font-medium" >
                All items
            </Typography>
            <Box sx={{ m: 1, minWidth: 180 }} >
      {/* <InputLabel id="demo-select-small-label">Sort Avatars</InputLabel>
            <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={0}
        label="Sort Avatars"
        //onChange={handleChange}
      > */}
      <select className="border-[3px] rounded-md p-1 border-black" >
        <option value={0}>Featured</option>
        <option value={10}>Price: Low to High</option>
        <option value={20}>Price: High to Low</option>
        <option value={30}>Customer Review</option>
        <option value={40}>New</option>
        <option value={50}>Polygon: Low to High</option>
        <option value={60}>Polygon: High to Low</option>
      </select>
      </Box>
        </Box>
    </Box>
  )
}

export default Avatars