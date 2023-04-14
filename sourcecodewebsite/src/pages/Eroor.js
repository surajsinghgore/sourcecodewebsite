import '../css/Error.css';
import {Link} from 'react-router-dom';
const Eroor = () => {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>OPPS! PAGE NOT FOUND</h2>
            <p>The page  you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
           <Link to="/"> <button>HOMEPAGE</button></Link>
        </div>
    )
}

export default Eroor;
