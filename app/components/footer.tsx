"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { usePathname } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const pathname = usePathname();

  const links = [
    {
      name: "Facebook",
      path: "/",
    },
    {
      name: "Instagram",
      path: "/",
    },
  ];

  return (
    <>
      <footer className="footer">
        {links.map((link) => (
          <div key={link.name}>
            <Link aria-current="page" href={link.path}>
              {link.name}
            </Link>
          </div>
        ))}
      </footer>
    </>
  );
};

export default Footer;
