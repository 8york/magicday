import { NavLink, Outlet } from "react-router-dom";

export default function PersonLayout() {
  return (
    <div>
      <nav>
        <NavLink to="/human/humanstory">Human</NavLink>
        <NavLink to="/human/magic">Human Magic 8 Ball</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
