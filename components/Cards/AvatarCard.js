import { Box } from "@mui/system"
import Image from "next/image"

const AvatarCard = () => {
  return (
    <Box
        className={`  bg-white marker:rounded-[4px] w-full`}
      >
        <Box
          className="h-[405px] w-[250px] relative"
          
        >
          <Image
            className="  rounded-t-[4px] "
            src={
                "/assets/image/v.png"
            }
            alt="abc"
            height={250}
            width={250}
          />
          <span className=" absolute text-12 left-3 bottom-3 text-white bg-black/70 rounded-sm px-1">
            <div className=" text-white" />
            add
          </span>
        </Box>
        <Box className=" px-3 py-3">
          sedfsf

        </Box>
      </Box>
  )
}

export default AvatarCard