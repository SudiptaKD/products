import { Box } from "@mui/system";
import { useRouter } from "next/router";
import ParentLayout from "../Layout";

import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MiddleContent from "./MiddleContent";

const SingleAvatarPage = () => {
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
    <ParentLayout>
      <Box className="p-4  ">
        <Box className="flex gap-1">
          <Link href="/">
            <Box className=" text-black font-[600] text-md">Avatars</Box>
          </Link>
          <Box className="text-black font-[600] text-md"> /</Box>
          <Box className=" text-black font-[550] text-md"> {query.id}</Box>
        </Box>
        <Grid container className="p-4">
          <Grid item md={4}>
            <Image
              className="  rounded-[5px] "
              src={`/assets/avatar-pictures/v${query.id}.png`}
              alt="abc"
              height={350}
              width={350}
            />
          </Grid>
          <Grid item md={4}>
            <MiddleContent />
          </Grid>
        </Grid>
      </Box>
    </ParentLayout>
  );
};

export default SingleAvatarPage;
