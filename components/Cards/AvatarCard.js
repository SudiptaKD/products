import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, Rating, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const AvatarCard = ({singleAvatarData}) => {
  return (
    <Box className={`  bg-[#FAFAFA] w-[250px] min-h-[405px] mb-3`}>
      <Box className="h-[250px] w-[250px] relative">
        <Image
          className="  rounded-[5px] "
          src={singleAvatarData?.path}
          alt="abc"
          height={250}
          width={250}
        />
        <span className=" cursor-pointer absolute text-12 px-2 right-3 top-3 text-white bg-blue-600 rounded-md flex ">
          <SvgIcon
            component={ShoppingCartOutlinedIcon}
            inheritViewBox
            className="text-base mt-1 mr-1"
          />
          Add
        </span>
      </Box>
      <Box className=" px-1 py-1">
        <Typography className="text-md font-semibold " >
        Avatar name “Avatown” -nice original avatar of Avatown
        </Typography>
        <Box className="flex justify-between gap-2">
        <Rating size="small"  name="half-rating" defaultValue={4.7} precision={0.1} />
        <Typography className="text-xs font-[500] text-stone-500 " >
        4.7 & 100Likes
        </Typography>
        <SvgIcon
            component={FavoriteBorderIcon}
            inheritViewBox
            className="text-base"
          />

        </Box>
      </Box>
      <Box className="flex gap-2 justify-start px-2" >
      <Avatar
  alt="pic"
  src="/assets/avatar-pictures/v1.png"
  sx={{ width: 24, height: 24 }}
/>
<Typography className="text-xs font-[500] text-stone-500 mt-1 " >
        Avatar Joe&apos;s
        </Typography>

      </Box>
      <Box className="flex gap-1 justify-start px-2" >
      <Typography className="text-xs font-[300] text-black mt-2 " >
        $
        </Typography>
<Typography className="text-xl font-[500] text-black  " >
        50.00
        </Typography>

      </Box>
      <Box className="flex gap-1 justify-start px-2" >
      <Box className="h-4 w-4 rounded-full bg-sky-400 mt-0.5 " >
        
        </Box>
<Typography className="text-sm font-[500] text-black  " >
        Pc Only
        </Typography>

      </Box>
      <Box className="flex gap-1  px-2" >
      <Box className="w-9/10 text-[11px] text-black font-[550] mt-0.5 " >
      Auto upload service ready, you can use this avatar within 24 hours.
        </Box>
        <SvgIcon
            component={IosShareIcon}
            inheritViewBox
            className=" mt-1 font-[300] text-black"
          />

      </Box>
    </Box>
  );
};

export default AvatarCard;
