"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getALlServices from "@/libs/getALlServices";
import Image from "next/image";

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

  const processSteps = [
    {
      title: "Analysis & Audit",
      description: "We conduct a comprehensive analysis of your current Amazon campaigns, identifying inefficiencies and opportunities for optimization."
    },
    {
      title: "Strategy Development",
      description: "Based on our analysis, we develop a customized strategy tailored to your specific products, market, and business goals."
    },
    {
      title: "Implementation",
      description: "Our team implements the optimized campaigns, continuously monitoring and adjusting for maximum performance and ROI."
    },
    {
      title: "Monitoring & Optimization",
      description: "We provide ongoing monitoring, reporting, and optimization to ensure sustained growth and continued improvement in your ad performance."
    }
  ];

  const stats = [
    { value: 47, label: "Days to Results" },
    { value: 45, label: "Average Spend Reduction %" },
    { value: 500, label: "Successful Campaigns" },
    { value: 98, label: "Client Satisfaction %" }
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
      {/* Hero Services Header */}
      <section className="relative pt-160px md:pt-[180px] lg:pt-[200px] pb-100px bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#4CAF50]/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/10 via-transparent to-[#121212] opacity-80"></div>
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Amazon Business
              <span className="text-[#4CAF50] block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Transform your Amazon business with our proven strategies and expert guidance. 
              Reduce your ad spend by up to 50% in just 47 days, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#4CAF50] hover:bg-[#2E7D32] rounded-15px text-white font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white rounded-15px font-bold text-lg transition-all duration-300">
                Schedule a Call
              </button>
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

      {/* Process Timeline Section */}
      <section className="py-100px bg-[#f6f3fc] dark:bg-[#121212]">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#121212] dark:text-white">
            How We Work
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4CAF50] to-[#2E7D32] hidden lg:block"></div>
            
            {processSteps.map((step, idx) => (
              <div key={idx} className={`flex items-center mb-16 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:flex-row`}>
                <div className="w-full lg:w-1/2 px-4 lg:px-8">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-20px p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mx-auto lg:mx-0 my-4 lg:my-0">
                  {idx + 1}
                </div>
                <div className="w-full lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Outbid, Outlast & Outsmart Section */}
      <section className="py-100px bg-[#f5f0e8] dark:bg-[#1a1a1a]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] dark:text-white mb-10">
                We Outbid, Outlast & Outsmart.
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a1a1a] dark:text-white mb-1">
                      In-Depth Keyword Research:
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We analyze competitor strategies and market trends to identify high-performing keywords that drive conversions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a1a1a] dark:text-white mb-1">
                      Regular Campaign Adjustments:
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our team continuously monitors and optimizes your campaigns to ensure peak performance and maximum ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a1a1a] dark:text-white mb-1">
                      Diversified Strategies:
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We implement multiple advertising approaches to reach your target audience across different channels and touchpoints.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a1a1a] dark:text-white mb-1">
                      Custom-Built Solutions:
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Every campaign is tailored to your unique business needs, product categories, and growth objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a1a1a] dark:text-white mb-1">
                      Proven Success Record:
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our track record speaks for itself with consistent results and satisfied clients across various industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a1a1a] dark:text-white mb-1">
                      Comprehensive Campaigns:
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      From setup to optimization, we handle every aspect of your Amazon advertising campaigns with meticulous attention.
                    </p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-4 bg-[#FF6B35] hover:bg-[#E55A2B] rounded-15px text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Free Audit
              </button>
            </div>

            {/* Right Column - Illustration/Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-20px p-8 h-full min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                      {/* Placeholder charts/graphs */}
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                        <div className="h-32 bg-gradient-to-t from-[#4CAF50] to-[#2E7D32] rounded mb-2"></div>
                        <div className="h-24 bg-gradient-to-t from-[#FF6B35] to-[#E55A2B] rounded mb-2"></div>
                        <div className="h-20 bg-gradient-to-t from-blue-400 to-blue-600 rounded"></div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                        <div className="h-28 bg-gradient-to-t from-[#FF6B35] to-[#E55A2B] rounded mb-2"></div>
                        <div className="h-32 bg-gradient-to-t from-[#4CAF50] to-[#2E7D32] rounded mb-2"></div>
                        <div className="h-16 bg-gradient-to-t from-purple-400 to-purple-600 rounded"></div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                        <div className="h-24 bg-gradient-to-t from-[#4CAF50] to-[#2E7D32] rounded mb-2"></div>
                        <div className="h-28 bg-gradient-to-t from-[#FF6B35] to-[#E55A2B] rounded mb-2"></div>
                        <div className="h-20 bg-gradient-to-t from-blue-400 to-blue-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
                    Illustration placeholder - Replace with actual image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-100px bg-white dark:bg-[#121212]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A strategic methodology designed to deliver measurable results and sustainable growth for your Amazon business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Approach Step 1 */}
            <div className="bg-[#f5f0e8] dark:bg-[#1a1a1a] rounded-20px p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4">
                Discovery & Analysis
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We begin with a comprehensive audit of your current Amazon presence, identifying opportunities and areas for optimization.
              </p>
            </div>

            {/* Approach Step 2 */}
            <div className="bg-[#f5f0e8] dark:bg-[#1a1a1a] rounded-20px p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4">
                Strategy Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Based on our findings, we create a customized strategy tailored to your specific goals and market position.
              </p>
            </div>

            {/* Approach Step 3 */}
            <div className="bg-[#f5f0e8] dark:bg-[#1a1a1a] rounded-20px p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4">
                Implementation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our expert team executes the plan with precision, setting up campaigns and optimizing listings for maximum impact.
              </p>
            </div>

            {/* Approach Step 4 */}
            <div className="bg-[#f5f0e8] dark:bg-[#1a1a1a] rounded-20px p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4">
                Continuous Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We monitor performance daily, making data-driven adjustments to ensure your campaigns remain competitive and profitable.
              </p>
            </div>
          </div>

          {/* Additional Info Row */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">47</div>
              <p className="text-gray-600 dark:text-gray-400">Days to Results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-400">Monitoring & Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-400">Dedicated Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-100px bg-white dark:bg-[#121212]">
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
      <section className="py-100px bg-gradient-to-r from-[#4CAF50] to-[#2E7D32]">
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
      <section className="py-100px bg-white dark:bg-[#1a1a1a]">
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

      {/* Success Stories Section */}
      <section className="py-100px bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#0a0a0a] relative overflow-hidden">
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

      {/* Call-to-Action with Video Background */}
      <section className="relative py-100px overflow-hidden">
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
