import { Grid } from "@mui/material";
import { AvatarData } from "data/AvatarsData";
import AvatarCard from "../Cards/AvatarCard";

const Avatars = ({page}) => {
  return (
    <Grid container>
      {AvatarData.slice(page*12-12, page*12).map((avatar, index) => {
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
