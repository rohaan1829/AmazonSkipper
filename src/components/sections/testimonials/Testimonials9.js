"use client";

import TestimonialsCard9 from "@/components/shared/cards/TestimonialsCard9";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials9 = ({ compact = false, idAttr = "testimonials", sectionClassName = "" }) => {
	const testimonials = getTestimonials() ?? [];
	const wrapperPadding = compact ? "" : "pb-60px md:pb-20 lg:pb-30";
	return (
		<section id={idAttr} className={sectionClassName}>
			<div className={`dark:bg-primary-color-light ${wrapperPadding} relative overflow-hidden`}>
				<div className="container">
					<div className="flex flex-col items-center gap-10 pt-10 md:pt-14 lg:pt-16">
						<div className="flex flex-col items-center text-center gap-4 max-w-3xl">
							
							<h2 className="text-3xl md:text-4xl lg:text-[46px] uppercase font-semibold leading-tight -tracking-0.02em text-white">
								Let’s Hear From Dear Clients.
							</h2>
						</div>

						<div className="w-full max-w-5xl">
							{/* <!-- testimonial single --> */}
							<Swiper
								slidesPerView="auto"
								direction="vertical"
								spaceBetween={30}
								centeredSlides={true}
								loop={true}
								speed={1500}
								autoplay={{
									delay: 3000,
								}}
								modules={[Autoplay]}
								className="tj-testimonial-slider testimonial-slider-9 swiper swiper-container h-[800px] lg:h-[720px] xl:h-[620px] overflow-hidden mask-fade-vertical flex items-center"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide className="h-auto" key={idx}>
												<TestimonialsCard9 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials9;
