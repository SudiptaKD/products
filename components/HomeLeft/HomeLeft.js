import {
    Box
} from "@mui/material";
import List from "./List";

const HomeLeft = () => {
  return (
    <Box className="p-2">
<List/>

<Box className=" ml-4 mt-2 font-semibold text-md rounded-md">Contents</Box>
<Box className="font-semibold text-sm ml-6 flex flex-col">
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  {" "}VRChat(quest){" "} <Box className="h-3 w-3 rounded-full bg-green-400 mt-1 "></Box>
</label>
<label className="flex gap-1"  >
  <input type="checkbox" />
  <span class="checkmark"></span>
  {" "}VRChat(PCVR) {" "} <Box className="h-3 w-3 rounded-full bg-sky-400 mt-1 "></Box>
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  {" "}Others
</label>
</Box>
<Box className=" ml-4 mt-2  font-semibold text-md rounded-md">Price</Box>
<Box className="font-semibold text-sm ml-6 flex flex-col">
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  Under $10
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  $10 to $20
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  $20 to $30
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  $30 to $40
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  $40 to $50
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  $50 to $70
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  $70 & above
</label>
</Box>
<Box className=" ml-4 mt-2 font-semibold text-md rounded-md">Polygon amount</Box>
<Box className="font-semibold text-sm ml-6 flex flex-col">
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  Under △7,500
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  △7,500 to △10,000
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  △10,000 to △15,000
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  △15,000 to △20,000
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  △20,000 to △32,000
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  △32,000 to △70,000
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  △70,000 & Above
</label>
</Box>
<Box className=" ml-4 mt-2 font-semibold text-md rounded-md">Auto upload support</Box>
<Box className="font-semibold text-sm ml-6 flex flex-col">
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  Supported
</label>
<label className="flex gap-1" >
  <input type="checkbox" />
  <span class="checkmark"></span>
  Unsupported
</label>

</Box>

    </Box>
  );
};

export default HomeLeft;
