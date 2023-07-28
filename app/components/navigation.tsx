"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { usePathname } from "next/navigation";

const Navigation = () => {
  const router = useRouter();

  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/product",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-ligth position-fixed menu menuSideBar">
        <div className="container-fluid justify-content-end">
          <div
            className="menu-activador "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <input type="checkbox" id="lanzador" />
            <label htmlFor="lanzador">
              <span className="menu-activador-linea"></span>
              <span className="menu-activador-linea"></span>
              <span className="menu-activador-linea"></span>
            </label>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="nav-item d-flex justify-content-center menuitem-0 "
                >
                  <Link
                    className={
                      pathname === link.path ? "nav-link activo" : "nav-link "
                    }
                    aria-current="page"
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
