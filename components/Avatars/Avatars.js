import { Grid } from "@mui/material";
import AvatarCard from "../Cards/AvatarCard";

const Avatars = () => {
  return (
    <Grid container>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((avatar, index) => {
        return (
          <Grid item md={3} key={index} className="flex flex-wrap justify-center content-center" >
            <AvatarCard />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Avatars;
