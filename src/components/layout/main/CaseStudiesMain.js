"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const getCaseStudies = () => [
  {
    id: 1,
    header: {
      title: "A Compelling Turnaround: From Stagnation to Momentum",
      description:
        "Want a blueprint for turning an under-performing Amazon brand into a runaway success? Read on to see how a natural-protein-bar maker overcame fierce competition, poor visibility, and soaring ad costs — and emerged stronger than ever. This journey illustrates how clear strategy and disciplined execution can make numbers soar.",
    },
    after: {
      metrics: {
        revenue: { before: 50000, after: 150000 },
        acos: { before: 35, after: 22 },
        tacos: { before: 18, after: 12 },
      },
    },
    color: "pink",
  },
  {
    id: 2,
    header: {
      title: "Turning the Tide for an Eco-Cleaning Brand: A Fresh Start on Amazon",
      description:
        "Looking for inspiration on reviving a stalled Amazon presence? See how a company that sells biodegradable cleaning sprays escaped lacklustre sales, tamed its ad spend and charted a new path to growth. This story proves that smart tactics and consistent refinements can make a struggling brand thrive.",
    },
    after: {
      metrics: {
        revenue: { before: 75000, after: 225000 },
        acos: { before: 40, after: 28 },
        tacos: { before: 20, after: 14 },
      },
    },
    color: "orange",
  },
  {
    id: 3,
    header: {
      title: "Brewing Success for a Specialty Coffee Brand: From Low Sales to Roaring Hot",
      description:
        "Ever wonder how a small coffee brand can rise above the noise on Amazon? This story chronicles how a roaster of artisan beans moved from stagnation to explosive growth. With clever adjustments and relentless optimisation, they turned sips into a thriving business.",
    },
    after: {
      metrics: {
        revenue: { before: 100000, after: 350000 },
        acos: { before: 32, after: 24 },
        tacos: { before: 16, after: 10 },
      },
    },
    color: "cyan",
  },
  {
    id: 4,
    header: {
      title: "Rescuing a Plant-Based Pet Food Brand: Creating a Feeding Frenzy on Amazon",
      description:
        "Need proof that a stagnant Amazon business can roar back to life? Here’s how a company making plant-based pet food escaped supply-chain woes and runaway ad costs to achieve spectacular growth. This tale shows that with the right approach, even underdogs can dominate their niche.",
    },
    after: {
      metrics: {
        revenue: { before: 30000, after: 120000 },
        acos: { before: 45, after: 30 },
        tacos: { before: 22, after: 15 },
      },
    },
    color: "pink",
  },
  {
    id: 5,
    header: {
      title: "Revitalising an Artisan Skincare Brand: From Slow Sales to Soaring Success",
      description:
        "Curious how a niche beauty label can shine on Amazon’s crowded shelves? This case chronicles how a maker of small-batch moisturisers and soaps transformed its performance. With inventive solutions and disciplined spending, the brand went from obscurity to becoming a sought-after name.",
    },
    after: {
      metrics: {
        revenue: { before: 55000, after: 200000 },
        acos: { before: 38, after: 24 },
        tacos: { before: 19, after: 11 },
      },
    },
    color: "purple",
  },
];

