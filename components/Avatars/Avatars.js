import { Grid } from "@mui/material";
import { AvatarData } from "data/AvatarsData";
import AvatarCard from "../Cards/AvatarCard";

const Avatars = () => {
  return (
    <Grid container>
      {AvatarData.map((avatar, index) => {
        return (
          <Grid item md={3} key={index}  className="flex flex-wrap justify-center content-center" >
            <AvatarCard singleAvatarData={avatar} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Avatars;
