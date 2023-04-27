import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Avatar, Popover, Rating, SvgIcon, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

import Image from "next/image";
import { useState } from "react";

const MiddleContent = () => {
  const { query } = useRouter();
  const [favourite, setFavourite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Box className=" px-1 py-1">
        <Typography className="text-xl font-semibold text-black ">
          Avatar name “Avatown” -nice original avatar of Avatown
        </Typography>

        <Box className="flex justify-between gap-2">
            <Box className="flex gap-2">
          <Rating
            name="half-rating"
            defaultValue={4.7}
            precision={0.1}
          />
          <Typography className="text-sm font-[500] text-stone-500 mt-1 ">
            4.7 & 100Likes
          </Typography>
          </Box>

          <SvgIcon
            onClick={() => {
              if (!favourite) {
                setFavourite(true);
              } else setFavourite(false);
            }}
            component={!favourite ? FavoriteBorderIcon : FavoriteIcon}
            inheritViewBox
            className={`text-md cursor-pointer ${favourite ? "" : "text-black"}  `}
            sx={{ color: favourite ? pink[500] : "" }}
          />
        </Box>
      </Box>

      <Box className="flex gap-2 justify-start px-2">
        <Avatar
          alt="pic"
          src={`/assets/avatar-pictures/v${query.id}.png`}
          sx={{ width:30, height: 30 }}
        />
        <Typography className="text-sm font-[500] text-stone-500 mt-1 ">
          Avatar Joe&apos;s
        </Typography>
      </Box>

      <Box className="flex gap-2 justify-start px-2">
        <Typography className="text-sm font-[300] text-black mt-2 ">
          $
        </Typography>
        <Typography className="text-xl font-[500] text-black  ">
          50.00
        </Typography>
      </Box>
      <Box className="flex gap-1 justify-start px-2">
        <Box className="h-4 w-4 rounded-full bg-sky-400 mt-0.5 "></Box>
        <Typography className="text-sm font-[500] text-black  ">
          Pc Only
        </Typography>
      </Box>
      <Box className="flex gap-1  px-2">
        <Box className="w-9/10 text-[11px] text-black font-[550] mt-0.5 ">
          Auto upload service ready, you can use this avatar within 24 hours.
        </Box>
        <SvgIcon
          aria-describedby={id}
          onClick={handleClick}
          component={IosShareIcon}
          inheritViewBox
          className=" mt-1 font-[300] text-black cursor-pointer"
        />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box
          onClick={() => {
            if (!copied) {
              setCopied(true);
            } else setCopied(false);
          }}
          className="py-1 text-sm text-center px-2 flex gap-1  border-[1px] border-black rounded-md cursor-pointer text-slate-600"
        >
          {!copied && (
            <Image
              src="/assets/image/link.png"
              alt="abc"
              height={20}
              width={20}
            />
          )}
          {copied ? "Copied" : "Copy Link"}
        </Box>
      </Popover>
    </Box>
  );
};

export default MiddleContent;
