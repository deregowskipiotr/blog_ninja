import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Error 404 not found</h2>
      <Link to="/">Back to the home page...</Link>
    </div>
   );
}
 
export default NotFound;