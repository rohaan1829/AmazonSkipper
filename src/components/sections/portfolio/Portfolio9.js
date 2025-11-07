"use client";
import PortfolioCard11 from "@/components/shared/cards/PortfolioCard11";
import getPortfolio from "@/libs/getPortfolio";
import portfolioGrid from "@/libs/portfolioGrid";
import Link from "next/link";
import { useEffect } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio9 = () => {
	const portfolio = getPortfolio()?.slice(0, 4);
	useEffect(() => {
		portfolioGrid();
	}, []);
	return (
		<section id="portfolio">
			<div className="dark:bg-primary-color-light pb-60px md:pb-20 lg:pb-30 ">
				<div className="container">
					{/* <!-- section heading --> */}
					<div className="mb-10 md:mb-50px xl:mb-60px  flex flex-wrap justify-between items-end ">
					<div className="w-full text-center">
							<div className="mb-25px  ">
								<Link
									href="/services"
									className="text-xs  uppercase text-black-color dark:text-white-color  font-semibold relative inline-block tracking-0.2em wow fadeInRight hover:text-[#4CAF50] transition-colors duration-300 group"
									data-wow-delay=".3s"
								>
									
									<i className="fa-regular fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block"></i>
								</Link>
							</div>
						<h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 uppercase font-semibold  leading-1.2 -tracking-0.02em inline-block text-black-color dark:text-white-color text-center max-w-580px w-full tj-text-invert">
								Our Services
							</h2>
						</div>
					</div>
				</div>

				<div className=" mx-25px  ">
					<div
						className="portfio-slider-wrapper wow fadeInUp"
						data-wow-delay=".3s"
					>
						{portfolio.length > 0 ? (
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								loop={true}
								freeMode={true}
								centeredSlides={true}
								speed={3000}
								autoplay={{
									delay: 2000,
								}}
								pagination={{
									clickable: true,
								}}
								breakpoints={{
									768: {
										slidesPerView: 1.5,
									},

									992: {
										slidesPerView: 2,
									},
									1200: {
										slidesPerView: 3,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="portfolio-slider-5"
							>
								{portfolio?.map((portfioSingle, idx) => (
									<SwiperSlide key={idx}>
										<PortfolioCard11 portfolio={portfioSingle} />
									</SwiperSlide>
								))}
							</Swiper>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio9;
