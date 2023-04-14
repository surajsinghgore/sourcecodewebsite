import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
const SearchData = (props) => {
  return (
    <div>
      <Link to={props.URL}>
        {" "}
        <li>
          <SearchIcon id="ss" />
          {props.Data}
        </li>
      </Link>
    </div>
  );
};

export default SearchData;
