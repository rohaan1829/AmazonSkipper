"use client";
import ReviewsCard from "@/components/shared/cards/ReviewsCard";
import FunFact3 from "@/components/shared/fun-fact/FunFact3";
import { useEffect } from "react";

const Hero4 = () => {
	useEffect(() => {
		// Initialize GLightbox for video modal
		import("glightbox").then(({ default: GLightbox }) => {
			// Destroy existing instance if any
			if (window.lightbox) {
				window.lightbox.destroy();
			}
			// Create new instance with all glightbox elements
			window.lightbox = GLightbox({
				selector: ".glightbox",
			});
		});
	}, []);

	return (
		<section className="hero-section heroAnimation relative pt-30 2xl:pt-150px overflow-hidden">
			{/* Gradient Background - Dark Mode */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#4CAF50]/60 opacity-90 dark:block hidden"></div>
			<div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/50 via-transparent to-[#121212] opacity-85 dark:block hidden"></div>
			
			{/* Gradient Background - Light Mode */}
			<div className="absolute inset-0 bg-gradient-to-br from-white via-[#4CAF50]/40 to-[#4CAF50] opacity-95 dark:hidden block"></div>
			<div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50] via-[#4CAF50]/50 to-white opacity-95 dark:hidden block"></div>
			<div className="container relative z-10">
				<div className="relative">
					{/* <!--  heading --> */}
					<div className="text-center mt-[3%]">
						<div className="  mb-5 md:mb-25px 2xl:mb-38px">
							<span className="tj-hero-4-subtitle text-xs  uppercase py-9px pl-8 pr-22px bg-cream-light-color dark:bg-seondary-color text-primary-color dark:text-white-color rounded-full font-semibold relative  after:w-7px after:h-7px after:absolute after:left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-green1 after:rounded-full inline-block">
								SCHEDULE A DEMO
							</span>
						</div>
						<h1 className="tj-hero-4-title text-[36px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[64px] 2xl:text-[56px] 3xl:text-[78px] 4xl:text-[82px] 5xl:text-[95px] text-[#121212] dark:text-white leading-0.84 font-semibold inline-block">
							Your Amazon Ad Spend Could Be <span className="text-[#4CAF50]">X%</span> Lower in 47 Days Guaranteed!
						</h1>
					</div>

					{/* <!-- content wrapper --> */}
					<div className="relative gap-30px lg:gap-0  flex flex-wrap justify-center">
						{/* <!-- image box --> */}

						<div className="tj-hero-4-bottom-thumb relative mt-10 md:mt-15 lg:mt-20 max-w-230px sm:max-w-310px md:max-w-315px lg:max-w-350px xl:max-w-390px  2xl:max-w-410px">
							<div className="image-animated" data-tilt>
								<div className="img relative group cursor-pointer">
									<img
										src="/img/hero/huzaifa_edit.png"
										alt="banner image"
										className="rounded-full  max-w-full w-fll transition-all duration-300 block"
									/>
									{/* Play button overlay */}
									<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full group-hover:bg-opacity-50 transition-all duration-300">
										<a
											href="https://www.youtube.com/embed/KCOieD4cFpE"
											className="glightbox popup_video flex items-center justify-center w-16 h-16 bg-[#4CAF50] rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg"
										>
											<svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
												<path d="M8 5v14l11-7z"/>
											</svg>
										</a>
									</div>
								</div>
							</div>

							{/* <!-- cartecgories --> */}
							<div className=" tj-hero-4-bottom-thumb-shape-1 absolute bottom-[34%] left-[-26%] sm:bottom-[26%] sm:left-[-38%] lg:bottom-[16%] xl:bottom-[22%] 2xl:bottom-[23%]">
								<span className="tj-hero-4-bottom-tag text-size-10 sm:text-sm md:text-base px-13px sm:px-19px md:px-22px py-10px sm:py-11px md:py-14px text-primary-color bg-cream-light-color dark:bg-transparent border border-border-color rounded-50px dark:text-white-color font-semibold">
									Product Designer
								</span>
							</div>
							<div className="tj-hero-4-bottom-thumb-shape-2 absolute top-[42%] right-[-26%] sm:right-[-38%] lg:top-[15%] xl:top-[42%] xl:right-[-25%] 2xl:right-[-38%]">
								<span className="tj-hero-4-bottom-tag text-size-10 sm:text-sm md:text-base px-13px sm:px-19px md:px-22px py-10px sm:py-11px md:py-14px text-primary-color bg-cream-light-color dark:bg-transparent border border-border-color rounded-50px dark:text-white-color font-semibold">
									UX/UI Designer
								</span>
							</div>
						</div>
						{/* <!-- ratings --> */}
						<ReviewsCard />

						{/* <!-- fanfact --> */}
						<FunFact3 />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero4;
