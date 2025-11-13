"use client";

import ButtonRounded from "@/components/shared/buttons/ButtonRounded";
import FunFact9 from "@/components/shared/fun-fact/FunFact9";
import Link from "next/link";
import { useState } from "react";

const Hero9 = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<section className="hero-section relative min-h-[calc(100svh-40px)] pt-[150px] sm:pt-[118px] md:pt-[120px] lg:pt-[132px] xl:pt-[135px] 2xl:pt-[138px] pb-20px sm:pb-30px overflow-hidden bg-transparent dark:bg-black">
			{/* Black Gradient Background - Dark Mode */}
			<div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black opacity-100 dark:block hidden"></div>
			<div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-95 dark:block hidden"></div>
			
			{/* Dark mode background image */}
			<div
				className="absolute inset-0 hidden dark:block bg-no-repeat bg-center bg-cover z-0"
				style={{ backgroundImage: "url('/img/hero/darkgreen.png')" }}
			/>
			{/* <!-- bg --> */}

			<div className="px-15px relative z-10">
					<div className="mb-20px md:mb-14 lg:mb-12 xl:mb-14">
						<h1 className="text-[36px] sm:text-[32px] md:text-[39px] lg:text-[50px] xl:text-[58px] 2x:text-[62px] 3xl:text-[72px] 4xl:text-[78px] 5xl:text-[88px] text-black dark:text-white leading-[1.08] lg:leading-[1.05] mb-4 -tracking-0.04em font-semibold text-center">
						<div>Your Amazon AD Spend Could</div>
						<div>be <span className="text-[#4CAF50] font-bold">20%</span> Lower in 47 days</div>
						<div>Guaranteed!</div>
					</h1>
			</div>
			</div>
			<div className="container">
				<div className="relative pt-2 sm:pt-4 md:pt-4 lg:pt-3">
				<div className="image mx-auto w-full max-w-[560px] sm:max-w-[340px] md:max-w-[480px] lg:max-w-[460px] xl:max-w-[520px] 2xl:max-w-[580px] relative z-0 after:absolute after:left-0 after:bottom-0 after:h-[250px] after:w-full after:bg-gradient-15-light dark:after:bg-gradient-15">
				<img
					src="/img/hero/Huzaifa's Portrait.png"
					alt="Huzaifa"
					className="w-full h-auto max-h-[520px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[500px] 2xl:max-h-[540px] object-contain object-top
							[clip-path:path('M0_200A315_315_0_0_1_630_200L630_900L0_900Z')]"
				/>
				
				{/* Play Button Overlay */}
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<button
						onClick={openModal}
						className="group relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-26 xl:h-26 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 bg-transparent"
						style={{
							border: '3px solid #ffffff',
							boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)'
						}}
					>
						{/* Play Triangle with Glossy Effect */}
						<div className="relative ml-1">
							{/* Main Triangle */}
							<div 
								className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 relative"
								style={{
									background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
									clipPath: 'polygon(0 0, 0 100%, 100% 50%)',
									border: '1px solid #333'
								}}
							>
								{/* Glossy Highlight */}
								<div 
									className="absolute inset-0"
									style={{
										background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
										clipPath: 'polygon(0 0, 0 100%, 100% 50%)',
										mixBlendMode: 'overlay'
									}}
								></div>
							</div>
						</div>
						
						{/* Hover Effect */}
						<div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
					</button>
				</div>
				</div>

				<div className="mt-6 flex flex-col items-center gap-3 sm:hidden">
					<Link
						href="/contact"
						className="inline-flex items-center justify-center px-5 py-2 text-base font-medium rounded-full bg-primary-color text-white-color hover:bg-[#2E7D32] transition-colors duration-300"
					>
						Watch the Video to Get Reward
					</Link>
					<Link
						href="/contact"
						className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-lg border border-[#4CAF50] bg-[#4CAF50] text-white hover:bg-[#2E7D32] hover:border-[#2E7D32] transition-all duration-300 shadow-md hover:shadow-lg"
					>
						Get $500 Gift Card
					</Link>
				</div>

					{/* Left Side Text */}
					<div className="w-full max-w-full sm:max-w-300px relative md:absolute md:left-auto lg:left-0 xl:left-0 2xl:left-[1%] 3xl:-left-[9%] top-2 md:top-auto lg:top-[23%] xl:top-[22%] md:bottom-0 md:right-1/2 lg:right-auto md:translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 mx-auto md:mx-0 z-1">
						<div>
							<div
								className="text-seondary-color dark:text-white-color-4 leading-1.3 mb-26px text-lg md:text-xl lg:text-2xl font-medium"
							>
								<div className="text-left">
									<div className="mb-1.5">
										<span className="text-[#4CAF50] font-semibold">Forget "Best Sellers."</span>
									</div>
									<div>
										<span className="text-seondary-color dark:text-white-color">We Help YOU Become a </span>
										<span className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] bg-clip-text text-transparent font-bold">Profitable Seller</span>
										<span className="text-seondary-color dark:text-white-color">.</span>
									</div>
								</div>
							</div>
							
							{/* Clutch, AD & Trustpilot Logos */}
							<div className="flex flex-nowrap items-center gap-2 md:gap-2 mt-4 lg:mt-0 lg:-translate-y-12 lg:-translate-x-[10px]">
								<a
									href="https://clutch.co/profile/amazon-skipper"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block hover:opacity-90 transition-opacity"
								>
									<img
										src="/img/hero/clutch.png"
										alt="Clutch"
										className="h-[80px] sm:h-[90px] md:h-[142px] lg:h-[110px] xl:h-[150px] w-auto max-w-none object-contain drop-shadow-sm"
									/>
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block hover:opacity-90 transition-opacity"
								>
									<img
										src="/img/hero/ad.png"
										alt="Amazon Verified"
										className="h-[80px] sm:h-[90px] md:h-[142px] lg:h-[110px] xl:h-[150px] w-auto max-w-none object-contain drop-shadow-sm"
									/>
								</a>
								<a
									href="https://www.trustpilot.com/review/amazonskipper.com"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block hover:opacity-90 transition-opacity"
								>
									<img
										src="/img/hero/4.5trustpilot.png"
										alt="Trustpilot"
										className="h-[60px] sm:h-[70px] md:h-[62px] lg:h-[49px] xl:h-[67px] w-auto max-w-none object-contain drop-shadow-sm"
									/>
								</a>
							</div>
						</div>
					</div>

					{/* <!-- transparent area --> */}
					<div className="hidden lg:block absolute -top-3 sm:-top-0.5  lg:top-[26%] xl:top-[27%] 2xl:top-[28%] left-auto lg:left-[6%] xl:left-[10%] right-[30px] sm:right-0 md:right-[15%] lg:right-auto">
						<div className="flex gap-1.5 px-15px lg:px-24px py-18px sm:py-24px lg:py-32px rounded-10px border border-dashed border-[#4CAF50]/90 dark:border-[#4CAF50]/30 bg-gradient-to-br from-white via-[#f8f9fa] to-[#4CAF50]/80 dark:from-[#121212] dark:via-[#1a1a1a] dark:to-[#4CAF50]/15 backdrop-blur-[45px] z-1 shadow-lg shadow-[#4CAF50]/60 dark:shadow-[#4CAF50]/10">
							<div className="w-[26px] flex-shrink-0">
								<span>
									<svg
										width="26"
										height="27"
										viewBox="0 0 26 27"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0_469_44)">
											<path
												d="M15.0141 7.83721L15.0141 7.83721C11.7181 7.14624 9.14184 4.57005 8.45095 1.27394C8.41217 1.08904 8.24907 0.956565 8.06007 0.956565C7.87107 0.956565 7.70801 1.08903 7.66926 1.27392L7.66925 1.27394C6.97833 4.57002 4.4021 7.14619 1.10601 7.83706L1.106 7.83706C0.921089 7.87582 0.788596 8.03895 0.788596 8.22788C0.788596 8.41682 0.92106 8.57993 1.10599 8.61869L1.10603 8.61869C4.40206 9.30967 6.97818 11.8858 7.6691 15.1819L7.66911 15.1819C7.70786 15.3669 7.87096 15.4993 8.05992 15.4993C8.24887 15.4993 8.41198 15.3669 8.45073 15.1819L8.45074 15.1819C9.14171 11.8858 11.718 9.30966 15.0141 8.61884L15.1023 9.03989L15.0141 8.61884C15.199 8.58008 15.3315 8.41702 15.3315 8.22808L15.0141 7.83721ZM15.0141 7.83721C15.1989 7.87595 15.3314 8.03902 15.3315 8.22803L15.0141 7.83721ZM7.24805 15.2702C6.59217 12.1412 4.14665 9.69567 1.01776 9.03974C0.633557 8.95923 0.358398 8.6204 0.358398 8.22788L7.24805 15.2702ZM7.24805 15.2702C7.32857 15.6543 7.66735 15.9295 8.05992 15.9295M7.24805 15.2702L8.05992 15.9295M8.05992 15.9295C8.45244 15.9295 8.79127 15.6544 8.87178 15.2702L8.05992 15.9295Z"
												fill="white"
												stroke="white"
												strokeWidth="0.860395"
												className="fill-primary-color dark:fill-white-color stroke-primary-color dark:stroke-white-color"
											/>
											<path
												d="M13.7304 21.1203C12.2562 20.8113 11.1039 19.6591 10.7949 18.1848C10.7144 17.8006 10.3756 17.5254 9.983 17.5254C9.59048 17.5254 9.25164 17.8005 9.17113 18.1847C8.86205 19.659 7.70974 20.8112 6.23553 21.1202C5.85138 21.2008 5.57617 21.5396 5.57617 21.9321C5.57617 22.3246 5.85133 22.6635 6.23553 22.744C7.70969 23.053 8.86199 24.2053 9.17103 25.6796C9.25154 26.0637 9.59032 26.3389 9.9829 26.3389C10.3754 26.3389 10.7143 26.0638 10.7948 25.6796C11.1038 24.2053 12.2562 23.0531 13.7304 22.744C14.1146 22.6635 14.3898 22.3247 14.3898 21.9322C14.3898 21.5396 14.1146 21.2009 13.7304 21.1203ZM13.7304 21.1203L13.6421 21.5413C13.6421 21.5413 13.6421 21.5413 13.6422 21.5413M13.7304 21.1203L13.6422 21.5413M13.6422 21.5413C12.0008 21.1973 10.7179 19.9145 10.3738 18.273L10.3738 18.273C10.3351 18.0881 10.172 17.9556 9.983 17.9556C9.79401 17.9556 9.63093 18.088 9.59219 18.2729L9.59218 18.273C9.24805 19.9144 7.96514 21.1972 6.3238 21.5413L6.32378 21.5413C6.13886 21.58 6.00637 21.7432 6.00637 21.9321C6.00637 22.1211 6.13883 22.2842 6.32377 22.3229L6.3238 22.3229C7.9651 22.667 9.248 23.9499 9.59208 25.5913L9.59208 25.5913C9.63084 25.7762 9.79394 25.9087 9.9829 25.9087C10.1719 25.9087 10.335 25.7763 10.3737 25.5913L10.3737 25.5913C10.7178 23.9499 12.0008 22.667 13.6421 22.323L13.6422 22.323C13.8271 22.2842 13.9596 22.1211 13.9596 21.9322C13.9596 21.7433 13.8272 21.5802 13.6422 21.5413Z"
												fill="white"
												stroke="white"
												strokeWidth="0.860395"
												className="fill-primary-color dark:fill-white-color stroke-primary-color dark:stroke-white-color"
											/>
											<path
												d="M24.8482 13.8607L24.8482 13.8607C25.0331 13.8995 25.1656 14.0626 25.1656 14.2515C25.1656 14.4404 25.0331 14.6036 24.8481 14.6424C22.6884 15.095 21.0004 16.7831 20.5475 18.9428L20.5475 18.9429C20.5088 19.1278 20.3457 19.2603 20.1567 19.2603C19.9678 19.2603 19.8047 19.1278 19.7659 18.9429L19.7659 18.9429C19.3132 16.7831 17.6252 15.095 15.4654 14.6423C15.2804 14.6035 15.148 14.4403 15.148 14.2514C15.148 14.0625 15.2805 13.8994 15.4654 13.8606L15.4654 13.8606C17.6252 13.4079 19.3132 11.7199 19.766 9.56008L19.766 9.56004C19.8048 9.37515 19.9678 9.2427 20.1568 9.2427C20.3458 9.2427 20.5089 9.37518 20.5476 9.56011L20.5476 9.56012C21.0004 11.7199 22.6884 13.408 24.8482 13.8607Z"
												fill="white"
												stroke="white"
												strokeWidth="0.860395"
												className="fill-primary-color dark:fill-white-color stroke-primary-color dark:stroke-white-color"
											/>
										</g>
										<defs>
											<clipPath id="clip0_469_44">
												<rect
													width="25.8119"
													height="25.8118"
													fill="white"
													transform="translate(0.0751953 0.525391)"
													className="fill-primary-color dark:fill-white-color stroke-primary-color dark:stroke-white-color"
												/>
											</clipPath>
										</defs>
									</svg>
								</span>
							</div>
							<Link
								href="/contact"
								className="hidden sm:inline-flex md:text-[19px] leading-[1.52] font-medium text-white bg-[#4CAF50] hover:bg-[#2E7D32] dark:bg-[#4CAF50] dark:hover:bg-[#2E7D32] transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg border border-[#4CAF50] hover:border-[#2E7D32] shadow-md hover:shadow-lg items-center justify-center"
							>
								Get $500 Gift Card
							</Link>
							<div>
								<span className="w-[13px] h-[13px] border-2 border-black-color dark:border-white-color bg-white-color dark:bg-black-color rounded-100% absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2  [&:nth-child(2)]:left-full last:left-full last:top-full"></span>
								<span className="w-[13px] h-[13px] border-2 border-black-color dark:border-white-color bg-white-color dark:bg-black-color rounded-100% absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2  [&:nth-child(2)]:left-full last:left-full last:top-full"></span>
								<span className="w-[13px] h-[13px] border-2 border-black-color dark:border-white-color bg-white-color dark:bg-black-color rounded-100% absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2  [&:nth-child(2)]:left-full last:left-full last:top-full "></span>
							</div>
						<div className="hidden sm:block absolute  -left-[25px]  -bottom-[30px] sm:-left-[38px] sm:-bottom-[43px] w-full max-w-[35px] sm:max-w-[51px] ">
								<img
									src="/img/icons/hero-9-pointer.svg"
									className="w-full"
									alt=""
								/>
							</div>
						</div>

						<Link
							className="hidden sm:inline-flex sm:-ml-[122px] mt-9 px-4 py-0.5 text-size-17 font-medium rounded-full bg-primary-color text-white-color hover:bg-[#2E7D32] transition-colors duration-300 lg:translate-x-[20px]"
							href="/contact"
						>
							Watch the Video to Get Reward
						</Link>
					</div>
					<div className="w-full max-w-300px relative md:absolute  md:right-auto lg:right-0 xl:right-0 2xl:right-[1%] 3xl:-right-[9%] top-2 md:top-auto lg:top-[23%] xl:top-[22%] md:bottom-0  md:left-1/2 lg:left-auto  md:-translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2  mx-auto md:mx-0 z-1 ">
						<div>
							<div className="text-white sm:text-seondary-color dark:text-white-color-4 leading-1.3 mb-26px text-lg md:text-xl lg:text-2xl font-medium">
								<div className="text-left">
									<div className="mb-2">
										<span className="text-white sm:text-[#4CAF50] font-bold">No Empty Promise, Just Proven Results</span>
									</div>
									<div>
										<span className="text-white sm:text-seondary-color dark:text-white-color"> - Or We'll Refund You </span>
										<span className="bg-gradient-to-r from-[#FF6B6B] to-[#E53E3E] bg-clip-text text-transparent font-bold">100%</span>
										<span className="text-white sm:text-seondary-color dark:text-white-color">.</span>
									</div>
								</div>
							</div>
						</div>
						<FunFact9 />
						<div>
							<ButtonRounded />
						</div>
					</div>
				</div>
			</div>

			{/* Video Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
					<div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl">
						{/* Close Button */}
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								className="w-6 h-6"
							>
								<path
									d="M18 6L6 18M6 6L18 18"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
						
						{/* YouTube Video Embed */}
						<div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
							<iframe
								src="https://www.youtube.com/embed/sf7DukfFK8E?si=XZKLLslAmqnhLQ7M&autoplay=1"
								title="Amazon Skipper Video"
								className="absolute top-0 left-0 w-full h-full"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Hero9;
