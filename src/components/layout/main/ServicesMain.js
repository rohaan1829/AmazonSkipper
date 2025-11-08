"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getALlServices from "@/libs/getALlServices";
import Image from "next/image";
import BrandMarque from "@/components/sections/marquee/BrandMarque";

const ServicesMain = () => {
  const [services, setServices] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [faqs, setFaqs] = useState([
    {
      question: "How much can I expect to reduce my Amazon ad spend?",
      answer: "Our clients typically see a 30-50% reduction in their Amazon ad spend within the first 47 days. We guarantee results or provide a full refund."
    },
    {
      question: "What services do you offer for Amazon sellers?",
      answer: "We offer comprehensive Amazon business solutions including ad optimization, keyword research, listing optimization, PPC management, and strategic consulting to maximize your ROI."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients start seeing improvements within 2-3 weeks, with significant results visible by day 47. Our process is designed for rapid optimization and immediate impact."
    },
    {
      question: "Do you work with all types of Amazon sellers?",
      answer: "Yes, we work with sellers of all sizes - from new sellers just starting out to established brands looking to optimize their existing campaigns and scale their business."
    },
    {
      question: "What makes your approach different?",
      answer: "Our data-driven approach combines advanced analytics, machine learning, and years of Amazon expertise. We focus on long-term sustainable growth rather than quick fixes."
    }
  ]);

  useEffect(() => {
    const allServices = getALlServices();
    setServices(allServices);
  }, []);

  const stats = [
    { value: 47, label: "Days to Results" },
    { value: 45, label: "Average Spend Reduction %" },
    { value: 500, label: "Successful Campaigns" },
    { value: 98, label: "Client Satisfaction %" }
  ];

  const onboardingSteps = [
    {
      title: "Discover & Strategize",
      description:
        "We start by understanding your business, products, audience, and Amazon goals. Using data-driven insights, we create a tailored strategy that identifies key opportunities and sets a clear path for growth.",
      icon: "fa-compass-drafting",
    },
    {
      title: "Launch & Optimize",
      description:
        "We handle everything from building and launching your campaigns to optimizing bids, targeting, and creatives. You focus on your business while we fine-tune performance to maximize your ROI.",
      icon: "fa-rocket-launch",
    },
    {
      title: "Scale & Elevate",
      description:
        "With results rolling in, we help you scale profitably—expanding into new markets, refining strategies, and continuously improving to keep you ahead of the competition.",
      icon: "fa-arrows-up-to-line",
    },
  ];

  const clientOutcomes = [
    {
      id: 1,
      metric: "200%",
      description: "Growth in ad revenue for Real Mushrooms through DSP advertising.",
      icon: "fa-rocket",
      
      color: "from-[#4CAF50] to-[#2E7D32]"
    },
    {
      id: 2,
      metric: "57%",
      description: "Reduction in TACOS for Vitargo through tight keyword pruning processes.",
      icon: "fa-shopping-cart",
      
      color: "from-[#FF6B35] to-[#E55A2B]"
    },
    {
      id: 3,
      metric: "40K",
      description: "More traffic to FitTea Amazon page from organic ranking.",
      icon: "fa-chart-line",
      
      color: "from-[#4CAF50] to-[#2E7D32]"
    },
    {
      id: 4,
      metric: "1.1M",
      description: "New sessions for Labrada's new pro series from a well planned launch.",
      icon: "fa-chart-line",
      color: "from-[#4CAF50] to-[#2E7D32]"
    },
    {
      id: 5,
      metric: "-20%",
      description: "Reduction in ACOS for HappyV with PPC analysis.",
      icon: "fa-chart-line",
      color: "from-[#FF6B35] to-[#E55A2B]"
    },
    {
      id: 6,
      metric: "75%",
      description: "Increase in profits for MMA Nutrition by implementing premium A.",
      icon: "fa-bullseye",
      color: "from-[#4CAF50] to-[#2E7D32]"
    }
  ];

  const successStories = [
    {
      id: 1,
      clientName: "Sarah Martinez",
      company: "TechGear Solutions",
      achievement: "10x ROAS in 60 Days",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
      thumbnail: "/img/testimonials/user/1.jpg",
      metric: "50% Cost Reduction",
      industry: "Electronics"
    },
    {
      id: 2,
      clientName: "David Chen",
      company: "Home Essentials Plus",
      achievement: "300% Revenue Growth",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
      thumbnail: "/img/testimonials/user/2.jpg",
      metric: "45% ACoS Improvement",
      industry: "Home & Kitchen"
    },
    {
      id: 3,
      clientName: "Emily Rodriguez",
      company: "Fitness Pro Gear",
      achievement: "5x Ad Performance",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
      thumbnail: "/img/testimonials/user/3.jpg",
      metric: "60% Lower CPC",
      industry: "Health & Fitness"
    },
    {
      id: 4,
      clientName: "Michael Thompson",
      company: "BeautyCare Co",
      achievement: "8x Return on Investment",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
      thumbnail: "/img/testimonials/user/4.jpg",
      metric: "35% Sales Increase",
      industry: "Beauty & Personal Care"
    }
  ];

  const testimonials = [
    {
      id: 1,
      achievement: "Hitting 10x ROAS",
      quote: "Arqam has been extremely reliable in managing our Amazon efforts. His communication is faultless, and we're looking forward to the continued growth under his management.",
      authorName: "Jack Consalvi",
      authorTitle: "CEO",
      image: "/img/testimonials/user/1.jpg",
      rating: 5
    },
    {
      id: 2,
      achievement: "50% Ad Spend Reduction",
      quote: "The team exceeded our expectations. Within just 30 days, we saw significant improvements in our campaign performance and reduced our ad spend dramatically.",
      authorName: "Sarah Johnson",
      authorTitle: "Marketing Director",
      image: "/img/testimonials/user/2.jpg",
      rating: 5
    },
    {
      id: 3,
      achievement: "Triple Revenue Growth",
      quote: "Working with this team has transformed our Amazon business. Their strategic approach and attention to detail have helped us scale efficiently.",
      authorName: "Michael Chen",
      authorTitle: "Founder",
      image: "/img/testimonials/user/3.jpg",
      rating: 5
    },
    {
      id: 4,
      achievement: "Outstanding ROI Results",
      quote: "The expertise and dedication shown by the team is unmatched. They've become an integral part of our success on Amazon.",
      authorName: "Emily Rodriguez",
      authorTitle: "E-commerce Manager",
      image: "/img/testimonials/user/4.jpg",
      rating: 5
    }
  ];

  return (
    <main>
      {/* Hero Services Header - Eye-Opening Design */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] pt-130px md:pt-150px lg:pt-160px">
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

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Main Content */}
              <div className="lg:col-span-7 space-y-8">
                {/* Badge */}
                <div className="inline-block mb-4">
                  <span className="px-6 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full text-[#4CAF50] text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                    Revolutionary Amazon Growth
                  </span>
                </div>

                {/* Main Headline - Creative Typography */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-white mb-8">
                  <span className="block transform hover:scale-105 transition-transform duration-500">
                    Stop
                  </span>
                  <span className="block text-[#4CAF50] transform hover:scale-105 transition-transform duration-500" style={{textShadow: '0 0 40px rgba(76, 175, 80, 0.5)'}}>
                    Wasting Money
                  </span>
                  <span className="block transform hover:scale-105 transition-transform duration-500">
                    on Amazon Ads
                  </span>
                  <span className="block text-[#FF6B35] text-4xl md:text-5xl lg:text-6xl mt-4 font-bold">
                    Start Winning.
                  </span>
                </h1>

                {/* Description Paragraph - 50-70 words */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-10 font-light">
                  Most Amazon sellers are bleeding cash on ineffective ad campaigns while competitors dominate. We've cracked the code: 
                  our clients slash ad spend by 50% in just 47 days while doubling conversions. No guesswork. No excuses. 
                  Just proven systems that work. Join 500+ sellers who've transformed their businesses. Your breakthrough starts now.
                </p>
              </div>

              {/* Right Column - Visual Card Placeholder */}
              <div className="lg:col-span-5">
                <div className="relative rounded-30px p-1 bg-gradient-to-br from-[#4CAF50] via-[#2E7D32] to-[#FF6B35] shadow-[0_25px_70px_rgba(76,175,80,0.25)]">
                  <div className="absolute inset-0 rounded-30px bg-[#4CAF50]/20 blur-3xl opacity-40 -z-10"></div>
                  <div className="relative rounded-25px bg-[#070707]/90 dark:bg-[#040404]/95 border border-white/10 min-h-[430px] flex flex-col">
                    <div className="px-8 pt-8 pb-6 flex flex-col gap-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full text-[#4CAF50] text-xs font-semibold uppercase tracking-[0.25em] w-fit">
                        Hero Visual
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
                        Showcase Your Brand’s Signature Moment
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        Drop an image or short looping video that captures your Amazon dominance. Product hero shots, live dashboards, or team-in-action visuals thrive here—anything that proves you build category leaders.
                      </p>
                      <div className="flex-1 border border-dashed border-white/20 rounded-20px bg-white/5 dark:bg-white/5 flex items-center justify-center text-gray-500 text-xs md:text-sm uppercase tracking-[0.4em]">
                        Visual Placeholder
                      </div>
                    </div>
                    <div className="px-8 py-6 border-t border-white/10 flex flex-wrap items-center gap-4 justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          50%
                        </div>
                        <span className="text-gray-300 text-sm md:text-base tracking-wide">
                          Avg. Spend Reduction
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          47
                        </div>
                        <span className="text-gray-300 text-sm md:text-base tracking-wide">
                          Days To Results
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-12 lg:mt-16">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-15px text-white font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(76,175,80,0.6)] overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      Claim Your Free Audit
                      <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
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

      {/* Onboarding Process Section */}
      <section className="py-80px bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#050505] scroll-mt-[130px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[22rem] h-[22rem] rounded-full bg-[#FF6B35]/15 blur-[120px]"></div>
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 mb-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#4CAF50]/40 text-[#4CAF50] text-xs font-semibold uppercase tracking-[0.35em]">
                How We Onboard
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                A Seamless Partnership Built To Win Amazon
              </h2>
              <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Every engagement begins with clarity, accelerates with precision execution, and never stops evolving. Here’s how we bring brands onboard and deliver momentum from day one.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute hidden lg:block left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#4CAF50]/50 to-transparent translate-x-[-50%]"></div>
            <div className="grid gap-14 lg:gap-20">
              {onboardingSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 group"
                >
                  <div className="flex items-center gap-6 lg:w-[18rem]">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] shadow-[0_20px_45px_rgba(76,175,80,0.35)] flex items-center justify-center text-2xl font-black text-white">
                        {index + 1}
                      </div>
                      <div className="absolute inset-0 rounded-2xl blur-2xl bg-[#4CAF50]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="hidden lg:block w-24 h-[1px] bg-gradient-to-r from-[#4CAF50]/40 to-transparent"></div>
                  </div>
                  <div className="flex-1">
                    <div className="relative bg-white/5 border border-white/10 rounded-25px p-8 md:p-10 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#4CAF50]/40 group-hover:shadow-[0_25px_70px_rgba(76,175,80,0.25)]">
                      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#4CAF50]/20 to-[#2E7D32]/20 flex items-center justify-center text-[#4CAF50]">
                        <i className={`fas ${step.icon} text-lg`}></i>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-[1.8] text-base md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Cards (match Recent Work slider behavior) */}
      {/* <section className="py-100px bg-white dark:bg-[#121212]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#121212] dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive Amazon business solutions designed to maximize your ROI and minimize your ad spend
            </p>
          </div>
          
          <div className="relative mx-25px">
            <button
              className="portfolio-slider-6-prev absolute left-[-12px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg flex items-center justify-center text-[#121212] dark:text-white"
              aria-label="Previous"
            >
              <i className="fa-regular fa-chevron-left"></i>
            </button>
            <button
              className="portfolio-slider-6-next absolute right-[-12px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg flex items-center justify-center text-[#121212] dark:text-white"
              aria-label="Next"
            >
              <i className="fa-regular fa-chevron-right"></i>
            </button>

            <div className="wow fadeInUp" data-wow-delay=".3s">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                freeMode={true}
                centeredSlides={true}
                speed={3000}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: ".portfolio-slider-6-prev",
                  nextEl: ".portfolio-slider-6-next",
                }}
                breakpoints={{
                  768: { slidesPerView: 1.5 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="services-slider"
              >
                {services?.map((service, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="portfolio-item branding p-5 md:p-25px bg-cream-light-color dark:bg-black-color hover:bg-cream-light-color dark:hover:bg-seondary-color rounded-30px group relative">
                      <div className="mb-25px rounded-15px overflow-hidden w-full">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-15px flex items-center justify-center">
                          <i className={`${service.iconName} text-2xl text-white`}></i>
                        </div>
                      </div>
                      <div className="flex items-start gap-25px justify-between">
                        <div>
                          <h4 className="block text-xl text-seondary-color dark:text-white-color hover:text-primary-color dark:hover:text-primary-color font-bold mb-1.5">
                            {service.title}
                          </h4>
                          <p className="block text-primary-color-light dark:text-body-color-3">
                            {service.shortDesc}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="flex-shrink-0 text-size-25px w-60px h-60px text-primary-color-light dark:text-white-color group-hover:text-white-color bg-transparent group-hover:bg-gradient-primary-8 outline-1 outline outline-body-color dark:outline-bg-color-2 group-hover:border-transparent rounded-100% leading-1 transition-all duration-300 inline-flex justify-center items-center"
                        >
                          <span className="relative overflow-hidden -rotate-45">
                            <i className="fa-regular fa-arrow-right text-lg group-hover:translate-x-150% transition-all duration-500 inline-block"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

      {/* Success Stories Section */}
      <section id="success-stories" className="py-80px bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#0a0a0a] relative overflow-hidden scroll-mt-[130px]">
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
              Real results from real clients. Watch how we've transformed their Amazon businesses.
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
      </section>

      {/* Client Outcomes Section */}
      <section id="outcomes" className="py-80px bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] dark:from-[#050505] dark:via-[#0a0a0a] dark:to-[#121212] relative overflow-hidden scroll-mt-[130px]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#4CAF50]/3 rounded-full blur-[200px] transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(76, 175, 80, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(76, 175, 80, 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Header */}
            <div className="lg:col-span-4">
              <div className="sticky top-[150px]">
                <span className="inline-block px-4 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 text-[#4CAF50] rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
                  WE LET OUR RESULTS DO THE TALKING
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  CLIENT OUTCOMES
                  <span className="block text-[#4CAF50] mt-2">THAT SPEAK FOR</span>
                  <span className="block text-[#FF6B35]">THEMSELVES</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Witness the tangible impact of our strategies, where every metric tells a story of exponential growth and optimized performance.
                </p>
              </div>
            </div>

            {/* Right Column - Outcome Cards */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {clientOutcomes.map((outcome, idx) => (
                  <div
                    key={outcome.id}
                    className="group relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-sm border border-white/5 rounded-25px p-8 hover:border-[#4CAF50]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(76,175,80,0.2)] overflow-hidden"
                    style={{
                      animationDelay: `${idx * 0.1}s`
                    }}
                  >
                    {/* Gradient Border Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${outcome.color} opacity-0 group-hover:opacity-10 rounded-25px transition-opacity duration-500`}></div>
                    
                    {/* Animated Background Wave */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FF6B35]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon with Animation */}
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${outcome.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <i className={`fas ${outcome.icon} text-white text-lg`}></i>
                      </div>
                    </div>

                    {/* Trend Indicator */}
                    {outcome.trend && (
                      <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                        {outcome.trend === "up" ? (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] flex items-center justify-center">
                            <i className="fas fa-arrow-up text-white text-xs"></i>
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] flex items-center justify-center">
                            <i className="fas fa-arrow-down text-white text-xs"></i>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Metric - Large and Prominent */}
                    <div className="mb-4 relative z-10">
                      <h3 className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${outcome.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500`} style={{
                        textShadow: '0 0 40px rgba(76, 175, 80, 0.3)',
                        filter: 'drop-shadow(0 0 20px rgba(76, 175, 80, 0.2))'
                      }}>
                        {outcome.metric}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                      {outcome.description}
                    </p>

                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${outcome.color} opacity-0 group-hover:opacity-5 rounded-25px blur-xl transition-opacity duration-500`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-80px bg-white dark:bg-[#121212] scroll-mt-[130px]">
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
      </section>

      {/* Stats/Results Section */}
      <section id="results" className="py-80px bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] scroll-mt-[130px]">
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

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-80px bg-white dark:bg-[#1a1a1a] scroll-mt-[130px]">
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
      <section id="cta" className="relative py-80px overflow-hidden scroll-mt-[130px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/90 to-[#4CAF50]/90"></div>
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Your Amazon Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful Amazon sellers who've reduced their ad spend by 30-50% 
              and increased their profits significantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#4CAF50] hover:bg-[#2E7D32] rounded-15px text-white font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#121212] rounded-15px font-bold text-lg transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesMain;