const testimonials = [
  {
    id: 1,
    achievement: "Monthly Sales Tripled",
    quote:
      "Our monthly sales tripled after Skipper took over. Their brand management and creative strategy changed everything.",
    authorName: "Olivia Grant",
    authorTitle: "Founder, LumaNest Home",
    image: "/img/testimonials/user/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    achievement: "Six-Figure Breakthrough",
    quote:
      "We went from flat sales to six figures in under 4 months. Skipper’s ad control and visuals did the magic.",
    authorName: "Ryan Mitchell",
    authorTitle: "Co-Founder, PetVibe Co.",
    image: "/img/testimonials/user/2.jpg",
    rating: 5,
  },
  {
    id: 3,
    achievement: "6x Revenue Climb",
    quote:
      "From $20K to $120K in 6 months — and I barely touched Seller Central. Skipper handled it all.",
    authorName: "Sarah Collins",
    authorTitle: "Owner, ZenCraft Studio",
    image: "/img/testimonials/user/3.jpg",
    rating: 5,
  },
  {
    id: 4,
    achievement: "Rankings Locked In",
    quote:
      "Our listings now rank high and stay there. Revenue up 5x since partnering with Skipper — can’t ask for better.",
    authorName: "Ethan Cole",
    authorTitle: "Director, Orbit Office Supplies",
    image: "/img/testimonials/user/4.jpg",
    rating: 5,
  },
  {
    id: 5,
    achievement: "ACoS Slashed, Sales Surged",
    quote:
      "They rebuilt our storefront and listings. Within weeks, our ACoS dropped and sales crossed $200K.",
    authorName: "Laura Bennett",
    authorTitle: "COO, EcoEase Living",
    image: "/img/testimonials/user/testmonial-7-thumb.jpg",
    rating: 5,
  },
  {
    id: 6,
    achievement: "Consistent Six Figures",
    quote:
      "We used to struggle breaking $50K/month. Now it’s consistent six-figure revenue — thanks to their creative direction and strategy.",
    authorName: "Daniel Ruiz",
    authorTitle: "Founder, FetchMate Pets",
    image: "/img/testimonials/user/h5-test-1.png",
    rating: 5,
  },
  {
    id: 7,
    achievement: "Brand Reborn",
    quote:
      "After the rebranding, everything clicked — our visuals, ads, and growth. Sales jumped 4x in just one quarter.",
    authorName: "Emily James",
    authorTitle: "CEO, ModernBake Co.",
    image: "/img/testimonials/user/h5-test-2.png",
    rating: 5,
  },
  {
    id: 8,
    achievement: "A+ Content Wins",
    quote:
      "Our fitness line exploded after their A+ content revamp. Ads are leaner, profits are cleaner, sales are booming.",
    authorName: "Adam Lee",
    authorTitle: "Co-Founder, FitVerse Gear",
    image: "/img/testimonials/user/h8-test-1.png",
    rating: 5,
  },
  {
    id: 9,
    achievement: "Catalog Turnaround",
    quote:
      "Skipper turned our slow-moving catalog into a bestseller lineup. We’ve hit record months back-to-back.",
    authorName: "Hannah Kim",
    authorTitle: "Creative Director, HomeFlow Decor",
    image: "/img/testimonials/user/h8-test-2.png",
    rating: 5,
  },
  {
    id: 10,
    achievement: "Premium Brand Lift",
    quote:
      "We crossed $300K/month after their team overhauled our listings. Brand feels premium, and it finally pays off.",
    authorName: "Jake Wilson",
    authorTitle: "Owner, PawJoy Supplies",
    image: "/img/testimonials/user/h10-test.png",
    rating: 5,
  },
];

const successStories = [
  {
    id: 1,
    clientName: "Sarah Martinez",
    company: "TechGear Solutions",
    achievement: "10x ROAS in 60 Days",
    videoUrl: "https://www.youtube.com/embed/fgdcjsg0n6I",
    thumbnail: "/img/testimonials/user/1.jpg",
    metric: "50% Cost Reduction",
    industry: "Electronics",
  },
  {
    id: 2,
    clientName: "David Chen",
    company: "Home Essentials Plus",
    achievement: "300% Revenue Growth",
    videoUrl: "https://www.youtube.com/embed/5U66ATCyg4I",
    thumbnail: "/img/testimonials/user/2.jpg",
    metric: "45% ACoS Improvement",
    industry: "Home & Kitchen",
  },
  {
    id: 3,
    clientName: "Emily Rodriguez",
    company: "Fitness Pro Gear",
    achievement: "5x Ad Performance",
    videoUrl: "https://www.youtube.com/embed/fgdcjsg0n6I",
    thumbnail: "/img/testimonials/user/3.jpg",
    metric: "60% Lower CPC",
    industry: "Health & Fitness",
  },
  {
    id: 4,
    clientName: "Michael Thompson",
    company: "BeautyCare Co",
    achievement: "8x Return on Investment",
    videoUrl: "https://www.youtube.com/embed/5U66ATCyg4I?si=DXIVm5jJDIYOACaA",
    thumbnail: "/img/testimonials/user/4.jpg",
    metric: "35% Sales Increase",
    industry: "Beauty & Personal Care",
  },
];

