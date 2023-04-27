import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Rating, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const AvatarCard = ({singleAvatarData}) => {
  return (
    <Box className={`  bg-[#FAFAFA] w-[250px] h-[405px]`}>
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
    </Box>
  );
};

export default AvatarCard;
