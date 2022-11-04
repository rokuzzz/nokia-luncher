import { Link } from "react-router-dom";

export default function Favorites() {
    return (
      <>
          <h1>Favorites</h1>
          <Link to={`/`}>Menu</Link>
      </>
    );
}