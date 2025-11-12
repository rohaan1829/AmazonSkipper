"use client";
import getNavItems from "@/libs/getNavItems";
import { useFooterContext } from "@/context_api/FooterContext";
import Image from "next/image";
import Link from "next/link";

const Footer3 = () => {
	const { footerType } = useFooterContext();
	const navItems = getNavItems() ?? [];

	const resolveHref = item => {
		const name = item?.name?.toLowerCase() ?? "";

		if (name === "services") return "/services";
		if (name === "works") return "/portfolio";
		if (name === "testimonials") return "/testimonials";
		if (name === "about us") return "/about";
		if (name === "case studies") return "/case-studies";
		if (name.includes("faq")) return "/faq";
		if (name === "contact") return "/contact";

		return item?.path2 ?? item?.path ?? "/";
	};
	return (
		<footer>
			<div className="footer-inner bg-gradient-to-br from-[#050505] via-[#0b1f14] to-[#22C55E]/70 pt-16 md:pt-20 lg:pt-24">
				<div className="container">
					<div className="flex flex-wrap gap-10 md:gap-10px justify-between px-15px py-35px lg:px-30px lg:py-50px xl:px-50px xl:py-60px border-2 border-[#1f3a2c]/60 rounded-15px bg-black/60 backdrop-blur-sm text-white">
						<div>
							<h6 className="text-sm leading-1.2 uppercase text-white font-normal mb-25px md:mb-35px">
								Sitemap
							</h6>
							<ul className="nav flex flex-col gap-3">
								{navItems.map(item => (
									<li key={item?.name ?? item?.path ?? item?.path2} className="nav_item group relative">
										<Link
											href={resolveHref(item)}
										className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize transition-colors duration-200"
										>
											{item?.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className=" items-end hidden lg:flex">
							<div className="h-[75%]  w-0.5  bg-bg-color-2 "></div>
						</div>

						<div>
							<h6 className="text-sm leading-1.2 uppercase text-white font-normal mb-25px md:mb-35px">
								Marketplaces We Serve
							</h6>
							<ul className="nav flex flex-col gap-3">
								{["United States", "Canada", "United Kingdom", "France", "Italy", "Australia"].map(item => (
									<li key={item} className="nav_item group relative">
										<span className="text-size-15 font-normal text-white capitalize">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div className=" items-end hidden lg:flex">
							<div className="h-[75%]  w-0.5  bg-bg-color-2 "></div>
						</div>

						<div>
							<h6 className="text-sm leading-1.2 uppercase text-white font-normal mb-25px md:mb-35px">
								Contact
							</h6>
							<ul className="nav flex flex-col gap-3">
								<li className="nav_item group relative">
									<Link
										href="mailto:muhammad.huzaifa@amazonskipperteam.com"
										className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color lowercase break-all sm:break-normal"
									>
										muhammad.huzaifa@amazonskipperteam.com
									</Link>
								</li>
								<li className="nav_item group relative">
									<Link
										href="tel:+19342013452"
										className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize"
									>
										+1 934 201 3452
									</Link>
								</li>
								<li className="nav_item group relative">
									<Link
										href="tel:+923326322643"
										className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize"
									>
										+92 332 6322 643
									</Link>
								</li>
								<li className="nav_item group relative">
									<p className="text-size-15 font-normal text-white capitalize">
										Office 13609, 182-184 High Street North,<br />
										East Ham, London, United Kingdom
									</p>
								</li>
								<li className="nav_item group relative">
									<p className="text-size-15 font-normal text-white capitalize">
										Office #26, Kohinoor Plaza 1,<br />
										Jaranwala Road, Faisalabad, Pakistan
									</p>
								</li>
							</ul>
						</div>

						<div className=" items-end hidden lg:flex">
							<div className="h-[75%]  w-0.5  bg-bg-color-2 "></div>
						</div>

						<div>
							<h6 className="text-sm leading-1.2 uppercase text-white font-normal mb-25px md:mb-35px">
								Socials
							</h6>
							<ul className="nav flex flex-col gap-10px">
								<li className="nav_item group relative">
									<Link
										href="https://www.facebook.com/profile.php?id=61560301466107"
										className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize flex gap-2 items-center"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span
											className="text-primary-color group-hover:text-body-color dark:text-white-color text-size-13 border border-primary-color dark:border-border-color-3 dark:group-hover:border-primary-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color group-hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
										>
											<i className="fa-brands fa-facebook-f"></i>
										</span>{" "}
										Facebook
									</Link>
								</li>
								<li className="nav_item group relative">
									<Link
										href="https://www.instagram.com/amazonskiper"
										className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize flex gap-2 items-center"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span
											className="text-primary-color group-hover:text-body-color dark:text-white-color text-size-13 border border-primary-color dark:border-border-color-3 dark:group-hover:border-primary-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color group-hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
										>
											<i className="fa-brands fa-instagram"></i>
										</span>{" "}
										Instagram
									</Link>
								</li>
								<li className="nav_item group relative">
									<Link
										href="https://www.linkedin.com/in/virtuallyhuzaifa/"
										className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize flex gap-2 items-center"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span
											className="text-primary-color group-hover:text-body-color dark:text-white-color text-size-13 border border-primary-color dark:border-border-color-3 dark:group-hover:border-primary-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color group-hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
										>
											<i className="fa-brands fa-linkedin-in"></i>
										</span>{" "}
										LinkedIn
									</Link>
								</li>
								<li className="nav_item group relative">
									<Link
										href="https://twitter.com/amazonskiper"
										className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize flex gap-2 items-center"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span
											className="text-primary-color group-hover:text-body-color dark:text-white-color text-size-13 border border-primary-color dark:border-border-color-3 dark:group-hover:border-primary-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color group-hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
										>
											<i className="fa-brands fa-x-twitter"></i>
										</span>{" "}
										Twitter / X
									</Link>
								</li>
							</ul>
						</div>

						<div className=" items-end hidden lg:flex">
							<div className="h-[75%]  w-0.5  bg-bg-color-2 "></div>
						</div>

						<div className="flex flex-col items-start gap-6">
							<div>
								<h6 className="text-sm leading-1.2 uppercase text-white font-normal mb-25px md:mb-35px">
									Legal Details
								</h6>
								<ul className="nav flex flex-col  gap-3">
									<li className="nav_item group relative">
										<Link
											href="/privacy-policy"
											className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize"
										>
											Privacy Policy
										</Link>
									</li>

									<li className="nav_item group relative">
										<Link
											href="/refund-and-cancellation"
											className="text-size-15 font-normal text-white hover:text-primary-color dark:hover:text-primary-color capitalize"
										>
											Refund & Cancellation
										</Link>
									</li>
								</ul>
							</div>
							<Link href="/" className="inline-flex items-center justify-center">
								<Image src="/img/logo/black.png" alt="Amazon Skipper" width={420} height={420} className="w-40 h-auto" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center py-25px md:py-35px px-15px">
						<div className="copyright text-white/80 whitespace-nowrap text-sm md:text-base">
							© 2025 All rights reserved by{" "}
							<Link
								href="/"
								className="text-white hover:text-[#22C55E]"
							>
								AmazonSkipper
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer3;
