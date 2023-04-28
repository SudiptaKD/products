import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";


const List = () => {
  return (
    <>
    <Box className=" ml-4  font-semibold text-md rounded-md">Category</Box>
    <Box>
      <Accordion disableGutters className=" font-semibold text-sm bg-[#FAFAFA]  "
      sx={{
        "&.MuiAccordion-root" : {
            boxShadow : "none"
        }
    }}>
        <AccordionSummary  aria-controls="panel1a-content" id="panel1a-header"
            sx={{
                "&.MuiAccordionSummary-root" : {
                    minHeight : "20px"
                },
                ".MuiAccordionSummary-content" : {
                    margin : "0px"
                }
            }}
            
        >
          <Box className="  bg-[#FAFAFA] hover:bg-slate-200 px-2 py-1 rounded-md">Full Avatar</Box>
        </AccordionSummary>
        <AccordionDetails className="pl-8" >
          <Box>
            <Accordion disableGutters className=" font-semibold text-sm bg-[#FAFAFA]  "
              sx={{
                "&.MuiAccordion-root" : {
                    boxShadow : "none"
                }
            }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="p-0  "
                sx={{
                    "&.MuiAccordionSummary-root" : {
                        minHeight : "20px"
                    },
                    ".MuiAccordionSummary-content" : {
                        margin : "0px"
                    }
                }}
              >
                <Box className="  bg-[#FAFAFA] hover:bg-slate-200 px-2 py-1 rounded-md">Human Based</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className=" bg-[#FAFAFA]  cursor-pointer hover:bg-slate-200 px-2 py-1 rounded-md	">Male</Box>
                <Box className=" bg-[#FAFAFA]  cursor-pointer hover:bg-slate-200 px-2 py-1 rounded-md	">Female</Box>
                <Box className=" bg-[#FAFAFA]  cursor-pointer hover:bg-slate-200 px-2 py-1 rounded-md	">Unisex</Box>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box className=" bg-[#FAFAFA]  cursor-pointer hover:bg-slate-200 px-2 py-1 rounded-md	">
            Animal and mythecal creature based
          </Box>
          <Box className=" bg-[#FAFAFA]  cursor-pointer hover:bg-slate-200 px-2 py-1 rounded-md	">Robot Based</Box>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box className=" ml-4 cursor-pointer bg-[#FAFAFA] hover:bg-slate-200 px-2 py-1 h-8 w-16 font-semibold text-sm rounded-md">Others</Box>
  </>
  )
}

export default List