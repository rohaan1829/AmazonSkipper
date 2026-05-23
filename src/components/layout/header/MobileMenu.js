"use client";
import { useHeaderContext } from "@/context_api/HeaderContext";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isActiveMobileMenu }) => {
  const { isIndexPage, headerType } = useHeaderContext();
  const navItems = getNavItems();
  const [openDropdown, setOpenDropdown] = useState(null);

  // Filter out Resume and Skills for headerType 9 (home-9)
  const filteredNavItems = headerType === 9
    ? navItems.filter(item =>
        item.name.toLowerCase() !== 'resume' &&
        item.name.toLowerCase() !== 'skills'
      )
    : navItems;

  const toggleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <div
      className={`mobile-menu absolute left-0 top-full min-h-screen-90 w-full bg-seondary-color block origin-top-left lg:hidden ${
        isActiveMobileMenu ? "active" : ""
      }`}
    >
      <div className="container py-5">
        <ul className="ml-4">
          {filteredNavItems?.length
            ? filteredNavItems?.map(({ name, path, path2, dropdown }, idx) => (
                <li key={idx}>
                  {dropdown && dropdown.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(idx)}
                        className="text-size-25 text-white-color uppercase leading-1.2 py-15px flex items-center gap-2 w-full text-left"
                      >
                        {name}
                        <i className={`fas fa-chevron-down text-sm transition-transform duration-300 ${openDropdown === idx ? "rotate-180" : ""}`}></i>
                      </button>
                      <ul className={`ml-6 overflow-hidden transition-all duration-300 ${openDropdown === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        {dropdown.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={subItem.path}
                              className="block text-size-20 text-white-color/80 hover:text-[#4CAF50] py-10px transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={
                        name.toLowerCase() === "services"
                          ? "/services"
                          : name.toLowerCase() === "works"
                          ? "/portfolio"
                          : name.toLowerCase() === "testimonials"
                          ? "/testimonials"
                          : name.toLowerCase() === "about us"
                          ? "/about"
                          : name.toLowerCase() === "case studies"
                          ? "/case-studies"
                          : name.toLowerCase().includes("faq")
                          ? "/faq"
                          : isIndexPage
                          ? path
                          : path2
                      }
                      className="text-size-25 text-white-color uppercase leading-1.2 py-15px"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
