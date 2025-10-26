"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect, useState } from "react";

const Skills4 = ({ type, title }) => {
	const swiperRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// Value proposition carousel data
	const valueProps = [
		{
			id: 1,
			text: "More sales, less stress.",
			icon: "💰"
		},
		{
			id: 2,
			text: "Profitable growth, not just clicks.",
			icon: "📈"
		},
		{
			id: 3,
			text: "Your products, in front of the right customers.",
			icon: "🎯"
		},
		{
			id: 4,
			text: "A trusted partner invested in your success.",
			icon: "🤝"
		},
		{
			id: 5,
			text: "Time for what matters most.",
			icon: "⏰"
		}
	];

	return (
		<section
			id="skills"
			className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative"
		>
				<div className="container">
				{/* Section Heading */}
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-seondary-color dark:text-white-color mb-6">
						This could be you. <span className="text-[#4CAF50]">Let us show you how.</span>
							</h2>
						</div>

				{/* Value Proposition Carousel */}
				<div className="relative mb-12">
					{isClient && (
						<>
							{/* Navigation Arrows */}
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
							>
								<svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-[#4CAF50] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							
							<button
								onClick={() => swiperRef.current?.slideNext()}
								className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
							>
								<svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-[#4CAF50] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</button>

							<div className="relative">
								<Swiper
									onSwiper={(swiper) => {
										swiperRef.current = swiper;
									}}
									slidesPerView="auto"
									spaceBetween={24}
									centeredSlides={false}
									speed={500}
									loop={true}
									allowTouchMove={true}
									modules={[Autoplay]}
									className="value-props-swiper"
								>
									{valueProps.map((prop) => (
										<SwiperSlide
											key={prop.id}
											className="cursor-pointer max-w-full !w-[300px] h-[200px] rounded-20px bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden"
										>
											{/* Background Pattern */}
											<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4CAF50]/10 to-transparent rounded-bl-3xl"></div>
											
											{/* Content */}
											<div className="p-8 relative h-full flex flex-col items-center justify-center text-center">
												<div className="relative z-10">
													{/* Icon */}
													<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
														{prop.icon}
													</div>
													
													{/* Text */}
													<p className="text-lg font-semibold text-seondary-color dark:text-white-color group-hover:text-[#4CAF50] transition-colors duration-300 leading-relaxed">
														{prop.text}
													</p>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</>
					)}
					
					{/* Fallback for SSR */}
					{!isClient && (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{valueProps.slice(0, 3).map((prop) => (
								<div
									key={prop.id}
									className="rounded-20px bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 p-8 text-center"
								>
									<div className="text-4xl mb-4">{prop.icon}</div>
									<p className="text-lg font-semibold text-seondary-color dark:text-white-color leading-relaxed">
										{prop.text}
									</p>
								</div>
							))}
						</div>
					)}
				</div>

				{/* CTA Button */}
				<div className="text-center">
					<button className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:from-[#2E7D32] hover:to-[#1B5E20] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
						Let's Make Money!
					</button>
				</div>
			</div>
		</section>
	);
};

export default Skills4;
