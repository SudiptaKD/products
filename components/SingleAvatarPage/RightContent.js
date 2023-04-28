import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SvgIcon } from "@mui/material";
import { Box } from "@mui/system";

const RightContent = () => {
  return (
    <Box className="min-h-[450px] min-w-[200px] p-4 rounded-md shadow-md  bg-gradient-to-b from-[#371c83] via-[#5c1e89] to-[#7f1f8b] ">
      <Box className=" text-[16px] text-white font-[550] mt-0.5 ">Buy Now</Box>
      <Box className="flex flex-col gap-1 ">
        <Box className="flex  gap-2 justify-end ">
          
          <Box className=" text-[22px] text-lime-300 font-[600]  ">$ 38.75</Box>
        </Box>
        <Box className="flex  gap-2 justify-end ">
          <Box className=" text-[14px] text-red-500 font-[550]  ">
            Original Price :
          </Box>
          <Box className=" text-[16px] text-red-600 font-[550] line-through  ">$ 50.00</Box>
        </Box>
        <Box className="flex  gap-2 justify-end ">
          <Box className=" text-[14px] text-lime-400 font-[550]  ">
            Saved :
          </Box>
          <Box className=" text-[16px] text-amber-400 font-[550]  ">22.50%</Box>
        </Box>
        <Box className=" text-[16px] text-white font-[400]  mt-2 ">Delivery within 2-3 days</Box>

        <Box className=" cursor-pointer text-[16px] px-4 py-2  font-[550] text-white bg-lime-400 rounded-md flex mt-4 justify-center ">
          <SvgIcon
         fontSize="large"
            component={ShoppingCartOutlinedIcon}
            inheritViewBox
            className="text-[16px] mt-1 mr-1"
          />
          Add to Cart
        </Box>
        <Box className=" cursor-pointer text-[16px] px-4 py-2  font-[550] text-white bg-orange-400 rounded-md flex mt-4 justify-center ">
          
          Buy Now
        </Box>
        
        <Box className="flex  gap-2 justify-start mt-2 ">
          <Box className=" text-[12px] text-white font-[550]  ">
            Payment 
          </Box>
          <Box className=" text-[12px] text-sky-500 font-[550]   ">Secure Transaction</Box>
        </Box>
        <Box className="flex  gap-2 justify-start mt-2 ">
          <Box className=" text-[12px] text-white font-[550]  ">
            Sold By 
          </Box>
          <Box className=" text-[12px] text-sky-200 font-[550]   ">Ava Town</Box>
        </Box>
        <Box className="flex  gap-2 justify-start mt-2 ">
          <Box className=" text-[12px] text-white font-[550]  ">
            Return
          </Box>
          <Box className=" text-[12px] text-red-200 font-[400]   ">Not eligable</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightContent;
