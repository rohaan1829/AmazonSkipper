"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard5 from "@/components/shared/cards/BlogCard5";

const caseStudies = [
  { title: "Amazon PPC Optimization Success", img: "/img/hero/huzaifa.png" },
  { title: "Reducing Ad Spend by 45%", img: "/img/hero/huzaifa.png" },
  { title: "Brand Campaign Transformation", img: "/img/hero/huzaifa.png" },
  { title: "Product Launch Ad Strategy", img: "/img/hero/huzaifa.png" },
];

const videoTestimonials = [
  { id: "testimonial-1", img: "/img/hero/huzaifa.png", title: "Sarah's Success Story", category: "Video" },
  { id: "testimonial-2", img: "/img/hero/huzaifa.png", title: "How I Reduced My Ad Spend", category: "Video" },
  { id: "testimonial-3", img: "/img/hero/huzaifa.png", title: "Real Results Real Fast", category: "Video" },
];

const Brands2 = ({ type }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((p) => (p + 1) % caseStudies.length);
  const prevSlide = () => setActiveIndex((p) => (p - 1 + caseStudies.length) % caseStudies.length);

  // Cards increased by 50%
  const ACTIVE_W = 465; // 50% increase from 310
  const ACTIVE_H = 810; // 50% increase from 540
  const SIDE_W = 390; // 50% increase from 260
  const SIDE_H = 702; // 50% increase from 468

  // slightly increased spacing for breathing room (increased proportionally)
  const SIDE_OFFSET_X = 435; // 50% increase from 290
  const ROT_DEG = 20;

	return (
		<div
			className={`${
        type == 2 ? "pt-60px md:pt-20 lg:pt-30" : ""
			} overflow-x-hidden dark:bg-primary-color-light`}
		>
      {/* CASE STUDIES SECTION */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-3 md:pb-4 lg:pb-5 bg-black relative">
				<div className="container">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
							Real Sellers. <span className="text-[#4CAF50]">Real Results.</span>
						</h2>
						<h3 className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 max-w-4xl mx-auto">
              See the Real-World Examples of Amazon Sellers Like YOU Turn Around
              Their Underperforming Amazon Ads.
						</h3>
            <p className="text-base md:text-lg text-white/70 mb-4 max-w-4xl mx-auto">
								You're not alone if your Amazon ads aren't delivering the results you expected. In fact, it's a common struggle for many sellers.
							</p>
            <p className="text-base md:text-lg text-white/70 mb-6 max-w-4xl mx-auto">
								But here's the good news: Underperforming ads don't have to be your reality. See the real-world examples of how we've helped Amazon sellers like you transform their ad campaigns & get profit generating results.
							</p>
          </div>

          {/* Slider */}
          <div className="relative flex justify-center items-center overflow-visible">
            <button
              onClick={prevSlide}
              className="absolute -left-4 md:-left-12 lg:-left-16 text-white text-4xl z-20 hover:text-[#4CAF50] transition"
              aria-label="Previous"
            >
              ‹
            </button>

            <div
              className="flex justify-center items-center h-[850px] md:h-[900px] w-full relative"
              style={{ perspective: "1400px" }} // slightly deeper perspective
            >
              {caseStudies.map((item, index) => {
                const distance =
                  (index - activeIndex + caseStudies.length) % caseStudies.length;
                const isActive = distance === 0;
                const leftCard = distance === caseStudies.length - 1;
                const rightCard = distance === 1;

                let transform = "scale(0.8)";
                let opacity = 0.45;
                let zIndex = 0;

                if (isActive) {
                  transform = "translateY(0) scale(1)";
                  opacity = 1;
                  zIndex = 30;
                } else if (leftCard) {
                  transform = `translateX(-${SIDE_OFFSET_X}px) rotateY(${ROT_DEG}deg) scale(0.9)`;
                  opacity = 0.7;
                  zIndex = 20;
                } else if (rightCard) {
                  transform = `translateX(${SIDE_OFFSET_X}px) rotateY(-${ROT_DEG}deg) scale(0.9)`;
                  opacity = 0.7;
                  zIndex = 20;
                }

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity, zIndex, transform }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute cursor-pointer"
                    style={{
                      width: isActive ? ACTIVE_W : SIDE_W,
                      height: isActive ? ACTIVE_H : SIDE_H,
                    }}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.75)]">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow">
                          {item.title}
                        </h3>
						</div>
					</div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="absolute -right-4 md:-right-12 lg:-right-16 text-white text-4xl z-20 hover:text-[#4CAF50] transition"
              aria-label="Next"
            >
              ›
            </button>
            
            {/* CTA Button */}
            <button
              className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-30"
            >
              Let's make money
            </button>
          </div>
				</div>
			</section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#4CAF50]">
				<div className="container">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
							Don't Just Take Our Word for It. <span className="text-white">Hear It Straight from the Sellers.</span>
						</h2>
					</div>
					
          {/* Video Testimonials Grid - using BlogCard5 design */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {videoTestimonials?.length
              ? videoTestimonials?.map((testimonial, idx) => (
                  <div key={testimonial.id} className="h-full">
                    <div className="h-full [&>div]:h-full [&>div>div]:h-full">
                      <BlogCard5 blog={testimonial} idx={idx} badgeText="Video" />
                    </div>
                  </div>
                ))
              : ""}
          </div>
				</div>
			</section>
		</div>
	);
};

export default Brands2;
