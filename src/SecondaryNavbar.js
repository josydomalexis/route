import { Link } from "react-router-dom";
export function SecondaryNavbar() {
  return (
    <nav className="navbar bg-primary navbar-expand-lg " data-bs-theme="dark">
      <div className="container">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/blog/category/full-stack-development"
              >
                Full Stack Development
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/category/data-science">
                Data Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/category/cyber-security">
                Cyber Security
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
