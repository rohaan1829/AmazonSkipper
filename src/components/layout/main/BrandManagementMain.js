"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import BrandMarque from "@/components/sections/marquee/BrandMarque";

const BrandManagementMain = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [faqs, setFaqs] = useState([
    {
      question: "What does full-service brand management include?",
      answer: "Our brand management covers everything from Seller Central setup, listing optimization, A+ content creation, PPC advertising, inventory management, customer support, seasonal promotions, brand protection, and performance reporting. We handle the entire Amazon ecosystem so you can focus on your business."
    },
    {
      question: "How do you improve my product rankings on Amazon?",
      answer: "We use deep keyword research, competitor analysis, optimized listings with A+ content, and strategic storefront design to boost your organic rank. Combined with targeted advertising campaigns, we ensure your products get maximum visibility."
    },
    {
      question: "Can you help expand my brand to international Amazon marketplaces?",
      answer: "Yes, our team guides you into new Amazon regions and international marketplaces. We localize listings, manage cross-border logistics, and tailor campaigns so your brand succeeds wherever customers shop."
    },
    {
      question: "How do you protect my brand on Amazon?",
      answer: "We monitor for unauthorized sellers and counterfeit goods, assist with intellectual property enforcement, and take proactive action to maintain buy box control and protect your brand reputation."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "You receive regular insights on conversion rates, advertising cost of sale (ACoS), return rates, and other key metrics. Our reports come with actionable recommendations that evolve as the marketplace changes."
    }
  ]);

  const stats = [
    { value: 47, label: "Days to Results" },
    { value: 45, label: "Average Spend Reduction %" },
    { value: 500, label: "Successful Campaigns" },
    { value: 98, label: "Client Satisfaction %" }
  ];

  const successStories = [
    {
      id: 1,
      clientName: "Anne Martinez",
      company: "TechGear Solutions",
      achievement: "10x ROAS in 60 Days",
      videoUrl: "https://www.youtube.com/embed/fgdcjsg0n6I",
      thumbnail: "/img/testimonials/user/1.jpg",
      metric: "50% Cost Reduction",
      industry: "Electronics"
    },
    {
      id: 2,
      clientName: "Mark",
      company: "Home Essentials Plus",
      achievement: "300% Revenue Growth",
      videoUrl: "https://www.youtube.com/embed/5U66ATCyg4I",
      thumbnail: "/img/testimonials/user/mark.png",
      metric: "45% ACoS Improvement",
      industry: "Home & Kitchen"
    },
    {
      id: 3,
      clientName: "Emily Rodriguez",
      company: "Fitness Pro Gear",
      achievement: "5x Ad Performance",
      videoUrl: "",
      thumbnail: "/img/testimonials/user/emilyrodriguez.jpg",
      metric: "60% Lower CPC",
      industry: "Health & Fitness"
    },
    {
      id: 4,
      clientName: "Michael Thompson",
      company: "BeautyCare Co",
      achievement: "8x Return on Investment",
      videoUrl: "",
      thumbnail: "/img/testimonials/user/MichaelThompson.jpg",
      metric: "35% Sales Increase",
      industry: "Beauty & Personal Care"
    }
  ];

  const testimonials = [
    {
      id: 1,
      achievement: "Monthly Sales Tripled",
      quote:
        "Our monthly sales tripled after Skipper took over. Their brand management and creative strategy changed everything.",
      authorName: "Olivia Grant",
      authorTitle: "Founder, LumaNest Home",
      image: "/img/testimonials/user/olivia.jpg",
      rating: 5,
    },
    {
      id: 2,
      achievement: "Six-Figure Breakthrough",
      quote:
        "We went from flat sales to six figures in under 4 months. Skipper's ad control and visuals did the magic.",
      authorName: "Ryan Mitchell",
      authorTitle: "Co-Founder, PetVibe Co.",
      image: "/img/testimonials/user/ryan.jpg",
      rating: 5,
    },
    {
      id: 3,
      achievement: "6x Revenue Climb",
      quote:
        "From $20K to $120K in 6 months — and I barely touched Seller Central. Skipper handled it all.",
      authorName: "Anne Martinez",
      authorTitle: "Owner, ZenCraft Studio",
      image: "/img/testimonials/user/1.jpg",
      rating: 5,
    },
    {
      id: 4,
      achievement: "Rankings Locked In",
      quote:
        "Our listings now rank high and stay there. Revenue up 5x since partnering with Skipper — can't ask for better.",
      authorName: "Ethan Cole",
      authorTitle: "Director, Orbit Office Supplies",
      image: "/img/testimonials/user/uncle-g.jpg",
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
        "We used to struggle breaking $50K/month. Now it's consistent six-figure revenue — thanks to their creative direction and strategy.",
      authorName: "Daniel Ruiz",
      authorTitle: "Founder, FetchMate Pets",
      image: "/img/testimonials/user/daniel.jpg",
      rating: 5,
    },
    {
      id: 7,
      achievement: "Brand Reborn",
      quote:
        "After the rebranding, everything clicked — our visuals, ads, and growth. Sales jumped 4x in just one quarter.",
      authorName: "Emily James",
      authorTitle: "CEO, ModernBake Co.",
      image: "/img/testimonials/user/emily.jpg",
      rating: 5,
    },
    {
      id: 8,
      achievement: "A+ Content Wins",
      quote:
        "Our fitness line exploded after their A+ content revamp. Ads are leaner, profits are cleaner, sales are booming.",
      authorName: "Adam Lee",
      authorTitle: "Co-Founder, FitVerse Gear",
      image: "/img/testimonials/user/adamlee.jpg",
      rating: 5,
    },
    {
      id: 9,
      achievement: "Catalog Turnaround",
      quote:
        "Skipper turned our slow-moving catalog into a bestseller lineup. We've hit record months back-to-back.",
      authorName: "Hannah Kim",
      authorTitle: "Creative Director, HomeFlow Decor",
      image: "/img/testimonials/user/hannah.jpg",
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

  const featuredCaseStudy = successStories[0];
  const featuredTestimonial = {
    achievement: successStories[0].achievement,
    quote: "Skipper delivered 10x ROAS in just 60 days. They're the partner TechGear Solutions needed to scale with confidence.",
    authorName: successStories[0].clientName,
    authorTitle: successStories[0].company,
    image: "/img/testimonials/user/1.jpg",
  };

  const brandCapabilities = [
    {
      id: 1,
      title: "Account Setup & Compliance",
      summary: "Launch right, stay protected.",
      detail: "We handle Seller Central registration, category approvals and brand registry. Ongoing compliance checks and policy monitoring keep your account healthy.",
      icon: "fa-shield-check",
      color: "from-[#4CAF50] to-[#2E7D32]",
    },
    {
      id: 2,
      title: "Listing Creation & Optimization",
      summary: "Convert visitors into buyers.",
      detail: "High impact titles, bullet points, images and videos convert visitors into buyers. Our team continuously runs split tests and applies enhancements.",
      icon: "fa-pen-to-square",
      color: "from-[#FF6B35] to-[#E55A2B]",
    },
    {
      id: 3,
      title: "Advertising Management",
      summary: "Spend with purpose.",
      detail: "Multi-layer campaigns across Sponsored Products, Brands, Display and DSP are paired with bid strategies, budget planning and analytics for profitable growth.",
      icon: "fa-bullseye",
      color: "from-[#4CAF50] to-[#2E7D32]",
    },
    {
      id: 4,
      title: "Inventory & Logistics",
      summary: "Never run out. Never overstock.",
      detail: "Demand forecasting, FBA and FBM stock planning, shipping label creation and shipment reconciliation ensure product availability and smooth fulfillment.",
      icon: "fa-boxes-stacked",
      color: "from-[#FF6B35] to-[#E55A2B]",
    },
    {
      id: 5,
      title: "Customer Experience & Support",
      summary: "Protect your reputation.",
      detail: "Round the clock response to messages and reviews, proactive feedback requests and resolution of claims or disputes protect your reputation.",
      icon: "fa-headset",
      color: "from-[#4CAF50] to-[#2E7D32]",
    },
    {
      id: 6,
      title: "Seasonal & Promotional Planning",
      summary: "Capture every opportunity.",
      detail: "We analyze market trends to build launch calendars, lightning deals, coupons and event-based promotions that drive momentum throughout the year.",
      icon: "fa-calendar-days",
      color: "from-[#FF6B35] to-[#E55A2B]",
    },
    {
      id: 7,
      title: "Brand Protection",
      summary: "Guard your buy box.",
      detail: "Monitoring for unauthorized sellers and counterfeit goods, assistance with intellectual property enforcement and proactive action maintain buy box control.",
      icon: "fa-lock",
      color: "from-[#4CAF50] to-[#2E7D32]",
    },
    {
      id: 8,
      title: "Performance Reporting",
      summary: "Know what's working.",
      detail: "Regular insights on conversion, advertising cost of sale, return rates and other key metrics come with recommendations that evolve as the marketplace changes.",
      icon: "fa-chart-pie",
      color: "from-[#FF6B35] to-[#E55A2B]",
    },
    {
      id: 9,
      title: "Marketplace Expansion & Global Growth",
      summary: "Scale beyond borders.",
      detail: "Our team guides you into new Amazon regions and international marketplaces. We localize listings, manage cross-border logistics and tailor campaigns so your brand succeeds wherever customers shop.",
      icon: "fa-globe",
      color: "from-[#4CAF50] to-[#2E7D32]",
    },
  ];

  const brandSteps = [
    {
      id: 1,
      title: "Audit & Discovery",
      headline: "We find what's fueling growth—and what's leaking cash.",
      description:
        "We dig into your listings, ad structure, spend trends, keyword data, and competition. The result: a crystal-clear snapshot of what's working and a hit list of silent budget drains.",
      icon: "fa-magnifying-glass",
      gradient: "from-[#4CAF50] to-[#2E7D32]",
    },
    {
      id: 2,
      title: "Strategy & Setup",
      headline: "We rebuild campaigns engineered for profitable intent.",
      description:
        "Goals, margins, positioning—everything informs a tailor-made architecture. Campaigns are restructured, targeting is refined, and ads are aligned with product promise so every click has a job.",
      icon: "fa-sitemap",
      gradient: "from-[#FF6B35] to-[#E55A2B]",
    },
    {
      id: 3,
      title: "Launch & Test",
      headline: "We go live with precision tracking from day one.",
      description:
        "Audiences, ad types, and keywords are tested in controlled sprints to surface quick wins fast. Conversion data flows instantly so we know what to amplify and what to pause.",
      icon: "fa-rocket",
      gradient: "from-[#4CAF50] to-[#2E7D32]",
    },
    {
      id: 4,
      title: "Optimize & Adapt",
      headline: "Amazon shifts daily—your brand should too.",
      description:
        "Bids are tuned, keywords expanded, losers trimmed, and creative refreshed in real time. We adapt to algorithm updates before they hit your metrics.",
      icon: "fa-sliders",
      gradient: "from-[#FF6B35] to-[#E55A2B]",
    },
    {
      id: 5,
      title: "Report, Review & Scale",
      headline: "We keep growth transparent, strategic, and repeatable.",
      description:
        "You get storytelling reports and live dashboards that make sense at a glance. Together we plan the next move—more ad types, new marketplaces, or a bigger product push.",
      icon: "fa-chart-line",
      gradient: "from-[#4CAF50] to-[#2E7D32]",
    },
  ];

  return (
    <main>
      {/* Hero Services Header - Eye-Opening Design */}
      <section
        id="hero"
        className="relative flex items-center overflow-hidden bg-[#0a0a0a] pt-[100px] sm:pt-[110px] md:pt-[120px] lg:pt-[130px] pb-10 sm:pb-12 md:pb-16 lg:pb-20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4CAF50]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#4CAF50]/5 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(76, 175, 80, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(76, 175, 80, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Diagonal Split Design */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#4CAF50]/5 via-transparent to-transparent transform rotate-12 origin-top-right"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#FF6B35]/5 via-transparent to-transparent transform -rotate-12 origin-bottom-left"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* Left Column - Main Content */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                {/* Badge */}
                <div className="inline-block mb-2 sm:mb-4">
                  <span className="px-4 sm:px-6 py-1.5 sm:py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full text-[#4CAF50] text-xs sm:text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                    Full-Service Brand Management
                  </span>
                </div>

                {/* Main Headline - Creative Typography */}
                <h1 className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1] sm:leading-[0.95] text-white mb-3 sm:mb-4">
                  <span className="transform hover:scale-105 transition-transform duration-500">
                    Own Your
                  </span>
                  <span
                    className="text-[#4CAF50] transform hover:scale-105 transition-transform duration-500"
                    style={{ textShadow: "0 0 40px rgba(76, 175, 80, 0.5)" }}
                  >
                    Amazon Growth
                  </span>
                  <span className="text-[#FF6B35] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    Start Winning.
                  </span>
                </h1>

                {/* Description Paragraph */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-4 sm:mb-6 font-light">
                  Ready to turn your Amazon store into a growth machine? Our brand management team drives real revenue, stronger rankings and higher conversion. We handle everything from content to campaigns and operations, turning shoppers into loyal customers while you focus on what you do best.
                </p>
                <div className="flex items-center gap-6 sm:gap-10 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
                  <Link
                    href="/contact"
                    className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-15px text-white font-bold text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(76,175,80,0.6)] overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      Claim Your Free Audit
                      <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </div>
              </div>

              {/* Right Column - Visual Card Placeholder */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative rounded-2xl lg:rounded-30px p-1 bg-gradient-to-br from-[#4CAF50] via-[#2E7D32] to-[#FF6B35] shadow-[0_25px_70px_rgba(76,175,80,0.25)]">
                  <div className="absolute inset-0 rounded-2xl lg:rounded-30px bg-[#4CAF50]/20 blur-3xl opacity-40 -z-10"></div>
                  <div className="relative rounded-25px bg-[#070707]/90 dark:bg-[#040404]/95 border border-white/10 min-h-[360px] flex flex-col">
                    <div className="px-8 pt-8 pb-6 flex flex-col gap-6">

                      <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
                        See How Top Sellers Scale With Us
                      </h3>

                      {featuredCaseStudy && (
                        <div className="relative rounded-20px overflow-hidden border border-white/10 bg-white/5">
                          <div className="relative aspect-[16/10] w-full">
                            <Image
                              src={featuredCaseStudy.thumbnail}
                              alt={featuredCaseStudy.clientName}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex flex-wrap items-center gap-3">

                              </div>
                              <div className="mt-4">
                                <h4 className="text-white text-xl font-semibold">
                                  {featuredCaseStudy.company}
                                </h4>
                                <p className="text-sm text-white/70">
                                  {featuredCaseStudy.metric}
                                </p>
                      </div>
                    </div>
                          </div>
                        </div>
                      )}

                      {featuredTestimonial && (
                        <div className="flex flex-col gap-4 rounded-20px border border-white/10 bg-white/5 p-6">
                          <div className="flex items-center gap-4">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20">
                              <Image
                                src={featuredTestimonial.image}
                                alt={featuredTestimonial.authorName}
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            </div>
                            <div>
                              <p className="text-white font-semibold text-base leading-tight">
                                {featuredTestimonial.authorName}
                              </p>
                              <p className="text-sm text-white/60">
                                {featuredTestimonial.authorTitle}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm md:text-base text-white/80 leading-relaxed italic">
                            &ldquo;{featuredTestimonial.quote}&rdquo;
                          </p>
                          <div className="flex items-center gap-2 text-[#4CAF50]">
                            <i className="fas fa-star"></i>
                            <span className="text-sm text-white/70">
                              {featuredTestimonial.achievement}
                        </span>
                      </div>
                        </div>
                      )}
                    </div>
                    {featuredCaseStudy && (
                      <div className="px-8 py-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-center">

                        <a
                          href="https://www.youtube.com/watch?v=fgdcjsg0n6I"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-white/70 text-sm md:text-base hover:text-white transition-colors"
                        >
                          <i className="fas fa-play-circle text-[#FF6B35] text-xl"></i>
                          Watch full story
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Management Capabilities Section */}
      <section id="brand-suite" className="py-50px md:py-60px bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#060606] scroll-mt-[130px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
          <div className="absolute top-1/2 right-[-8rem] w-[26rem] h-[26rem] rounded-full bg-[#FF6B35]/15 blur-[160px]"></div>
          <div className="absolute bottom-[-4rem] left-1/3 w-[28rem] h-[28rem] rounded-full bg-[#4CAF50]/12 blur-[160px]"></div>
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(rgba(76, 175, 80, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 108, 0, 0.12) 1px, transparent 1px)',
            backgroundSize: '70px 70px'
          }}></div>
        </div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center flex flex-col items-center gap-3 px-4 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35] rounded-full text-xs font-semibold uppercase tracking-[0.35em]">
              Complete Brand Management
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight max-w-xl">
              Everything Your Brand Needs to Stay Profitable & Peaceful
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              Your Amazon brand shouldn&apos;t feel like firefighting. We bring structure, clarity, and consistency to every aspect of your business so growth stays steady and stress stays low.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4CAF50]/15 text-[#4CAF50] text-xs font-semibold uppercase tracking-[0.35em]">
                <i className="fas fa-shield-check"></i>
                End-to-End Management
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6B35]/15 text-[#FF6B35] text-xs font-semibold uppercase tracking-[0.35em]">
                <i className="fas fa-wave-square"></i>
                Data-Driven Growth
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {brandCapabilities.map((capability, idx) => (
              <div
                key={capability.id}
                className="group relative overflow-hidden rounded-20px px-6 py-6 min-h-[180px] transition-all duration-500 bg-[#0e0e0e]/95 border border-white/8 hover:-translate-y-1 hover:border-[#4CAF50]/35 hover:shadow-[0_30px_90px_rgba(76,175,80,0.20)]"
              >
                {/* Accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${capability.color}`}
                ></div>
                {/* Subtle hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(1200px 400px at 100% -10%, rgba(255,255,255,0.12), transparent 50%)' }}
                ></div>

                <div className="relative z-10 flex flex-col gap-2.5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${capability.color} text-white flex items-center justify-center text-base shadow-[0_22px_60px_rgba(76,175,80,0.33)]`}
                    >
                      <i className={`fas ${capability.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mt-1">
                        {capability.title}
                      </h3>
                    </div>
                  </div>
                  {capability.summary && (
                    <p className="text-xs text-white/75 leading-relaxed">
                      {capability.summary}
                    </p>
                  )}
                  {capability.detail && (
                    <p className="text-xs text-white/60 leading-relaxed">
                      {capability.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Partnership CTA Banner */}
          <div className="mt-10">
            <div className="relative overflow-hidden rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#22C55E]/40 px-8 py-10 sm:px-10 md:px-14 md:py-12 shadow-[0_30px_90px_-45px_rgba(34,197,94,0.6)]">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-[#22C55E] blur-[130px]" />
                <div className="absolute bottom-[-25%] right-1/4 h-64 w-64 rounded-full bg-[#0EA5E9] blur-[150px]" />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] text-white flex items-center justify-center text-xl shadow-[0_22px_60px_rgba(255,107,53,0.4)]">
                    <i className="fas fa-handshake-simple"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Dedicated Partnership
                  </h3>
                </div>
                <div className="max-w-3xl">
                  <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-2">
                    Want something exciting? Something exclusive your Brand deserves.
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">
                    A named strategist aligns with your long-term goals, provides strategic guidance and collaborates on expansion into new categories or regions.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:shadow-[0_18px_55px_rgba(76,175,80,0.4)] hover:-translate-y-0.5"
                >
                  <i className="fas fa-phone-volume"></i>
                  Schedule Partnership Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Management Five-Step System */}
      <section id="brand-process" className="py-100px bg-gradient-to-br from-[#060606] via-[#090909] to-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-8rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-[#4CAF50]/15 blur-[160px]"></div>
          <div className="absolute bottom-[-10rem] left-[-6rem] w-[30rem] h-[30rem] rounded-full bg-[#FF6B35]/12 blur-[190px]"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(76, 175, 80, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53, 0.09) 1px, transparent 1px)',
            backgroundSize: '90px 90px'
          }}></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:items-start">
            <div className="lg:col-span-4 flex">
              <div className="space-y-8 w-full lg:max-w-md lg:ml-auto lg:sticky lg:top-24">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 text-[#4CAF50] rounded-full text-xs font-semibold uppercase tracking-[0.35em]">
                  Our 5-Step System
                </span>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                    The Only 5 Steps You&apos;ll Ever Need for Brand Growth
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Every profitable brand starts with structure and ends with consistency. We rebuild your Amazon presence step-by-step so results become predictable, not hopeful.
                  </p>
                </div>
                <div className="rounded-25px border border-white/10 bg-white/[0.05] px-6 py-5 space-y-3 backdrop-blur-md">
                  <p className="text-white font-semibold text-lg">The Goal</p>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    Less noise. More control. Steady sales growth without the guesswork. That&apos;s how we make Amazon work for you, not against you.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#FF6B35]/15 text-[#FF6B35] text-xs font-semibold uppercase tracking-[0.3em]">
                    <i className="fas fa-forward"></i>
                    Built to scale with momentum
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-20px bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white font-semibold text-xs md:text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(76,175,80,0.25)] hover:-translate-y-0.5"
                  >
                    <i className="fas fa-calendar-check text-base"></i>
                    Book Your Strategy Call
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative pl-10">
                <div className="absolute top-3 bottom-3 left-3 w-[2px] bg-gradient-to-b from-[#4CAF50]/0 via-[#4CAF50]/60 to-[#FF6B35]/0"></div>
                <div className="space-y-12">
                  {brandSteps.map((step, idx) => (
                    <div
                      key={step.id}
                      className="group relative pl-14"
                    >
                      <div className="absolute left-0 top-2 flex flex-col items-center gap-4">
                        <span className="w-6 h-6 rounded-full border-2 border-[#4CAF50]/40 bg-[#101010] text-white text-xs font-semibold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <div className="w-[1px] flex-1 bg-gradient-to-b from-[#4CAF50]/40 via-white/10 to-transparent"></div>
                      </div>

                      <div className="relative overflow-hidden rounded-25px border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.01] backdrop-blur-md p-8 md:p-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#4CAF50]/35 group-hover:shadow-[0_25px_70px_rgba(76,175,80,0.18)]">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        <div className="relative z-10 flex flex-col gap-5">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center text-lg shadow-[0_18px_45px_rgba(76,175,80,0.3)]`}>
                                <i className={`fas ${step.icon}`}></i>
                              </div>
                              <div>
                                <p className="text-xs uppercase tracking-[0.35em] text-white/50 font-semibold">
                                  Step 0{step.id}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                  {step.title}
                                </h3>
                              </div>
                            </div>

                          </div>

                          <div className="space-y-3">
                            <p className="text-lg md:text-xl text-white font-semibold leading-snug">
                              {step.headline}
                            </p>
                            <p className="text-sm md:text-base text-white/70 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Marquee */}
      <section className="py-60px md:py-80px bg-[#f5f0e8] dark:bg-[#050505]">
        <div className="container text-center mb-30px">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-3">
            Brands That Trust Amazon Skipper
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-[#121212] dark:text-white">
            Powering Growth For Category-Leading Sellers
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <BrandMarque type={2} />
        </div>
      </section>

      {/* Stats/Results Section */}
      <section id="results" className="py-[50px] bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] scroll-mt-[130px]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-white/90">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                  {stat.label.includes('%') && <span className="text-3xl">%</span>}
                </div>
                <p className="text-xl opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-100px bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#0a0a0a] relative overflow-hidden scroll-mt-[130px]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/10 via-transparent to-[#4CAF50]/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#4CAF50]/20 text-[#4CAF50] rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Client Success
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Success Stories of Our
              <span className="text-[#4CAF50] block">Loyal Clients</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients. Watch how we&apos;ve transformed their Amazon businesses.
            </p>
          </div>

          {/* Featured Video (Large) */}
          {successStories[0] && (
            <div className="mb-12">
              <div className="relative group rounded-30px overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="aspect-video relative">
                  {selectedVideo === successStories[0].id ? (
                    <iframe
                      className="w-full h-full"
                      src={successStories[0].videoUrl}
                      title={successStories[0].clientName}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <Image
                        src={successStories[0].thumbnail}
                        alt={successStories[0].clientName}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                      />
                      <div
                        onClick={() => setSelectedVideo(successStories[0].id)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform"
                      >
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors">
                          <i className="fas fa-play text-[#4CAF50] text-2xl md:text-3xl ml-1"></i>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {successStories[0].clientName}
                      </h3>
                      <p className="text-gray-300 mb-1">{successStories[0].company}</p>
                      <div className="flex gap-4 mt-2">
                        <span className="px-4 py-1 bg-[#4CAF50]/20 text-[#4CAF50] rounded-full text-sm font-semibold">
                          {successStories[0].achievement}
                        </span>
                        <span className="px-4 py-1 bg-white/10 text-white rounded-full text-sm">
                          {successStories[0].metric}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.slice(1).map((story) => (
              <div
                key={story.id}
                className="group relative rounded-20px overflow-hidden shadow-xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#4CAF50]/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-video relative">
                  {selectedVideo === story.id ? (
                    <iframe
                      className="w-full h-full"
                      src={story.videoUrl}
                      title={story.clientName}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <Image
                        src={story.thumbnail}
                        alt={story.clientName}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                      />
                      <div
                        onClick={() => setSelectedVideo(story.id)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform"
                      >
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors">
                          <i className="fas fa-play text-[#4CAF50] text-xl ml-1"></i>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-[#4CAF50]/90 text-white rounded-full text-xs font-semibold">
                          {story.industry}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6 bg-gradient-to-t from-black/90 to-black/50">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {story.clientName}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">{story.company}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#4CAF50]/20 text-[#4CAF50] rounded-full text-xs font-semibold">
                      {story.achievement}
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs">
                      {story.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-20px border border-white/10">
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">500+</div>
              <p className="text-gray-300 text-sm">Successful Campaigns</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-20px border border-white/10">
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">98%</div>
              <p className="text-gray-300 text-sm">Client Satisfaction</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-20px border border-white/10">
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">$50M+</div>
              <p className="text-gray-300 text-sm">Revenue Generated</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-20px border border-white/10">
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">45%</div>
              <p className="text-gray-300 text-sm">Avg Cost Reduction</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16 mt-10">
            <div className="relative overflow-hidden rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#22C55E]/40 px-8 py-10 sm:px-10 md:px-14 md:py-12 shadow-[0_30px_90px_-45px_rgba(34,197,94,0.6)]">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-[#22C55E] blur-[130px]" />
                <div className="absolute bottom-[-25%] right-1/4 h-64 w-64 rounded-full bg-[#0EA5E9] blur-[150px]" />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <div className="max-w-3xl">
                  <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
                    Want to see the exact systems we deploy to turn chaotic ad accounts into calm, scaling machines? Dive into the playbooks behind our biggest wins.
                  </p>
                </div>
                <Link href="/case-studies">
                  <button className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#22C55E] hover:text-black">
                    Explore Case Studies
                  </button>
                </Link>
              </div>
            </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-100px bg-white dark:bg-[#121212] scroll-mt-[130px]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white">
              Testimonials
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto px-16 md:px-0">
            {/* Navigation Arrows */}
            <button
              className="testimonials-slider-prev absolute left-0 md:left-[-60px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg flex items-center justify-center text-[#121212] dark:text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <i className="fa-regular fa-chevron-left"></i>
            </button>
            <button
              className="testimonials-slider-next absolute right-0 md:right-[-60px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg flex items-center justify-center text-[#121212] dark:text-white transition-all duration-300 hover:scale-110"
              aria-label="Next"
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
                  <div className="flex flex-col items-center text-center px-4">
                    {/* Profile Image */}
                    <div className="mb-8">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.authorName}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Achievement Sub-heading */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] dark:text-white mb-6">
                      {testimonial.achievement}
                    </h3>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-[#333333] dark:text-gray-300 italic mb-8 max-w-3xl leading-relaxed">
                      {testimonial.quote}
                    </blockquote>

                    {/* Author Name */}
                    <p className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white mb-3">
                      {testimonial.authorName}
                    </p>

                    {/* Stars Rating */}
                    <div className="flex gap-1 mb-3 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-[#000000] dark:text-white text-xl"></i>
                      ))}
                    </div>

                    {/* Author Title */}
                    <p className="text-lg text-[#4a4a4a] dark:text-gray-400">
                      {testimonial.authorTitle}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="container">
          <div className="mt-6 md:mt-10">
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#22C55E]/40 px-8 py-10 sm:px-10 md:px-14 md:py-12 shadow-[0_30px_90px_-45px_rgba(34,197,94,0.6)]">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-[#22C55E] blur-[130px]" />
                <div className="absolute bottom-[-25%] right-1/4 h-64 w-64 rounded-full bg-[#0EA5E9] blur-[150px]" />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <div className="max-w-3xl">
                  <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
                    Ready for a tailored roadmap? We&apos;ll audit your brand, listings, and growth levers to map the fastest path to calmer, more profitable scaling.
                  </p>
                </div>
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#22C55E] hover:text-black">
                    Book Strategy Call
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-100px bg-white dark:bg-[#1a1a1a] scroll-mt-[130px]">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#121212] dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-15px overflow-hidden hover:border-[#4CAF50] transition-colors">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left bg-white dark:bg-[#1a1a1a] hover:bg-[#4CAF50]/5 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#121212] dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <i className={`fas ${activeFaq === idx ? 'fa-minus' : 'fa-plus'} text-[#4CAF50] text-xl transition-transform`}></i>
                  </div>
                </button>
                <div className={`px-6 pb-6 text-gray-600 dark:text-gray-300 transition-all duration-300 ${activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action with Video Background */}
      <section id="cta" className="relative py-100px overflow-hidden scroll-mt-[130px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/90 to-[#4CAF50]/90"></div>
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Your Amazon Brand?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful Amazon sellers who&apos;ve scaled their brands
              with our full-service management and increased their profits significantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#4CAF50] hover:bg-[#2E7D32] rounded-15px text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#121212] rounded-15px font-bold text-lg transition-all duration-300 text-center"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandManagementMain;
