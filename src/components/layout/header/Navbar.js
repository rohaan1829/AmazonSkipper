"use client";
import ButtonHeader from "@/components/shared/buttons/ButtonHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ButtonPrimary2 from "@/components/shared/buttons/ButtonPrimary2";
import { useHeaderContext } from "@/context_api/HeaderContext";
import getNavItems from "@/libs/getNavItems";
import indexingAndActiveLink from "@/libs/indexingAndActiveLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenuController from "./MobileMenuController";

const Navbar = ({ isActiveMobileMenu, setIsActiveMobileMenu }) => {
	const { isIndexPage, isResumeBtn, headerType } = useHeaderContext();
	const navItems = getNavItems();
	const [openDropdown, setOpenDropdown] = useState(false);

	// Filter out Resume and Skills for headerType 9 (home-9)
	const filteredNavItems = headerType === 9
		? navItems.filter(item =>
			item.name.toLowerCase() !== 'resume' &&
			item.name.toLowerCase() !== 'skills'
		)
		: navItems;
	useEffect(() => {
		indexingAndActiveLink();
	}, []);

	const getNavLinkClasses = () => {
		let classes = `text-size-15 font-medium capitalize whitespace-nowrap relative z-0 `;

		if (headerType !== 5 && headerType !== 6 && headerType !== 9 && headerType !== 10) {
			classes += "text-[#22C55E] dark:text-[#22C55E] ";
		}

		if (headerType === 5 || headerType === 10) {
			// no padding
		} else {
			classes += "py-10px ";
		}

		if (headerType === 5 || headerType === 6 || headerType === 9) {
			classes += `text-[#22C55E] hover:text-[#15803D] dark:text-[#22C55E] dark:hover:text-[#16A34A] `;
			if (headerType === 6 || headerType === 9) {
				classes += headerType === 9 ? "py-10px md:py-14px lg:py-8px xl:py-10px " : "py-10px md:py-14px lg:py-12px xl:py-14px ";
			} else {
				classes += "px-14px py-3px border border-transparent hover:border-primary-color rounded-full ";
			}
		} else if (headerType === 4) {
			classes += "text-[#22C55E] hover:text-[#15803D] dark:text-[#22C55E] dark:hover:text-[#16A34A] md:py-14px lg:py-14px 2xl:py-14px ";
		} else if (headerType === 10) {
			classes += "text-[#22C55E] hover:text-[#15803D] dark:text-[#22C55E] dark:hover:text-[#16A34A] py-10 ";
		} else {
			classes += "text-[#22C55E] hover:text-[#15803D] dark:text-[#22C55E] dark:hover:text-[#16A34A] md:py-15px lg:py-25px 2xl:py-30px ";
		}

		if (headerType === 9) {
			classes += "lg:text-[12px] xl:text-[14px] lg:pl-1 xl:pl-2 ";
		}

		return classes;
	};

	const getHref = (name, path, path2) => {
		if (name.toLowerCase() === "services") return "/services";
		if (name.toLowerCase() === "works") return "/portfolio";
		if (name.toLowerCase() === "testimonials") return "/testimonials";
		if (name.toLowerCase() === "about us") return "/about";
		if (name.toLowerCase() === "case studies") return "/case-studies";
		if (name.toLowerCase().includes("faq")) return "/faq";
		return isIndexPage ? path : path2;
	};

	return (
		<nav
			className={`${
				headerType === 9 ? "flex items-center lg:flex-auto lg:justify-center" : ""
			}`}
		>
			<ul
				className={`nav flex items-center xl:gap-30px ${
					headerType === 5
						? "gap-x-25px lg:gap-x-10px xl:gap-x-15px 2xl:gap-x-25px"
						: headerType === 4 || headerType === 6 || headerType === 9
						? `gap-x-5 2xl:gap-x-35px ${
								headerType === 9
									? "lg:px-2 xl:px-4 lg:justify-center lg:gap-x-2 xl:gap-x-4 2xl:gap-x-5"
									: "lg:px-10"
						  } rounded-full ${
								headerType === 6 || headerType === 9
									? "lg:bg-white/30 lg:dark:bg-white/[0.04] lg:border lg:border-[#4CAF50]/25 lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:backdrop-blur-md"
									: "lg:border lg:border-primary-color"
						  }`
						: "gap-x-5 2xl:gap-x-45px"
				}`}
			>
				{filteredNavItems?.length
					? filteredNavItems?.map(({ name, path, path2, dropdown }, idx) => (
							<li
								key={idx}
								className="nav_item hidden lg:block relative"
								onMouseEnter={() => dropdown && setOpenDropdown(idx)}
								onMouseLeave={() => dropdown && setOpenDropdown(false)}
							>
								{dropdown ? (
									<>
										<span className={`${getNavLinkClasses()} flex items-center gap-1 cursor-pointer`}>
											{name}
											<svg
												className={`w-3 h-3 transition-transform duration-200 ${openDropdown === idx ? 'rotate-180' : ''}`}
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
											</svg>
										</span>
										{/* Dropdown */}
										<div
											className={`absolute left-0 top-full mt-0 min-w-[200px] transition-all duration-200 ${
												openDropdown === idx
													? 'opacity-100 visible translate-y-0'
													: 'opacity-0 invisible -translate-y-2'
											}`}
											style={{ zIndex: 99999 }}
										>
											<div className="pt-2">
												<ul className="bg-[#111] rounded-lg shadow-2xl border border-[#333] overflow-hidden">
													{dropdown.map((subItem, subIdx) => (
														<li key={subIdx}>
															<Link
																href={subItem.path}
																className="block px-5 py-3 text-sm font-medium text-white hover:bg-[#4CAF50] hover:text-white transition-colors"
															>
																{subItem.name}
															</Link>
														</li>
													))}
												</ul>
											</div>
										</div>
									</>
								) : (
									<Link href={getHref(name, path, path2)} className={getNavLinkClasses()}>
										{name}
									</Link>
								)}
							</li>
					  ))
					: ""}

				{/* action button */}
				{headerType === 9 || headerType === 10 ? (
					""
				) : headerType === 5 ? (
					<li className="menu-bar lg:hidden">
						<ButtonHeader />
					</li>
				) : headerType === 3 || headerType === 4 ? (
					""
				) : (
					<li className={`${headerType === 6 ? "hidden sm:block lg:hidden" : ""}`}>
						{isResumeBtn ? (
							<ButtonPrimary2 url={"#"}>Resume</ButtonPrimary2>
						) : (
							<ButtonPrimary
								isIcon={headerType === 6 ? true : false}
								url={isIndexPage ? "#contact" : "/#contact"}
							>
								{headerType === 6 ? "Lets Make Money" : "Hire Me!"}
							</ButtonPrimary>
						)}
					</li>
				)}
				{/* open mobile menu button */}
				{headerType === 9 || headerType === 10 ? (
					""
				) : (
					<li className="menu-bar lg:hidden">
						<MobileMenuController
							setIsActiveMobileMenu={setIsActiveMobileMenu}
							isActiveMobileMenu={isActiveMobileMenu}
						/>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
