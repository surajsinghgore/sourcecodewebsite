import { Link } from "react-router-dom";
const IconsCard = (props) => {
    return (
        <div>
         <Link to={props.Link}>
          <li>
            {props.iconsTag}
            <h3>{props.H2}</h3>
          </li>
        </Link>   
        </div>
    )
}

export default IconsCard;
