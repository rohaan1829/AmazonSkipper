"use client";
import { useFooterContext } from "@/context_api/FooterContext";
import Link from "next/link";
import getNavItems from "@/libs/getNavItems";

const Footer6 = () => {
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
			<div className="footer-inner bg-gradient-to-b from-green-600 to-black rounded-t-[24px] md:rounded-t-[36px] lg:rounded-t-[56px]">
				<div className="pt-6 pb-8 md:pt-20px md:pb-14px lg:pb-18px xl:pt-20px xl:pb-24px">
					<div className="container">
						<div
							className="flex flex-wrap gap-x-6 lg:gap-x-6 gap-y-20px justify-between"
						>
							<div
								className="max-w-full w-full   md:max-w-[calc(50%-20px)] lg:max-w-[390px]  xl:max-w-[260px]  2xl:max-w-[360px]   wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="max-w-220px w-full mb-6">
									<Link href="/">
										<img src="/img/logo/black.png" alt="" />
									</Link>
								</div>
								<div className="text-white-color mb-4">
									<p className="text-size-15 leading-relaxed text-white/80">
										At Amazonskipper, we do not rely on luck or guesswork. We study the numbers,
										build resilient systems, and engineer reliable Amazon outcomes for brands that
										want predictable growth.
									</p>
								</div>

								<ul className="nav flex items-center    gap-2">
									<li className="nav_item group relative ">
										<Link
											href="https://www.facebook.com/profile.php?id=61560301466107"
											target="_blank"
											rel="noopener noreferrer"
											className="text-size-15 font-normal text-white-color  capitalize flex gap-2 items-center "
										>
											<span
												className="text-white-color 
                      text-size-13 border border-border-color-3 group-hover:border-black-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-black-color group-hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
											>
												<i className="fab fa-facebook-f"></i>
											</span>
										</Link>
									</li>
									<li className="nav_item group relative ">
										<Link
											href="https://www.instagram.com/amazonskiper"
											target="_blank"
											rel="noopener noreferrer"
											className="text-size-15 font-normal text-white-color  capitalize flex gap-2 items-center "
										>
											<span
												className="text-white-color 
                      text-size-13 border border-border-color-3 group-hover:border-black-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-black-color group-hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
											>
												<i className="fab fa-instagram"></i>
											</span>
										</Link>
									</li>
									<li className="nav_item group relative ">
										<Link
											href="https://twitter.com/amazonskiper"
											target="_blank"
											rel="noopener noreferrer"
											className="text-size-15 font-normal text-white-color  capitalize flex gap-2 items-center "
										>
											<span
												className="text-white-color 
                      text-size-13 border border-border-color-3 group-hover:border-black-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-black-color group-hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
											>
												<i className="fab fa-x-twitter"></i>
											</span>
										</Link>
									</li>
									<li className="nav_item group relative ">
										<Link
											href="https://www.linkedin.com/in/virtuallyhuzaifa/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-size-15 font-normal text-white-color  capitalize flex gap-2 items-center "
										>
											<span
												className="text-white-color 
                      text-size-13 border border-border-color-3 group-hover:border-black-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-black-color group-hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
											>
												<i className="fab fa-linkedin-in"></i>
											</span>
										</Link>
									</li>
								</ul>
							</div>
							<div
								className="max-w-full w-full   md:max-w-[calc(50%-20px)] lg:w-auto lg:max-w-[inherit] wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h6 className="text-xl leading-1.2 uppercase font-semibold text-white-color mb-25px md:mb-35px">
									Legal Details
								</h6>
								<ul className="nav flex flex-col  gap-3">
									<li className="nav_item group relative">
										<Link
											href="/privacy-policy"
											className="text-size-15 font-normal text-white-color hover:text-primary-color dark:hover:text-primary-color capitalize transition-all duration-200 "
										>
											Privacy Policy
										</Link>
									</li>

									<li className="nav_item group relative">
										<Link
											href="/refund-and-cancellation"
											className="text-size-15 font-normal text-white-color hover:text-primary-color dark:hover:text-primary-color capitalize transition-all duration-200 "
										>
											Refund & Cancellation
										</Link>
									</li>

								</ul>
							</div>

							<div
								className="w-full max-w-full md:max-w-[calc(50%-20px)] lg:w-auto lg:max-w-[inherit] wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h6 className="text-xl leading-1.2 uppercase font-semibold text-white-color mb-25px md:mb-35px">
									Contact
								</h6>
								<ul className="nav flex flex-col  gap-3">
									<li className="nav_item group relative">
										<p className="text-size-15 font-normal text-white-color capitalize">
											Office 13609, 182-184 High Street North,<br />
											East Ham, London, United Kingdom, E6 2JA
											<br />
											Office #26<br />
											Kohinoor Plaza 1, Jaranwala Road,<br />
											Faisalabad, Pakistan
										</p>
									</li>
									<li className="nav_item group relative">
										<Link
											href="mailto:muhammad.huzaifa@amazonskipperteam.com"
											className="text-size-15 font-normal text-white-color hover:text-primary-color dark:hover:text-primary-color capitalize  "
										>
											muhammad.huzaifa@amazonskipperteam.com
										</Link>
									</li>

									<li className="nav_item group relative">
										<Link
											href="tel:+19342013452"
											className="text-size-15 font-normal text-white-color hover:text-primary-color dark:hover:text-primary-color capitalize  "
										>
											+1 934 201 3452
										</Link>
									</li>
									<li className="nav_item group relative">
										<Link
											href="tel:+923326322643"
											className="text-size-15 font-normal text-white-color hover:text-primary-color dark:hover:text-primary-color capitalize  "
										>
											+92 332 6322 643
										</Link>
									</li>
								</ul>
							</div>

							<div
								className="w-full max-w-full md:max-w-[calc(50%-20px)] lg:w-auto lg:max-w-[inherit] wow fadeInUp"
								data-wow-delay=".9s"
							>
								<h6 className="text-xl leading-1.2 uppercase font-semibold text-white-color mb-25px md:mb-35px">
									Marketplaces We Serve
								</h6>
								<ul className="nav flex flex-col gap-3 text-white">
									{["United States", "Canada", "United Kingdom", "France", "Italy", "Australia"].map(
										item => (
											<li key={item} className="nav_item">
												<span className="text-size-15 font-normal capitalize">{item}</span>
											</li>
										),
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- footer copyright --> */}

				<div className="footer-copyright">
					<div className="container">
						<div className="flex flex-wrap gap-3 md:gap-14px justify-center xl:justify-between items-center py-1.5 md:py-10px border-t border-white-color-3 ">
							<div>
								<ul className="nav flex flex-wrap gap-4 md:gap-x-28px gap-y-3 text-sm text-white/70 uppercase tracking-wide">
									{navItems.map(item => (
										<li key={item?.name ?? item?.path ?? item?.path2} className="nav_item group relative">
											<Link
												href={resolveHref(item)}
												className="transition-colors duration-200 hover:text-[#22C55E]"
											>
												{item?.name}.
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="copyright text-white-color whitespace-nowrap text-sm uppercase">
								© All rights reserved by{" "}
								<Link
									href="/"
									className="text-white-color hover:text-primary-color dark:hover:text-primary-color"
								>
									Amazonskipper
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer6;
