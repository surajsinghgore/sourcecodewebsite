import WarningIcon from '@material-ui/icons/Warning';
import IconsCard from '../props/IconsCard';

import { BiDevices} from 'react-icons/bi';
import { Link } from "react-router-dom";
let api="https://raw.githubusercontent.com/hot01/sourcecodewebsitedata/c67605a14382b8c4eb93ee76b89c1c39a8375d5b/api.svg";
const NotesSidebar = () => {
  
  const CodeCard = (props) => {
    return (
      <>
        <Link to={props.Link}>
          <li>
            <img src={props.iconsTag} alt={props.alts} className="icon" />
            <h2>{props.H2}</h2>
          </li>
        </Link>
      </>
    );
  };
  return (
    <>
 <IconsCard
            Link="/error"
            iconsTag={<WarningIcon className="iconn" />}
            H2="ERRORS"
          />
          <CodeCard
        Link="/api"
        iconsTag={api}
        H2="API"
        alts="js not display"
      />

<IconsCard
            Link="/media_query"
            iconsTag={<BiDevices className="iconn" />}
            H2="Media Query"
          />
    </>
  );
};

export default NotesSidebar;