const faqs = [
  {
    question: "What is Amazon Skipper?",
    answer:
      "Amazon Skipper is an eCommerce growth agency helping Amazon sellers scale with clarity and control. Since 2018, we’ve focused on one goal — bringing sellers peace of mind while their brands grow steadily across Amazon, Shopify, and TikTok Shop.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We help brands with complete Amazon growth — from product launch and PPC management to listing optimization, strategy, and expansion. In short: everything it takes to grow your brand without burning out.",
  },
  {
    question: "Is everything handled in-house?",
    answer:
      "Yes — our specialists handle PPC, listings, creative, and analytics internally. That’s how we maintain consistent quality and strategy alignment across your entire account.",
  },
  {
    question: "Can you guarantee results?",
    answer:
      "We guarantee effort, expertise, and a proven process. If specific targets aren’t met under a results-based partnership, our refund or adjustment policy kicks in — it’s part of our risk-reversal promise.",
  },
  {
    question: "How long does it take to see results after working with Amazon Skipper?",
    answer:
      "It depends on your product stage and category. Most brands start seeing measurable improvements — in spend efficiency, sessions, or sales — within the first 4–8 weeks of structured management.",
  },
  {
    question: "Do you manage creatives too (images, videos, A+ content)?",
    answer:
      "Yes, we do. Our creative team designs optimized listing visuals, A+ modules, and short-form brand content that align with your positioning and conversion goals.",
  },
  {
    question: "What makes you different from other Amazon agencies?",
    answer:
      "We don’t just manage ads — we manage peace of mind. Our approach blends performance with structure, ensuring you scale profitably without the chaos that usually comes with “growth.”",
  },
  {
    question: "What’s included in your Brand Audit Call?",
    answer:
      "A 15–20 minute overview of your current setup — PPC structure, listings, and performance gaps. You’ll leave with a clear picture of what’s blocking your profit and what we’d fix first.",
  },
];

