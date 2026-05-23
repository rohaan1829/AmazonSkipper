"use client";
import ButtonHeader from "@/components/shared/buttons/ButtonHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Socials4 from "@/components/shared/socials/Socials4";
import Socials5 from "@/components/shared/socials/Socials5";
import Socials6 from "@/components/shared/socials/Socials6";
import { useHeaderContext } from "@/context_api/HeaderContext";
import { useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileMenuController from "./MobileMenuController";
import Navbar from "./Navbar";

// Single, always-pinned header. Fixed to the top of the viewport from page
// load and stays visible while scrolling — no scroll listener, no transparent
// variant, no slide-in animation.
const Header = () => {
	const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
	const { headerType } = useHeaderContext();

	return (
		<header
			className={`header-area header-fixed ${
				headerType === 6 || headerType === 9 || headerType === 10
					? "header-6"
					: headerType === 5
					? "header-5"
					: ""
			}`}
		>
			<div
				className={`${
					headerType === 10
						? "border-b border-border-coloer dark:border-bg-color-2 "
						: headerType === 9
						? "py-1"
						: "pt-5 pb-5"
				} relative`}
			>
				<div
					className={
						headerType === 5 ||
						headerType === 6 ||
						headerType === 9 ||
						headerType === 10
							? "px-15px 2xl:px-65px"
							: "container"
					}
				>
					<div
						className={`flex flex-wrap justify-between ${
							headerType === 10 ? "items-stretch" : "items-center"
						} ${headerType === 9 ? "lg:flex-nowrap lg:gap-x-3 xl:gap-x-4" : ""}`}
					>
						{/* logo */}
						<div className="flex items-center flex-shrink-0">
							<Logo />
						</div>

						{/* main menu */}
						<Navbar
							isActiveMobileMenu={isActiveMobileMenu}
							setIsActiveMobileMenu={setIsActiveMobileMenu}
						/>

						{/* right-side actions */}
						{headerType === 3 ||
						headerType === 4 ||
						headerType === 5 ||
						headerType === 6 ||
						headerType === 9 ||
						headerType === 10 ? (
							<div
								className={`${
									headerType === 9 || headerType === 10 ? "flex" : "hidden"
								} ${
									headerType === 9 || headerType === 10 || headerType === 5
										? `lg:flex items-center ${
												headerType === 9 ? "gap-15px xl:gap-20px" : "gap-25px"
										  }`
										: "lg:block"
								} ${
									headerType === 10
										? "lg:pl-30px lg:border-l border-border-coloer dark:border-bg-color-2"
										: ""
								}`}
							>
								{headerType === 9 || headerType === 10 ? (
									<>
										{headerType === 10 ? "" : <Socials6 compact={headerType === 9} />}

										<div className="hidden sm:block">
											<ButtonPrimary
												type={2}
												isIcon={true}
												url={"/contact"}
												className={`whitespace-nowrap ${
													headerType === 9
														? "!py-12px !px-25px text-[13px] xl:text-[14px]"
														: ""
												}`}
											>
												Lets Make Money
											</ButtonPrimary>
										</div>
										<div className="menu-bar block lg:hidden">
											<MobileMenuController
												setIsActiveMobileMenu={setIsActiveMobileMenu}
												isActiveMobileMenu={isActiveMobileMenu}
											/>
										</div>
									</>
								) : headerType === 6 ? (
									<ButtonPrimary isIcon={true} url={"/contact"}>
										Lets Talk
									</ButtonPrimary>
								) : headerType === 5 ? (
									<>
										<Socials5 />
										<ButtonHeader />
									</>
								) : (
									<Socials4 />
								)}
							</div>
						) : (
							""
						)}
					</div>
				</div>
				{/* mobile menu */}
				<MobileMenu isActiveMobileMenu={isActiveMobileMenu} />
			</div>
		</header>
	);
};

export default Header;
