"use client";
import ButtonHeader from "@/components/shared/buttons/ButtonHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ButtonPrimary2 from "@/components/shared/buttons/ButtonPrimary2";
import { useHeaderContext } from "@/context_api/HeaderContext";
import getNavItems from "@/libs/getNavItems";
import indexingAndActiveLink from "@/libs/indexingAndActiveLink";
import Link from "next/link";
import { useEffect } from "react";
import MobileMenuController from "./MobileMenuController";

const Navbar = ({ isActiveMobileMenu, setIsActiveMobileMenu, isSticky, className }) => {
	const { isIndexPage, isInnerPage, isResumeBtn, headerType } =
		useHeaderContext();
	const navItems = getNavItems();
	// Filter out Resume and Skills for headerType 9 (home-9)
	const filteredNavItems = headerType === 9 
		? navItems.filter(item => 
			item.name.toLowerCase() !== 'resume' && 
			item.name.toLowerCase() !== 'skills'
		)
		: navItems;
	useEffect(() => {
		// mobileMenuController();
		indexingAndActiveLink();
	}, []);

	return (
		<nav className={`flex-1 min-w-0 ${className || ""}`}>
			<ul
				className={`nav flex items-center flex-nowrap ${
					headerType === 5
						? "gap-x-25px lg:gap-x-8 xl:gap-x-15px 2xl:gap-x-25px"
						: headerType === 4 || headerType === 6 || headerType === 9
						? `gap-x-2 sm:gap-x-3 lg:gap-x-3 xl:gap-x-4 2xl:gap-x-35px lg:px-4 xl:px-6 2xl:px-10 rounded-full ${
								headerType === 6 || headerType === 9
									? "lg:bg-cream-light-color lg:dark:bg-black-color"
									: "lg:border lg:border-primary-color "
						  } `
						: ` gap-x-3 lg:gap-x-4 2xl:gap-x-45px`
				}`}
			>
				{filteredNavItems?.length
					? filteredNavItems?.map(({ name, path, path2 }, idx) => (
							<li key={idx} className="nav_item group relative hidden lg:block">
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
							className={`text-xs sm:text-sm lg:text-[13px] xl:text-size-15 font-medium  ${
								isInnerPage && !isSticky
									? "text-[#22C55E] dark:text-[#22C55E]"
									: headerType === 5 ||
											  headerType === 6 ||
											  headerType === 9 ||
											  headerType === 10
											? ""
											: "text-[#22C55E] dark:text-[#22C55E]"
									} capitalize relative z-0 whitespace-nowrap ${
										headerType === 5 || headerType === 10 ? "" : "py-2 lg:py-10px "
									}  ${
										headerType === 5 || headerType === 6 || headerType === 9
											? ` text-[#22C55E] hover:text-[#15803D] dark:text-[#22C55E] dark:hover:text-[#16A34A] ${
													headerType === 6 || headerType === 9
														? "py-2 md:py-12px lg:py-10px xl:py-12px 2xl:py-14px"
														: "px-2 lg:px-10px xl:px-12px 2xl:px-14px py-1 lg:py-2 xl:py-3px border border-transparent hover:border-primary-color rounded-full"
											  }   `
											: headerType === 4
											? ` text-[#22C55E] hover:text-[#15803D] dark:text-[#22C55E] dark:hover:text-[#16A34A] md:py-12px lg:py-10px xl:py-12px 2xl:py-14px `
											: `${
													headerType === 10
														? "text-[#22C55E] hover:text-[#15803D] dark:text-[#22C55E] dark:hover:text-[#16A34A]  py-2 lg:py-10 after:w-0 after:h-0.5 after:bg-primary-color after:absolute after:right-0 hover:after:left-0 after:-bottom-0 after:transition-all after:duration-500 group-hover:after:w-full"
														: "text-[#22C55E] hover:text-[#15803D] dark:text-[#22C55E] dark:hover:text-[#16A34A] md:py-12px lg:py-16px xl:py-20px 2xl:py-30px  after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full"
											  }`
									} `}
								>
									{name}
								</Link>
							</li>
					  ))
					: ""}

				{/* <!-- action button --> */}
				{headerType === 9 || headerType === 10 ? (
					""
				) : headerType === 5 ? (
					<li className="menu-bar lg:hidden">
						<ButtonHeader />
					</li>
				) : headerType === 3 || headerType === 4 ? (
					""
				) : (
					<li
						className={`${headerType === 6 ? "hidden sm:block lg:hidden" : ""}`}
					>
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
				{/* <!-- open mobile menu button --> */}
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