const CaseStudyCard = ({ study, index }) => {
  const { header, color } = study;

  const colorStyles = {
    pink: {
      bg: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/20",
      border: "border-pink-200 dark:border-pink-800/30",
      accent: "text-pink-600 dark:text-pink-400",
      highlight: "bg-pink-500/10 border-pink-300 dark:border-pink-700",
      graph: "bg-pink-100 dark:bg-pink-900/20",
      barAccent: "bg-pink-500",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/20",
      border: "border-orange-200 dark:border-orange-800/30",
      accent: "text-orange-600 dark:text-orange-400",
      highlight: "bg-orange-500/10 border-orange-300 dark:border-orange-700",
      graph: "bg-orange-100 dark:bg-orange-900/20",
      barAccent: "bg-orange-500",
    },
    cyan: {
      bg: "bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950/30 dark:to-blue-900/20",
      border: "border-cyan-200 dark:border-cyan-800/30",
      accent: "text-cyan-600 dark:text-cyan-400",
      highlight: "bg-cyan-500/10 border-cyan-300 dark:border-cyan-700",
      graph: "bg-cyan-100 dark:bg-cyan-900/20",
      barAccent: "bg-cyan-500",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-900/20",
      border: "border-purple-200 dark:border-purple-800/30",
      accent: "text-purple-600 dark:text-purple-400",
      highlight: "bg-purple-500/10 border-purple-300 dark:border-purple-700",
      graph: "bg-purple-100 dark:bg-purple-900/20",
      barAccent: "bg-purple-500",
    },
  };

  const styles = colorStyles[color];
  const isEven = index % 2 === 0;

	return (
		<Link
			href={`/case-studies/${study.id}`}
      className={`group relative block h-full overflow-hidden rounded-3xl border ${styles.border} ${styles.bg} p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_-60px_rgba(15,23,42,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60`}
    >
      <div className="flex h-full flex-col justify-center">
        {/* Content Section */}
        <div className="flex h-full flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
						</div>

          <h3 className="text-3xl lg:text-4xl font-black leading-tight text-[#101828] dark:text-white mb-4">
							{header?.title}
						</h3>

          <p className="text-base text-[#475467] dark:text-gray-300 mb-8 leading-relaxed">
            {header?.description}
          </p>

          <div className="mt-auto flex items-center gap-3 -translate-y-2 sm:-translate-y-3">
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full border ${styles.highlight} transition-all duration-500 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:shadow-xl group-focus-visible:-translate-y-1.5 group-focus-visible:translate-x-1.5`}
              aria-hidden="true"
            >
              <i className={`fa-regular fa-arrow-right text-xl transition-transform duration-500 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 ${styles.accent}`}></i>
            </span>
          </div>

					</div>

        {/* Dashboard Mockup - Removed for now, will be replaced with real pictures later */}
			</div>
		</Link>
	);
};

const CaseStudiesMain = () => {
	const caseStudies = useMemo(() => getCaseStudies(), []);
  const [selectedVideo, setSelectedVideo] = useState(successStories[0]?.id ?? null);
  const [activeFaq, setActiveFaq] = useState(0);

	return (
    <main className="min-h-screen bg-black overflow-hidden">
      <section className="relative overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -top-24 -left-16 h-96 w-96 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
				</div>

        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-[30px] bg-black px-6 py-20 sm:px-10 lg:px-16 mb-20 text-center">
            <div className="absolute inset-0 opacity-35 pointer-events-none">
              <div className="absolute top-1/3 left-[22%] h-64 w-64 rounded-full bg-[#22C55E]/40 blur-[100px]"></div>
              <div className="absolute bottom-1/4 right-[18%] h-56 w-56 rounded-full bg-[#22C55E]/25 blur-[90px]"></div>
              <div className="absolute top-[18%] right-[30%] h-52 w-52 rounded-full bg-[#22d3ee]/20 blur-[95px]"></div>
              <div className="absolute bottom-[12%] left-[18%] h-44 w-44 rounded-full bg-[#15803D]/25 blur-[80px]"></div>
            </div>
            <div className="hidden sm:block">
              {[
                { size: 30, x: "right-[18%]", y: "-top-4", anim: "floatSlow 9s", opacity: "opacity-90" },
                { size: 26, x: "left-[12%]", y: "top-[48%]", anim: "floatMedium 7s", opacity: "opacity-70" },
                { size: 24, x: "left-[6%]", y: "top-[32%]", anim: "floatFast 6s", opacity: "opacity-65" },
                { size: 26, x: "right-[30%]", y: "bottom-8", anim: "floatFast 5s", opacity: "opacity-75" },
                { size: 24, x: "left-[26%]", y: "-bottom-6", anim: "floatMedium 8s", opacity: "opacity-60" },
                { size: 22, x: "left-[32%]", y: "top-[12%]", anim: "floatMedium 9s", opacity: "opacity-75" },
                { size: 21, x: "left-[4%]", y: "top-[18%]", anim: "floatFast 5.5s", opacity: "opacity-55" },
                { size: 21, x: "left-[20%]", y: "top-[65%]", anim: "floatMedium 7.5s", opacity: "opacity-60" },
                { size: 20, x: "left-[8%]", y: "bottom-[22%]", anim: "floatSlow 8.5s", opacity: "opacity-65" },
                { size: 22, x: "right-[8%]", y: "top-[25%]", anim: "floatSlow 10s", opacity: "opacity-65" },
                { size: 20, x: "left-[28%]", y: "top-[10%]", anim: "floatFast 6s", opacity: "opacity-80" },
                { size: 20, x: "right-[15%]", y: "bottom-[18%]", anim: "floatMedium 6.5s", opacity: "opacity-60" },
                { size: 22, x: "left-[10%]", y: "top-[5%]", anim: "floatFast 6.5s", opacity: "opacity-55" },
                { size: 19, x: "left-[18%]", y: "top-[38%]", anim: "floatSlow 7.5s", opacity: "opacity-65" },
                { size: 18, x: "left-[34%]", y: "top-[45%]", anim: "floatMedium 6.8s", opacity: "opacity-75" },
                { size: 19, x: "left-[14%]", y: "bottom-[30%]", anim: "floatFast 5.8s", opacity: "opacity-70" },
                { size: 18, x: "left-[30%]", y: "bottom-[12%]", anim: "floatMedium 8.2s", opacity: "opacity-60" },
                { size: 21, x: "right-[12%]", y: "top-[12%]", anim: "floatSlow 7.8s", opacity: "opacity-70" },
                { size: 19, x: "right-[22%]", y: "top-[38%]", anim: "floatFast 6.1s", opacity: "opacity-70" },
                { size: 18, x: "right-[10%]", y: "top-[55%]", anim: "floatMedium 7.7s", opacity: "opacity-65" },
                { size: 18, x: "right-[26%]", y: "bottom-[26%]", anim: "floatFast 6.9s", opacity: "opacity-60" },
                { size: 20, x: "right-[5%]", y: "bottom-[10%]", anim: "floatMedium 8.6s", opacity: "opacity-55" },
              ].map(({ size, x, y, anim, opacity }, idx) => (
                <Image
                  key={idx}
                  src="/img/shapes/5.jpg"
                  alt="Decorative accent"
                  width={size}
                  height={size}
                  className={`pointer-events-none absolute ${y} ${x} ${opacity} drop-shadow-[0_18px_40px_rgba(34,197,94,0.22)]`}
                  style={{ animation: `${anim} ease-in-out infinite` }}
                  priority
                />
              ))}
				</div>
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-tight">
							Amazon growth stories engineered for predictable revenue
						</h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Real brands. Real numbers. Explore how we turn chaotic ad accounts into disciplined
                profit engines — and what a calm, scaling Amazon brand actually looks like.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <ButtonPrimary type={2} isIcon={true} url="/#contact">
                  Fix My ACoS Now
                </ButtonPrimary>
                <Link
                  href="#case-studies-grid"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/75 transition hover:border-white hover:text-white"
                >
                  See Our Results
                </Link>
              </div>
					</div>
          </section>
          <style jsx>{`
            @keyframes floatSlow {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0px); }
            }
            @keyframes floatMedium {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0px); }
            }
            @keyframes floatFast {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-16px); }
              100% { transform: translateY(0px); }
            }
          `}</style>

          {/* Case Studies Grid */}
          <div className="space-y-12 mb-20">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
						</div>

          {/* Testimonials Section */}
          <section id="case-studies-testimonials" className="relative py-24">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-[#0f172a]/20 to-transparent blur-3xl opacity-60"></div>
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <div className="relative overflow-hidden rounded-[30px] border border-[#4CAF50]/30 bg-gradient-to-br from-black via-[#121212] to-[#4CAF50] px-8 py-12 sm:px-12 md:px-16 md:py-14 shadow-[0_40px_120px_-60px_rgba(34,197,94,0.55)]">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 h-56 w-56 rounded-full bg-[#4CAF50] blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-[#0EA5E9] blur-3xl"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center gap-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Curious what actually drives our 6-month turnarounds?
                    </h3>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                      Take a behind-the-scenes look at our approach and see how calm growth actually gets engineered.
                    </p>
                    <div className="flex justify-center">
                      <ButtonPrimary type={2} isIcon={true} url="/#contact">
                        Show Me How It Works
                      </ButtonPrimary>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mb-16">
                <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                  Voices From Clients
                </span>
                <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
                  Testimonials
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
                  Real operators sharing the wins we engineered together — the calm after the chaos of runaway ad spend.
                </p>
              </div>

              <div className="relative px-8 sm:px-12 lg:px-0">
                <button
                  className="testimonials-slider-prev absolute left-0 lg:left-[-64px] top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  aria-label="Previous testimonial"
                >
                  <i className="fa-regular fa-chevron-left"></i>
                </button>
                <button
                  className="testimonials-slider-next absolute right-0 lg:right-[-64px] top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  aria-label="Next testimonial"
                >
                  <i className="fa-regular fa-chevron-right"></i>
                </button>

                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".testimonials-slider-prev",
                    nextEl: ".testimonials-slider-next",
                  }}
                  modules={[Navigation, Autoplay]}
                  className="testimonials-slider"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-8">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-white/10 shadow-[0_20px_45px_-30px_rgba(59,130,246,0.6)]">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.authorName}
                              width={160}
                              height={160}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                          {testimonial.achievement}
                        </h3>

                        <blockquote className="text-lg sm:text-xl text-white/70 italic mb-8 max-w-3xl leading-relaxed">
                          “{testimonial.quote}”
                        </blockquote>

                        <p className="text-xl sm:text-2xl font-black text-white mb-2">
                          {testimonial.authorName}
                        </p>
                        <p className="text-base text-white/60 mb-4">
                          {testimonial.authorTitle}
                        </p>

                        <div className="flex gap-1 justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star text-amber-400 text-lg"></i>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>

          {/* Video Testimonials Section */}
          <section id="case-studies-video-testimonials" className="relative py-28">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/30 via-transparent to-[#0f172a]/40"></div>
              <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                  Video Proof
                </span>
                <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
                  Watch Their Amazon Turnarounds
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
                  Straight from the founders and operators who partnered with us to steady their ad spend and unlock predictable revenue.
                </p>
              </div>

              {successStories[0] && (
                <div className="mb-14">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_30px_90px_-45px_rgba(15,23,42,0.75)] group">
                    <div className="relative aspect-video">
                      {selectedVideo === successStories[0].id ? (
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={successStories[0].videoUrl}
                          title={successStories[0].clientName}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div
                          onClick={() => setSelectedVideo(successStories[0].id)}
                          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 transition-all duration-300 hover:bg-black/30"
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center opacity-90"
                            style={{
                              backgroundImage: `url(https://img.youtube.com/vi/${successStories[0].videoUrl.split("/embed/")[1]?.split("?")[0]}/maxresdefault.jpg)`,
                            }}
                          ></div>
                          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#4CAF50] shadow-2xl transition-all duration-300 hover:scale-105">
                            <i className="fas fa-play text-2xl ml-1"></i>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            {successStories[0].clientName}
                          </h3>
                          <p className="text-white/70">{successStories[0].company}</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <span className="rounded-full bg-[#4CAF50]/20 px-4 py-2 text-sm font-semibold text-[#4CAF50]">
                            {successStories[0].achievement}
                          </span>
                          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                            {successStories[0].metric}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {successStories.slice(1).map((story) => (
                  <div
                    key={story.id}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4CAF50]/40 hover:shadow-[0_28px_70px_-40px_rgba(34,197,94,0.55)]"
                  >
                    <div className="relative aspect-video">
                      {selectedVideo === story.id ? (
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={story.videoUrl}
                          title={story.clientName}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div
                          onClick={() => setSelectedVideo(story.id)}
                          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 transition-all duration-300 hover:bg-black/30"
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center opacity-90"
                            style={{
                              backgroundImage: `url(https://img.youtube.com/vi/${story.videoUrl.split("/embed/")[1]?.split("?")[0]}/maxresdefault.jpg)`,
                            }}
                          ></div>
                          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#4CAF50] shadow-xl transition-all duration-300 hover:scale-110">
                            <i className="fas fa-play text-xl ml-1"></i>
                          </div>
                          <div className="absolute left-4 top-4 rounded-full bg-[#4CAF50]/90 px-3 py-1 text-xs font-semibold text-white">
                            {story.industry}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-3 bg-gradient-to-t from-black/85 via-black/50 to-black/20 p-6">
                      <h4 className="text-xl font-bold text-white">{story.clientName}</h4>
                      <p className="text-sm text-white/60">{story.company}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#4CAF50]/20 px-3 py-1 text-xs font-semibold text-[#4CAF50]">
                          {story.achievement}
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                          {story.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                  Have Questions?
                </span>
                <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
                  Case Study FAQs
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
                  The answers Amazon operators ask us most when they’re sizing up whether our process is the calm, predictable growth engine they’ve been missing.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="rounded-[26px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
                  <ul className="space-y-6">
                    {faqs.map(({ question, answer }, idx) => {
                      const isActive = activeFaq === idx;
                      return (
                        <li
                          key={question}
                          className="border-b border-white/10 last:border-none pb-6 last:pb-0"
                        >
                          <button
                            type="button"
                            onClick={() => setActiveFaq(prev => (prev === idx ? -1 : idx))}
                            aria-expanded={isActive}
                            className="flex w-full items-start justify-between gap-4 text-left"
                          >
                            <div>
                              <span className="mb-3 inline-flex items-center rounded-full bg-[#4CAF50]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
                                Q{idx + 1}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-semibold leading-[1.35] text-white">
                                {question}
                              </h3>
                            </div>
                            <div
                              className={`flex-shrink-0 rounded-full border border-[#4CAF50]/40 text-[#4CAF50] w-10 h-10 inline-flex items-center justify-center transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}
                            >
                              <i className="fa-regular fa-plus text-base"></i>
                            </div>
                          </button>
                          <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? "mt-4 max-h-[420px]" : "max-h-0"}`}
                          >
                            <p className="text-base md:text-lg leading-relaxed text-white/75 pr-2">
                              {answer}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative mt-24 overflow-hidden rounded-[40px] border border-[#4CAF50]/30 bg-gradient-to-br from-black via-[#121212] to-[#4CAF50] px-6 py-16 sm:px-10 lg:px-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#4CAF50] blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#4CAF50] blur-3xl"></div>
								</div>

            <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
              <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Fix My ACoS Now
              </h2>
              <p className="text-lg text-white/80 sm:text-xl">
                If your ad spend feels like a black hole, this is your turning point. Let’s rebuild your numbers with structure.
              </p>

              <ButtonPrimary type={2} isIcon={true} url="/#contact">
                Fix My ACoS Now
              </ButtonPrimary>
									</div>
          </section>

				</div>
			</section>
		</main>
	);
};

export default CaseStudiesMain;
