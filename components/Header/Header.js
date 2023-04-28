import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box, SvgIcon } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Box className="h-[57px] bg-gradient-to-r from-[#371c83] via-[#5c1e89] to-[#7f1f8b] p-2 flex justify-between">
      <Box className="flex justify-start">
        <Image
        onClick={()=> router.push("/")}
          alt="logo"
          height={100}
          width={215}
          src={"/assets/image/logo1.png"}
        />
        <Box className="ml-12 text-xl font-medium flex flex-wrap justify-center content-center">
          <Link href={"/"} className="underline underline-offset-[5px]">
            Go to Marketpage
          </Link>
        </Box>
      </Box>
      <Box className="flex justify-between mt-1.5 gap-6">
        <form className="relative">
          <input
            type="text"
            name="search"
            className="h-7 rounded-md w-96 min-w-full text-black px-2"
          />
          <Box className="absolute top-1 right-2">
            <Image
              alt="search-icon"
              height={20}
              width={20}
              src={"/assets/image/search-icon.png"}
            />
          </Box>
        </form>

        <Box className="flex justify-between px-2 gap-4">
          <Badge color="warning" badgeContent={1}>
            <Box className="h-9 w-9 bg-slate-700 rounded-lg flex flex-wrap content-center justify-center cursor-pointer">
              <SvgIcon component={NotificationsOutlinedIcon} inheritViewBox />
            </Box>
          </Badge>
          <Badge color="warning" badgeContent={1}>
            <Box className="h-9 w-9 bg-slate-700 rounded-lg flex flex-wrap content-center justify-center cursor-pointer">
              <SvgIcon component={ShoppingCartOutlinedIcon} inheritViewBox />
            </Box>
          </Badge>
          <Box className="h-9 w-9 bg-[#FAFAFA] rounded-lg flex flex-wrap content-center justify-center cursor-pointer">
            <Image
              alt="search-icon"
              height={25}
              width={25}
              src={"/assets/image/profilelogo.png"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
