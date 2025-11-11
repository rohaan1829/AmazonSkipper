"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

// --- Helpers
function useViewportDims() {
  const [vw, setVw] = useState(null);

  useEffect(() => {
    // SSR guard
    const update = () => setVw(window.innerWidth);
    update();

    let frame = null;
    const onResize = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("resize", onResize);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return vw;
}

function calcCarouselLayout(vw) {
  // Portrait card ratio ~ 810/465 ≈ 1.74
  const R = 1.74;

  if (!vw) {
    // Safe defaults for SSR / first render
    const ACTIVE_W = 340, SIDE_W = 290;
    return {
      ACTIVE_W,
      ACTIVE_H: Math.round(ACTIVE_W * R),
      SIDE_W,
      SIDE_H: Math.round(SIDE_W * R),
      SIDE_OFFSET_X: 280,
      ROT_DEG: 14,
      SHOW_SIDES: false,
    };
  }

  if (vw < 640) {
    // Mobile (sm-)
    const ACTIVE_W = Math.min(360, vw - 32);
    const SIDE_W = Math.round(ACTIVE_W * 0.9);
    return {
      ACTIVE_W,
      ACTIVE_H: Math.round(ACTIVE_W * R),
      SIDE_W,
      SIDE_H: Math.round(SIDE_W * R),
      SIDE_OFFSET_X: Math.min(ACTIVE_W * 0.95, 260),
      ROT_DEG: 10,
      SHOW_SIDES: false, // Single-card focus on mobile
    };
  } else if (vw < 1024) {
    // Tablet (md/lg)
    const ACTIVE_W = Math.min(420, vw - 160);
    const SIDE_W = Math.round(ACTIVE_W * 0.88);
    return {
      ACTIVE_W,
      ACTIVE_H: Math.round(ACTIVE_W * R),
      SIDE_W,
      SIDE_H: Math.round(SIDE_W * R),
      SIDE_OFFSET_X: Math.min(320, Math.round(ACTIVE_W * 0.9)),
      ROT_DEG: 14,
      SHOW_SIDES: true,
    };
  }

  // Desktop+
  const ACTIVE_W = 465; // original desktop sizes
  const SIDE_W = 390;
  return {
    ACTIVE_W,
    ACTIVE_H: Math.round(ACTIVE_W * R),
    SIDE_W,
    SIDE_H: Math.round(SIDE_W * R),
    SIDE_OFFSET_X: 435,
    ROT_DEG: 20,
    SHOW_SIDES: true,
  };
}

const Brands2 = ({ type }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const vw = useViewportDims();
  const layout = useMemo(() => calcCarouselLayout(vw), [vw]);
  const autoplayRef = useRef(null);

  const nextSlide = () => setActiveIndex((p) => (p + 1) % caseStudies.length);
  const prevSlide = () => setActiveIndex((p) => (p - 1 + caseStudies.length) % caseStudies.length);

  useEffect(() => {
    // Gentle auto-advance; pause if tab hidden
    const run = () => {
      if (document.hidden) return;
      setActiveIndex((p) => (p + 1) % caseStudies.length);
    };
    autoplayRef.current = window.setInterval(run, 5000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Compute a responsive container height to prevent layout shift
  const containerHeight = layout.ACTIVE_H + 40; // a little breathing room

  return (
    <div className={`${type == 2 ? "pt-60px md:pt-20 lg:pt-30" : ""} overflow-x-hidden dark:bg-primary-color-light`}>
      {/* CASE STUDIES SECTION */}
      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-2 sm:pb-3 md:pb-4 bg-white dark:bg-black relative">
        <div className="container">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-3"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, staggerChildren: 0.12 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-3 sm:mb-4"
              variants={textVariants}
            >
              Real Sellers. <span className="text-[#4CAF50]">Real Results.</span>
            </motion.h2>
            <motion.h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/80 dark:text-white/80 mb-4 sm:mb-6 max-w-4xl mx-auto px-2"
              variants={textVariants}
            >
              See the Real-World Examples of Amazon Sellers Like YOU Turn Around Their Underperforming Amazon Ads.
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-black/70 dark:text-white/70 mb-3 max-w-3xl mx-auto px-2"
              variants={textVariants}
            >
              You're not alone if your Amazon ads aren't delivering the results you expected. In fact, it's a common struggle for many sellers.
            </motion.p>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-black/70 dark:text-white/70 mb-4 sm:mb-6 max-w-3xl mx-auto px-2"
              variants={textVariants}
            >
              But here's the good news: Underperforming ads don't have to be your reality. See the real-world examples of how we've helped Amazon sellers like you transform their ad campaigns &amp; get profit generating results.
            </motion.p>
          </motion.div>

          {/* Slider */}
          <div className="relative flex justify-center items-center overflow-visible px-2 sm:px-4">
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:-left-4 md:-left-12 lg:-left-16 text-black dark:text-white text-3xl sm:text-4xl z-20 hover:text-[#4CAF50] transition rounded-full size-10 sm:size-12 inline-flex items-center justify-center bg-white/70 dark:bg-white/10 backdrop-blur border border-black/10 dark:border-white/10 shadow md:hover:scale-105"
              aria-label="Previous"
            >
              ‹
            </button>

            <div
              className="flex justify-center items-center w-full relative"
              style={{ perspective: vw && vw >= 640 ? "1400px" : "unset", height: containerHeight }}
            >
              {caseStudies.map((item, index) => {
                const distance = (index - activeIndex + caseStudies.length) % caseStudies.length;
                const isActive = distance === 0;
                const leftCard = distance === caseStudies.length - 1;
                const rightCard = distance === 1;

                let transform = "scale(0.9)";
                let opacity = 0.5;
                let zIndex = 0;

                if (isActive) {
                  transform = "translateY(0) scale(1)";
                  opacity = 1;
                  zIndex = 30;
                } else if (layout.SHOW_SIDES && leftCard) {
                  transform = `translateX(-${layout.SIDE_OFFSET_X}px) rotateY(${layout.ROT_DEG}deg) scale(0.94)`;
                  opacity = 0.78;
                  zIndex = 20;
                } else if (layout.SHOW_SIDES && rightCard) {
                  transform = `translateX(${layout.SIDE_OFFSET_X}px) rotateY(-${layout.ROT_DEG}deg) scale(0.94)`;
                  opacity = 0.78;
                  zIndex = 20;
                } else {
                  // Hide extra cards on mobile to keep it clean
                  opacity = vw && vw < 640 ? 0 : 0.3;
                }

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity, zIndex, transform }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute cursor-pointer will-change-transform"
                    style={{
                      width: isActive ? layout.ACTIVE_W : layout.SIDE_W,
                      height: isActive ? layout.ACTIVE_H : layout.SIDE_H,
                    }}
                  >
                    <Link href="/case-studies" className="group block h-full">
                      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.6)] h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-7">
                          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold drop-shadow">
                            {item.title}
                          </h3>
                          <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3 text-white/70">
                            <span className="text-xs sm:text-sm md:text-base">View full case study</span>
                            <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:bg-[#22C55E] group-hover:text-black">
                              <i className="fa-regular fa-arrow-up-right" />
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
              className="absolute right-2 sm:-right-4 md:-right-12 lg:-right-16 text-black dark:text-white text-3xl sm:text-4xl z-20 hover:text-[#4CAF50] transition rounded-full size-10 sm:size-12 inline-flex items-center justify-center bg-white/70 dark:bg-white/10 backdrop-blur border border-black/10 dark:border-white/10 shadow md:hover:scale-105"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* CTA Panel */}
          <div className="mt-6 sm:mt-8 md:mt-10 px-2">
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl sm:rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#22C55E]/40 px-5 sm:px-8 md:px-14 py-8 sm:py-10 md:py-12 shadow-[0_24px_70px_-40px_rgba(34,197,94,0.6)]">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute -top-24 left-1/3 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-[#22C55E] blur-[110px] sm:blur-[130px]" />
                <div className="absolute bottom-[-25%] right-1/4 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#0EA5E9] blur-[120px] sm:blur-[150px]" />
              </div>
              <div className="relative z-10 flex flex-col gap-4 sm:gap-6 text-center sm:flex-row sm:items-center sm:justify-center">
                <div className="max-w-3xl mx-auto">
                  <p className="text-white text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-center">
                    Our process has helped dozens of sellers go from chaos to control - here’s how it actually works.
                  </p>
                </div>
                <Link href="/contact" className="inline-flex justify-center">
                  <button className="inline-flex items-center justify-center rounded-full bg-black px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#22C55E] hover:text-black">
                    See the Skipper Framework
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-[#4CAF50] to-black">
        <div className="container">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-3"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={fadeUpVariants}
            >
              Don't Just Take Our Word for It. <span className="text-white">Hear It Straight from the Sellers.</span>
            </motion.h2>
          </motion.div>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch px-2">
            {videoTestimonials?.length
              ? videoTestimonials.map((testimonial) => {
                  const thumbnailUrl = `https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`;
                  const isPlaying = playingVideo === testimonial.id;
                  return (
                    <div key={testimonial.id} className="h-full">
                      <div className="h-full p-3 sm:p-[15px] bg-white dark:bg-black-color border border-white dark:border-border-color-2 backdrop-blur-[40px] rounded-[10px] relative overflow-hidden group">
                        <div className="relative rounded-[10px] overflow-hidden mb-3 sm:mb-4">
                          {isPlaying ? (
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0`}
                              title={testimonial.title}
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full aspect-video"
                            />
                          ) : (
                            <>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={thumbnailUrl}
                                alt={testimonial.title}
                                className="w-full aspect-video object-cover group-hover:scale-110 transition-all duration-500"
                                loading="lazy"
                              />
                              <button
                                type="button"
                                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300 cursor-pointer"
                                onClick={() => setPlayingVideo(testimonial.id)}
                                aria-label={`Play ${testimonial.title}`}
                              >
                                <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-white transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 group-hover:scale-110">
                                  <i className="fa-solid fa-play text-[#4CAF50] text-base md:text-lg ml-1" />
                                </span>
                              </button>
                            </>
                          )}
                          <Link
                            href="#"
                            className="text-[13px] sm:text-[15px] px-[10px] py-[5px] leading-[1] text-white-color hover:text-white-color bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full absolute left-3 sm:left-4 top-3 sm:top-4 z-10"
                          >
                            {testimonial.category}
                          </Link>
                        </div>
                        <div className="p-[10px] sm:p-[15px]">
                          <div className="w-full">
                            <div className="relative z-10">
                              <ul className="flex gap-3 sm:gap-4 items-center mb-2 sm:mb-4">
                                <li>
                                  <Link href="#" className="leading-[1] text-white hover:text-white/80 capitalize">
                                    {testimonial.category}
                                  </Link>
                                </li>
                              </ul>
                              <h4>
                                <Link
                                  href="#"
                                  className="text-white w-full text-lg sm:text-[22px] lg:text-2xl font-semibold leading-[1.35] uppercase tracking-[0.015em] sm:tracking-[0.02em] inline duration-500 hover:opacity-80"
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
              : null}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container px-3">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#14532d]/70 px-6 sm:px-10 md:px-16 py-8 sm:py-10 md:py-14 shadow-[0_24px_70px_-40px_rgba(34,197,94,0.65)]">
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute -top-24 left-1/2 h-44 w-44 sm:h-56 sm:w-56 -translate-x-1/2 bg-[#22C55E] blur-[110px] sm:blur-[140px]" />
              <div className="absolute bottom-[-30%] right-1/4 h-52 w-52 sm:h-64 sm:w-64 bg-[#0EA5E9] blur-[120px] sm:blur-[150px]" />
            </div>
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6 text-center sm:flex-row sm:items-center sm:justify-center">
              <div className="max-w-3xl mx-auto">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-white text-center">
                  From ad chaos to clarity - see what happens when your strategy starts working for you, not against you.
                </p>
              </div>
              <Link href="/contact" className="inline-flex justify-center">
                <button className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-black transition-all duration-300 hover:bg-[#22C55E] hover:text-black shadow-lg">
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
