"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import brandImages from "../../../../public/fakedata/brand-marquee.json";
import { useEffect, useState } from "react";

const BrandMarque3 = ({ type = "brands" }) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	// Case Studies Data
	const caseStudies = [
		{
			id: 1,
			seller: "Sarah M.",
			industry: "Beauty & Cosmetics",
			before: "$2,500",
			after: "$8,900",
			improvement: "256%",
			description: "Transformed underperforming ads into profit-generating campaigns"
		},
		{
			id: 2,
			seller: "Mike R.",
			industry: "Electronics",
			before: "$1,200",
			after: "$5,400",
			improvement: "350%",
			description: "Increased ROAS from 2.1x to 7.4x in just 6 weeks"
		},
		{
			id: 3,
			seller: "Jennifer L.",
			industry: "Home & Garden",
			before: "$3,100",
			after: "$12,200",
			improvement: "294%",
			description: "Turned around failing campaigns with strategic optimization"
		},
		{
			id: 4,
			seller: "David K.",
			industry: "Sports & Outdoors",
			before: "$1,800",
			after: "$6,700",
			improvement: "272%",
			description: "Achieved consistent profitability across all ad campaigns"
		},
		{
			id: 5,
			seller: "Lisa T.",
			industry: "Fashion & Apparel",
			before: "$2,200",
			after: "$9,100",
			improvement: "314%",
			description: "Revolutionized ad strategy leading to massive growth"
		}
	];

	// Video Testimonials Data
	const testimonials = [
		{
			id: 1,
			name: "Sarah M.",
			title: "Beauty Brand Owner",
			video: "/img/testimonials/testimonial-1.jpg",
			quote: "Amazon Skipper transformed my ad campaigns completely. My ROAS went from 2.1x to 7.4x in just 6 weeks!"
		},
		{
			id: 2,
			name: "Mike R.",
			title: "Electronics Seller",
			video: "/img/testimonials/testimonial-2.jpg",
			quote: "I was skeptical at first, but the results speak for themselves. 350% increase in ad performance!"
		},
		{
			id: 3,
			name: "Jennifer L.",
			title: "Home & Garden Brand",
			video: "/img/testimonials/testimonial-3.jpg",
			quote: "Finally found a solution that actually works. My ads are now profit-generating machines!"
		},
		{
			id: 4,
			name: "David K.",
			title: "Sports Equipment Seller",
			video: "/img/testimonials/testimonial-4.jpg",
			quote: "The team at Amazon Skipper knows exactly what they're doing. Highly recommend!"
		},
		{
			id: 5,
			name: "Lisa T.",
			title: "Fashion Brand Owner",
			video: "/img/testimonials/testimonial-5.jpg",
			quote: "Incredible results! My business has grown exponentially since working with Amazon Skipper."
		}
	];

	const renderCaseStudies = () => (
		<div className={`tj-roll-section`}>
			<div className={`relative z-0 mask-fade-horizontal-2`}>
				{isClient ? (
					<Swiper
						slidesPerView="auto"
						spaceBetween={24}
						centeredSlides={false}
						speed={8000}
						loop={true}
						freeMode={true}
						allowTouchMove={true}
						autoplay={{
							delay: 0,
						}}
						modules={[Autoplay]}
						className={`tj-marquee tj-marquee--3`}
					>
					{caseStudies.map((study) => (
						<SwiperSlide
							key={study.id}
							className="cursor-pointer max-w-full !w-[340px] h-[420px] rounded-20px bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden"
						>
							{/* Background Pattern */}
							<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4CAF50]/10 to-transparent rounded-bl-3xl"></div>
							
							{/* Header Section with Gradient */}
							<div className="relative h-32 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-t-20px flex items-center justify-center">
								{/* Wavy Separator */}
								<div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-orange-400 via-purple-500 to-green-400 opacity-80"></div>
								
								{/* Profile Circle */}
								<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
									<span className="text-2xl font-bold text-[#4CAF50]">{study.seller.charAt(0)}</span>
								</div>
							</div>
							
							{/* Content Section */}
							<div className="p-6 relative">
								{/* Background Pattern */}
								<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#4CAF50]/5 to-transparent rounded-bl-2xl"></div>
								
								<div className="relative z-10">
									{/* Name */}
									<h4 className="text-xl font-bold text-seondary-color dark:text-white-color mb-2 text-center group-hover:text-[#4CAF50] transition-colors duration-300">
										{study.seller}
									</h4>
									
									{/* Industry */}
									<p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center font-medium">{study.industry}</p>
									
									{/* Description */}
									<p className="text-sm text-gray-700 dark:text-gray-300 mb-6 text-center leading-relaxed">{study.description}</p>
									
									{/* Stats Grid */}
									<div className="grid grid-cols-2 gap-4 mb-6">
										<div className="text-center bg-red-50 dark:bg-red-900/20 rounded-xl p-3 border border-red-100 dark:border-red-800/30">
											<p className="text-xs text-red-600 dark:text-red-400 mb-1 font-semibold uppercase tracking-wide">Before</p>
											<p className="text-lg font-bold text-red-600 dark:text-red-400">{study.before}</p>
										</div>
										<div className="text-center bg-green-50 dark:bg-green-900/20 rounded-xl p-3 border border-green-100 dark:border-green-800/30">
											<p className="text-xs text-green-600 dark:text-green-400 mb-1 font-semibold uppercase tracking-wide">After</p>
											<p className="text-lg font-bold text-green-600 dark:text-green-400">{study.after}</p>
										</div>
									</div>
									
									{/* Improvement Highlight */}
									<div className="text-center bg-gradient-to-r from-[#4CAF50]/10 to-[#2E7D32]/10 dark:from-[#4CAF50]/20 dark:to-[#2E7D32]/20 rounded-xl p-4 border border-[#4CAF50]/20 dark:border-[#4CAF50]/30">
										<p className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-semibold uppercase tracking-wide">Improvement</p>
										<p className="text-3xl font-bold text-[#4CAF50] group-hover:scale-110 transition-transform duration-300">{study.improvement}</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
					</Swiper>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{caseStudies.slice(0, 3).map((study) => (
							<div
								key={study.id}
								className="rounded-20px bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 p-6"
							>
								<div className="text-center">
									<h4 className="text-xl font-bold text-seondary-color dark:text-white-color mb-2">
										{study.seller}
									</h4>
									<p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{study.industry}</p>
									<p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{study.description}</p>
									<div className="text-center">
										<p className="text-2xl font-bold text-[#4CAF50]">{study.improvement}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);

	const renderTestimonials = () => (
		<div className={`tj-roll-section`}>
			<div className={`relative z-0 mask-fade-horizontal-2`}>
				{isClient ? (
					<Swiper
						slidesPerView="auto"
						spaceBetween={24}
						centeredSlides={false}
						speed={8000}
						loop={true}
						freeMode={true}
						allowTouchMove={true}
						autoplay={{
							delay: 0,
						}}
						modules={[Autoplay]}
						className={`tj-marquee tj-marquee--3`}
					>
					{testimonials.map((testimonial) => (
						<SwiperSlide
							key={testimonial.id}
							className="cursor-pointer max-w-full !w-[340px] h-[380px] rounded-20px bg-white dark:bg-gray-800 shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative"
						>
							{/* Background Pattern */}
							<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4CAF50]/10 to-transparent rounded-bl-3xl"></div>
							
							{/* Video Section */}
							<div className="relative h-64 bg-black">
								{/* Wavy Separator */}
								<div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-orange-400 via-purple-500 to-green-400 opacity-80"></div>
							</div>
							
							{/* Content Section - Name, Occupation, and Play Button */}
							<div className="p-6 relative">
								{/* Background Pattern */}
								<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#4CAF50]/5 to-transparent rounded-bl-2xl"></div>
								
								<div className="relative z-10 text-center">
									{/* Name */}
									<h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#4CAF50] transition-colors duration-300">
										{testimonial.name}
									</h4>
									
									{/* Occupation */}
									<p className="text-sm text-gray-300 font-medium mb-4">
										{testimonial.title}
									</p>
									
									{/* Simple Play Button */}
									<button className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors duration-300">
										<svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
											<path d="M8 5v14l11-7z"/>
										</svg>
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
					</Swiper>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{testimonials.slice(0, 3).map((testimonial) => (
							<div
								key={testimonial.id}
								className="rounded-20px bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 p-6 text-center"
							>
								<h4 className="text-xl font-bold text-seondary-color dark:text-white-color mb-2">
									{testimonial.name}
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">
									{testimonial.title}
								</p>
								<button className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors duration-300">
									<svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
										<path d="M8 5v14l11-7z"/>
									</svg>
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);

	const renderBrands = () => (
		<div className={`tj-roll-section`}>
			<div className={`relative z-0 mask-fade-horizontal-2`}>
				<Swiper
					slidesPerView="auto"
					spaceBetween={20}
					centeredSlides={true}
					speed={4000}
					loop={true}
					freeMode={true}
					allowTouchMove={false}
					autoplay={{
						delay: 0,
					}}
					modules={[Autoplay]}
					className={`tj-marquee tj-marquee--3`}
				>
					{brandImages?.length
						? brandImages?.map(({ darkImg, lightImg }, idx) => (
								<SwiperSlide
									key={idx}
									className="cursor-pointer max-w-full !w-[200px] h-[84px] rounded-10px bg-cream-light-color dark:bg-black-color flex items-center justify-center relative z-0 overflow-hidden after:absolute after:left-0 after:right-0 after:w-full after:h-full after:-z-1 after:opacity-0 after:transition-all after:duration-300 after:bg-200 after:bg-gradient-secondary hover:after:opacity-100 group"
								>
									<div className="max-w-100px md:max-w-full">
										<img
											className={`invert dark:invert-0 w-full transition-all duration-300 group-hover:brightness-100  group-hover:invert-0`}
											src={darkImg ? darkImg : "/img/roll/roll-img8.png"}
											alt="Brand"
										/>
									</div>
								</SwiperSlide>
						  ))
						: ""}
				</Swiper>
			</div>
		</div>
	);

	return (
		<>
			{type === "case-studies" && renderCaseStudies()}
			{type === "testimonials" && renderTestimonials()}
			{type === "brands" && renderBrands()}
		</>
	);
};

export default BrandMarque3;
