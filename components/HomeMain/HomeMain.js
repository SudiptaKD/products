import { Box, Typography } from "@mui/material";

const HomeMain = () => {
  return (
      <Box className="flex justify-between">
        <Typography className="text-3xl font-medium">All items</Typography>
        <Box sx={{ m: 1, minWidth: 180 }}>
          {/* <InputLabel id="demo-select-small-label">Sort HomeMain</InputLabel>
            <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={0}
        label="Sort HomeMain"
        //onChange={handleChange}
      > */}
          <select className="border-[2px] rounded-md p-1 border-black">
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
   
  );
};

export default HomeMain;
