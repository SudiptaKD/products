import { Box } from "@mui/system";
import { useRouter } from "next/router";
import ParentLayout from "../Layout";

import { Grid } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import LeftContent from "./LeftContent";
import MiddleContent from "./MiddleContent";
import RightContent from "./RightContent";

const SingleAvatarPage = () => {
  const { query } = useRouter();
  const [pic, setPic] = useState(query.id);


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
            <LeftContent/>
          </Grid>
          <Grid item md={4}>
            <MiddleContent />
          </Grid>
          <Grid item md={4} paddingX={8}>
            <RightContent />
          </Grid>
        </Grid>
      </Box>
    </ParentLayout>
  );
};

export default SingleAvatarPage;
