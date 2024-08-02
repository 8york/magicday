import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>What is it going to be today</h1>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/ask">ASK</NavLink>
          <NavLink to="/oracle">ORACLE</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
