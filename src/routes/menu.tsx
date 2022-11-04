import { Outlet, Link } from "react-router-dom";

export default function Menu() {
    return (
      <>
          <h1>Menu</h1>
          <Link to={`favorites`}>Favorites</Link>
      </>
    );
}