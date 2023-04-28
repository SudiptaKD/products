import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Dialog, Grid, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import { AvatarData } from "data/AvatarsData";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const LeftContent = () => {
    const { query } = useRouter();
    const [pic, setPic] = useState(query.id);
    const [open, setOpen] = useState(false);
    const ids= [query.id, 1, 2, 3]
    const [index, setIndex] = useState(0)
    console.log(pic)


  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };
  return (
    <Box className="w-[350px]" >
        <Image
        onClick={handleClickOpen}
              className="  rounded-[5px] "
              src={`/assets/avatar-pictures/v${pic}.png`}
              alt="abc"
              height={350}
              width={350}
            />
          <Grid container className="p-2 py-8 max-w-[350px]">
          <Grid item md={3}  className="flex flex-wrap justify-center content-center" >
            <Image
            onClick={()=> {
              setPic(query.id)
              setIndex(0)
            }}
              className="  rounded-[5px] "
              src={`/assets/avatar-pictures/v${query.id}.png`}
              alt="abc"
              height={60}
              width={60}
            />
          </Grid>
          {AvatarData.slice(0, 3).map((avatar, index) => {
        return (
          <Grid item md={3} key={index}  className="flex flex-wrap justify-center content-center" >
            <Image
            onClick={()=> {
              setPic(avatar.id)
              setIndex(avatar.id)
            }}
              className="  rounded-[5px] "
              src={`/assets/avatar-pictures/v${avatar.id}.png`}
              alt="abc"
              height={60}
              width={60}
            />
          </Grid>
        );
      })}
          </Grid>
          <Dialog onClose={handleClose} open={open} className="" >
<Box className="relative">
          <Image
        //onClick={handleClickOpen}
              className=" "
              src={`/assets/avatar-pictures/v${pic}.png`}
              alt="abc"
              height={550}
              width={550}
            />
            <span className=" cursor-pointer absolute text-[16px]  right-4 top-[275px] text-white">
          <SvgIcon
          onClick={()=> {
            if (index!= 3){
              setPic(ids[index+1])
            setIndex(index+1)}
          }}
          fontSize="Large"
            component={ArrowForwardIosIcon}
            inheritViewBox
            className="text-[24px] "
          />
        </span>
         <span className=" cursor-pointer absolute text-[16px]  left-4 top-[275px] text-white">
          <SvgIcon
          onClick={()=> {
            if (index != 0){
              setPic(ids[index-1])
            setIndex(index-1)}
          }
          }
          fontSize="Large"
            component={ArrowBackIosIcon}
            inheritViewBox
            className="text-[24px] "
          />
        </span>
            </Box>
          </Dialog>
    </Box>
  )
}

export default LeftContent