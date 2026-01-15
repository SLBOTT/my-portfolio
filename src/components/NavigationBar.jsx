import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/resume", label: "Resume" },
  { path: "/cv", label: "CV" },
];

export default function NavigationBar() {
  return (
    <nav className="nav">
      {links.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          end
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
