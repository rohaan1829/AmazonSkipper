"use client";

import BrandMarque3 from "../marquee/BrandMarque3";

const Brands2 = ({ type }) => {
	return (
		<div
			className={`${
				type == 2 ? " pt-60px md:pt-20 lg:pt-30 " : ""
			} overflow-x-hidden dark:bg-primary-color-light`}
		>
			{/* Case Studies Section */}
			<section className="py-16 md:py-20 lg:py-24 bg-black">
				<div className="container">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
							Real Sellers. <span className="text-[#4CAF50]">Real Results.</span>
						</h2>
						<h3 className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 max-w-4xl mx-auto">
							See the Real-World Examples of Amazon Sellers Like YOU Turn Around Their Underperforming Amazon Ads.
						</h3>
						<div className="max-w-3xl mx-auto">
							<p className="text-base md:text-lg text-white/70 leading-relaxed mb-4">
								You're not alone if your Amazon ads aren't delivering the results you expected. In fact, it's a common struggle for many sellers.
							</p>
							<p className="text-base md:text-lg text-white/70 leading-relaxed mb-4">
								But here's the good news: Underperforming ads don't have to be your reality. See the real-world examples of how we've helped Amazon sellers like you transform their ad campaigns & get profit generating results.
							</p>
							<p className="text-base md:text-lg font-semibold text-[#4CAF50]">
								If they can do it, so can you.
							</p>
						</div>
					</div>
					
					{/* Success Stories Slider */}
					<BrandMarque3 type="case-studies" />
				</div>
			</section>

			{/* Video Testimonials Section */}
			<section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-black to-[#4CAF50]">
				<div className="container">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
							Don't Just Take Our Word for It. <span className="text-white">Hear It Straight from the Sellers.</span>
						</h2>
					</div>
					
					{/* Testimonial Slider */}
					<BrandMarque3 type="testimonials" />
				</div>
			</section>
		</div>
	);
};

export default Brands2;
