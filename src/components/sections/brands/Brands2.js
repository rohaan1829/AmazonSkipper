"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard5 from "@/components/shared/cards/BlogCard5";

const caseStudies = [
  { title: "A Compelling Turnaround: From Stagnation to Momentum", img: "/img/portfolio/pppc.png" },
  { title: "Turning the Tide for an Eco‑Cleaning Brand: A Fresh Start on Amazon", img: "/img/portfolio/spend.png" },
  { title: "Brewing Success for a Specialty Coffee Brand: From Low Sales to Roaring Hot", img: "/img/portfolio/brand.png" },
  { title: "Rescuing a Plant‑Based Pet Food Brand: Creating a Feeding Frenzy on Amazon", img: "/img/portfolio/product.png" },
];

const videoTestimonials = [
  { id: "testimonial-1", videoId: "5U66ATCyg4I", title: "Mark's Success Story", category: "Video" },
  { id: "testimonial-2", videoId: "fgdcjsg0n6I", title: "Annie's Success Story", category: "Video" },
  { id: "testimonial-3", videoId: "5U66ATCyg4I", title: "Mark's Success Story", category: "Video" },
];

const Brands2 = ({ type }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

	const nextSlide = () => setActiveIndex((p) => (p + 1) % caseStudies.length);
	const prevSlide = () => setActiveIndex((p) => (p - 1 + caseStudies.length) % caseStudies.length);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((p) => (p + 1) % caseStudies.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const textVariants = {
		hidden: { opacity: 0, y: -40 },
		visible: { opacity: 1, y: 0 },
	};

	const fadeUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	};

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
      <section className="pt-16 md:pt-20 lg:pt-24 pb-3 md:pb-4 lg:pb-5 bg-white dark:bg-black relative">
				<div className="container">
					<motion.div
						className="text-center mb-12 md:mb-16"
						variants={textVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.6, staggerChildren: 0.15 }}
					>
						<motion.h2
							className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-4"
							variants={textVariants}
						>
							Real Sellers. <span className="text-[#4CAF50]">Real Results.</span>
						</motion.h2>
						<motion.h3
							className="text-lg md:text-xl lg:text-2xl text-black/80 dark:text-white/80 mb-6 max-w-4xl mx-auto"
							variants={textVariants}
						>
							See the Real-World Examples of Amazon Sellers Like YOU Turn Around Their Underperforming Amazon Ads.
						</motion.h3>
						<motion.p
							className="text-base md:text-lg text-black/70 dark:text-white/70 mb-4 max-w-4xl mx-auto"
							variants={textVariants}
						>
							You're not alone if your Amazon ads aren't delivering the results you expected. In fact, it's a common struggle for many sellers.
						</motion.p>
						<motion.p
							className="text-base md:text-lg text-black/70 dark:text-white/70 mb-6 max-w-4xl mx-auto"
							variants={textVariants}
						>
							But here's the good news: Underperforming ads don't have to be your reality. See the real-world examples of how we've helped Amazon sellers like you transform their ad campaigns &amp; get profit generating results.
						</motion.p>
					</motion.div>

          {/* Slider */}
          <div className="relative flex justify-center items-center overflow-visible">
            <button
              onClick={prevSlide}
              className="absolute -left-4 md:-left-12 lg:-left-16 text-black dark:text-white text-4xl z-20 hover:text-[#4CAF50] transition"
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
                    <Link href="/case-studies" className="group block h-full">
                      <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.75)] h-full">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 lg:p-7">
                          <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow">
                            {item.title}
                          </h3>
                          <div className="mt-4 flex items-center gap-3 text-white/70">
                            <span className="text-sm md:text-base">
                              View full case study
                            </span>
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:bg-[#22C55E] group-hover:text-black">
                              <i className="fa-regular fa-arrow-up-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="absolute -right-4 md:-right-12 lg:-right-16 text-black dark:text-white text-4xl z-20 hover:text-[#4CAF50] transition"
              aria-label="Next"
            >
              ›
            </button>
          </div>
          <div className="mt-6 md:mt-10">
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#22C55E]/40 px-8 py-10 sm:px-10 md:px-14 md:py-12 shadow-[0_30px_90px_-45px_rgba(34,197,94,0.6)]">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-[#22C55E] blur-[130px]" />
                <div className="absolute bottom-[-25%] right-1/4 h-64 w-64 rounded-full bg-[#0EA5E9] blur-[150px]" />
              </div>
              <div className="relative z-10 flex flex-col gap-6 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-3xl">
                  <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
                    Our process has helped dozens of sellers go from chaos to control - here’s how it actually works.
                  </p>
                </div>
                <Link href="/case-studies">
                  <button className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#22C55E] hover:text-black">
                    See the Skipper Framework
                  </button>
                </Link>
              </div>
            </div>
          </div>
				</div>
			</section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-[#4CAF50] to-black">
				<div className="container">
					<motion.div
						className="text-center mb-12 md:mb-16"
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.6 }}
					>
						<motion.h2
							className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
							variants={fadeUpVariants}
						>
							Don't Just Take Our Word for It. <span className="text-white">Hear It Straight from the Sellers.</span>
						</motion.h2>
					</motion.div>
					
          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {videoTestimonials?.length
              ? videoTestimonials?.map((testimonial, idx) => {
                  const thumbnailUrl = `https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`;
                  const isPlaying = playingVideo === testimonial.id;
                  
                  return (
                    <div key={testimonial.id} className="h-full">
                      <div className="h-full p-15px bg-white dark:bg-black-color border border-white dark:border-border-color-2 backdrop-blur-[40px] rounded-10px relative overflow-hidden group">
                        <div className="relative rounded-10px overflow-hidden mb-4">
                          {isPlaying ? (
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0`}
                              title={testimonial.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full aspect-video"
                            />
                          ) : (
                            <>
                              <img
                                src={thumbnailUrl}
                                alt={testimonial.title}
                                className="w-full aspect-video object-cover group-hover:scale-110 transition-all duration-500"
                              />
                              <div 
                                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300 cursor-pointer"
                                onClick={() => setPlayingVideo(testimonial.id)}
                              >
                                <button
                                  type="button"
                                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-white transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 group-hover:scale-110"
                                  aria-label="Play video"
                                >
                                  <i className="fa-solid fa-play text-[#4CAF50] text-base md:text-lg ml-1"></i>
                                </button>
                              </div>
                            </>
                          )}
                          <Link
                            href="#"
                            className="text-size-15 px-10px py-5px leading-1 text-white-color hover:text-white-color bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full absolute left-4 top-4 z-10"
                          >
                            {testimonial.category}
                          </Link>
                        </div>
                        <div className="p-15px">
                          <div className="w-full">
                            <div className="relative z-10">
                              <ul className="flex gap-4 items-center mb-4">
                                <li>
                                  <Link
                                    href="#"
                                    className="leading-1 text-white hover:text-white/80 capitalize"
                                  >
                                    {testimonial.category}
                                  </Link>
                                </li>
                              </ul>
                              <h4>
                                <Link
                                  href="#"
                                  className="text-white w-full text-size-22 lg:text-2xl font-semibold leading-1.4 lg:leading-1.4 uppercase tracking-0.02em inline duration-500 hover:opacity-80"
                                >
                                  {testimonial.title}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
				</div>
			</section>
      <section className="py-16 md:py-20 bg-black">
        <div className="container">
          <div className="relative overflow-hidden rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#14532d]/70 px-8 py-10 sm:px-12 md:px-16 md:py-14 shadow-[0_30px_90px_-40px_rgba(34,197,94,0.65)]">
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 bg-[#22C55E] blur-[140px]" />
              <div className="absolute bottom-[-30%] right-1/4 h-64 w-64 bg-[#0EA5E9] blur-[150px]" />
            </div>
            <div className="relative z-10 flex flex-col gap-6 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-2xl md:text-3xl font-semibold leading-tight text-white">
                  From ad chaos to clarity — see what happens when your strategy starts working for you, not against you.
                </p>
              </div>
              <Link href="/#contact">
                <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-[#22C55E] hover:text-black shadow-lg">
                  Unlock Predictable Growth
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
		</div>
	);
};

export default Brands2;
