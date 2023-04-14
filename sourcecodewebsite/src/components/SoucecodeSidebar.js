
import { FcAddImage } from "react-icons/fc";
import { FcAddDatabase } from "react-icons/fc";

import IconsCard from '../props/IconsCard';;

const SoucecodeSidebar = () => {
  return (
      <>
        <IconsCard Link="/extra" iconsTag={<FcAddImage className="iconn" />} H2="EXTRA" alts="Website not display" />
        <IconsCard Link="/frontentBackend" iconsTag={<FcAddDatabase className="iconn" />} H2="F & B BOTH" alts="Website not display" />

        
      </>
    );
  };
export default SoucecodeSidebar;
