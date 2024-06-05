import { NavLink, Outlet } from "react-router-dom";

export default function CatLayout() {
  return (
    <div>
      <nav>
        <NavLink to="/cat/catstory">Cat Story</NavLink>
        <NavLink to="/cat/magic">Cat Magic 8 Ball</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
