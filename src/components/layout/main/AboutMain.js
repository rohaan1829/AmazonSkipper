"use client";
import { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import FunfacTsection1 from "@/components/sections/funfact/FunfacTsection1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutMain = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(1);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      videoUrl: "https://www.youtube.com/embed/5U66ATCyg4I?si=DXIVm5jJDIYOACaA",
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

  return (
    <main>
      {/* Hero About Header */}
      <section id="hero" className="relative min-h-[80vh] flex items-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-black dark:via-[#0a0a0a] dark:to-[#121212] pt-90px md:pt-110px lg:pt-120px">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4CAF50]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#4CAF50]/5 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(76, 175, 80, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(76, 175, 80, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative text-center max-w-5xl mx-auto">
              <div className="hidden sm:block">
                {[
                  { size: 22, x: "right-[-10%]", y: "-top-4", anim: "floatSlow 9s", opacity: "opacity-90" },
                  { size: 18, x: "left-[-18%]", y: "top-[18%]", anim: "floatMedium 7s", opacity: "opacity-65" },
                  { size: 16, x: "left-[-14%]", y: "top-[36%]", anim: "floatFast 6s", opacity: "opacity-60" },
                  { size: 18, x: "right-[-22%]", y: "bottom-6", anim: "floatFast 5s", opacity: "opacity-70" },
                  { size: 16, x: "left-[-10%]", y: "bottom-[6%]", anim: "floatMedium 8s", opacity: "opacity-55" },
                  { size: 14, x: "left-[-16%]", y: "top-[10%]", anim: "floatMedium 9s", opacity: "opacity-60" },
                  { size: 13, x: "left-[-20%]", y: "top-[28%]", anim: "floatFast 5.5s", opacity: "opacity-50" },
                  { size: 13, x: "left-[-12%]", y: "top-[60%]", anim: "floatMedium 7.5s", opacity: "opacity-55" },
                  { size: 12, x: "left-[-24%]", y: "bottom-[12%]", anim: "floatSlow 8.5s", opacity: "opacity-60" },
                  { size: 14, x: "right-[-12%]", y: "top-[30%]", anim: "floatSlow 10s", opacity: "opacity-60" },
                  { size: 12, x: "left-[-8%]", y: "top-[8%]", anim: "floatFast 6s", opacity: "opacity-70" },
                  { size: 12, x: "right-[-18%]", y: "bottom-[12%]", anim: "floatMedium 6.5s", opacity: "opacity-55" },
                  { size: 14, x: "left-[-22%]", y: "top-[4%]", anim: "floatFast 6.5s", opacity: "opacity-50" },
                  { size: 11, x: "left-[-6%]", y: "top-[44%]", anim: "floatSlow 7.5s", opacity: "opacity-60" },
                  { size: 10, x: "left-[-16%]", y: "top-[52%]", anim: "floatMedium 6.8s", opacity: "opacity-65" },
                  { size: 11, x: "left-[-18%]", y: "bottom-[22%]", anim: "floatFast 5.8s", opacity: "opacity-60" },
                  { size: 9, x: "left-[-10%]", y: "bottom-[10%]", anim: "floatMedium 8.2s", opacity: "opacity-55" },
                  { size: 13, x: "right-[-14%]", y: "top-[12%]", anim: "floatSlow 7.8s", opacity: "opacity-65" },
                  { size: 11, x: "right-[-20%]", y: "top-[40%]", anim: "floatFast 6.1s", opacity: "opacity-65" },
                  { size: 9, x: "right-[-10%]", y: "top-[58%]", anim: "floatMedium 7.7s", opacity: "opacity-60" },
                  { size: 10, x: "right-[-6%]", y: "bottom-[24%]", anim: "floatFast 6.9s", opacity: "opacity-55" },
                  { size: 12, x: "right-[-24%]", y: "bottom-[8%]", anim: "floatMedium 8.6s", opacity: "opacity-50" },
                  { size: 12, x: "left-[-26%]", y: "top-[20%]", anim: "floatSlow 8.8s", opacity: "opacity-45" },
                  { size: 11, x: "left-[-28%]", y: "top-[48%]", anim: "floatMedium 7.2s", opacity: "opacity-50" },
                  { size: 13, x: "left-[-12%]", y: "top-[72%]", anim: "floatFast 6.4s", opacity: "opacity-55" },
                  { size: 11, x: "left-[-30%]", y: "bottom-[26%]", anim: "floatMedium 7.6s", opacity: "opacity-50" },
                  { size: 10, x: "left-[-14%]", y: "top-[84%]", anim: "floatSlow 9.2s", opacity: "opacity-45" },
                  { size: 9, x: "left-[-22%]", y: "top-[90%]", anim: "floatFast 5.6s", opacity: "opacity-50" },
                  { size: 12, x: "right-[-26%]", y: "top-[16%]", anim: "floatMedium 8.4s", opacity: "opacity-50" },
                  { size: 11, x: "right-[-30%]", y: "top-[32%]", anim: "floatFast 6.3s", opacity: "opacity-55" },
                  { size: 13, x: "right-[-32%]", y: "top-[52%]", anim: "floatSlow 9.3s", opacity: "opacity-45" },
                  { size: 12, x: "right-[-12%]", y: "top-[72%]", anim: "floatMedium 7.1s", opacity: "opacity-55" },
                  { size: 10, x: "right-[-18%]", y: "top-[84%]", anim: "floatFast 6.7s", opacity: "opacity-50" },
                  { size: 11, x: "right-[-22%]", y: "bottom-[20%]", anim: "floatMedium 8.1s", opacity: "opacity-45" },
                  { size: 9, x: "right-[-8%]", y: "bottom-[34%]", anim: "floatSlow 9.4s", opacity: "opacity-45" },
                  { size: 10, x: "right-[-4%]", y: "bottom-[40%]", anim: "floatFast 5.9s", opacity: "opacity-50" },
                  { size: 11, x: "right-[-18%]", y: "top-[4%]", anim: "floatMedium 7.8s", opacity: "opacity-50" },
                  { size: 9, x: "left-[-34%]", y: "top-[30%]", anim: "floatFast 5.7s", opacity: "opacity-45" },
                  { size: 10, x: "left-[-30%]", y: "top-[60%]", anim: "floatMedium 8.9s", opacity: "opacity-45" },
                  { size: 9, x: "left-[-24%]", y: "top-[76%]", anim: "floatSlow 9.6s", opacity: "opacity-45" }
                ].map(({ size, x, y, anim, opacity }, idx) => {
                  const adjustedSize = size * 1.35;
                  return (
                    <Image
                      key={`about-hero-shape-${idx}`}
                      src="/img/shapes/5.jpg"
                      alt="Decorative accent"
                      width={adjustedSize}
                      height={adjustedSize}
                      className={`pointer-events-none absolute ${y} ${x} ${opacity} drop-shadow-[0_18px_40px_rgba(34,197,94,0.22)]`}
                      style={{ animation: `${anim} ease-in-out infinite` }}
                      priority
                    />
                  );
                })}
              </div>
              {/* Badge */}
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.15] sm:leading-[1.1] text-[#1a1a1a] dark:text-white mb-8 wow fadeInUp px-4 sm:px-0" data-wow-delay=".1s">
                The <span className="text-[#4CAF50]" style={{ textShadow: '0 0 40px rgba(76, 175, 80, 0.5)' }}>Amazon Skipper</span> <span className="text-white">Story</span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10 font-light wow fadeInUp" data-wow-delay=".18s">
                Founded in late 2022 by Amazon expert Huzaifa, our team is made up of seasoned PPC experts, data scientists, and creative problem-solvers who are passionate about one thing: helping sellers like you win on Amazon.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center wow fadeInUp" data-wow-delay=".26s">
                <ButtonPrimary type={2} isIcon={true} url="/contact">
                  Get Your Free Audit
                </ButtonPrimary>
                <button className="px-8 py-4 border-2 border-[#1a1a1a] dark:border-white/30 text-[#1a1a1a] dark:text-white hover:bg-[#1a1a1a] dark:hover:bg-white/10 hover:text-white dark:hover:text-white rounded-15px font-bold text-lg transition-all duration-300">
                  See Our Results
                </button>
              </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* The Amazon Skipper Story Section */}
      <section id="our-story" className="py-100px md:py-120px lg:py-140px bg-white dark:bg-[#121212] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20 wow fadeInUp" data-wow-delay=".05s">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] dark:text-white mb-6 leading-tight">
                Building a Better Way
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] mx-auto"></div>
            </div>

            {/* Story Content */}
            <div className="space-y-8 md:space-y-10">
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-30px p-8 md:p-12 border border-[#4CAF50]/30 wow fadeInUp" data-wow-delay=".12s">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light">
                  We saw too many sellers struggling with underperforming ads, skyrocketing ACoS, and a lack of real results. We knew there had to be a better way.
                </p>
              </div>

              <div className="prose prose-lg md:prose-xl max-w-none space-y-6 wow fadeInUp" data-wow-delay=".2s">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                  So, we built a different kind of agency. One that's obsessed with data, transparency, and results. But our team is more than numbers & algorithms. We're a passionate group of individuals who genuinely care about your success. We celebrate your wins as our own, and we're always here to lend a helping hand, no matter the challenge.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                  With our belief in transparency, collaboration, and a relentless focus on ROI, we're not afraid to challenge the norm and push boundaries to make you grow YOUR Amazon Business beyond boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="our-vision" className="py-100px md:py-120px lg:py-140px bg-white dark:bg-gradient-to-br dark:from-[#121212] dark:via-[#1a1a1a] dark:to-[#121212] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20 wow fadeInUp" data-wow-delay=".05s">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] dark:text-white mb-6 leading-tight">
                Our Vision For Your
                <span className="block text-[#4CAF50]">Amazon Growth</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] mx-auto"></div>
            </div>

            {/* Vision Content */}
            <div className="space-y-8 md:space-y-10">
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-30px p-8 md:p-12 border border-[#4CAF50]/30 wow fadeInUp" data-wow-delay=".12s">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light">
                  At Amazonskipper, we don't believe in luck or guesswork when it comes to Amazon advertising. We believe in data, in strategy, and in results.
                </p>
              </div>

              <div className="prose prose-lg md:prose-xl max-w-none space-y-6 wow fadeInUp" data-wow-delay=".2s">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                  But it's not just about us. It's about YOU. Your goals, your challenges, your vision for your brand. We take the time to understand your unique needs and tailor a strategy specifically created for you.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                  That's why we spent years dissecting Amazon's algorithms, studying market trends, and testing countless strategies. We've seen what works, what doesn't, and what truly moves the needle for sellers like you.
                </p>
              </div>

              <div className="prose prose-lg md:prose-xl max-w-none wow fadeInUp" data-wow-delay=".28s">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                  We're transparent, we're collaborative that's why we're not about vanity metrics or empty promises. Our only focus is maximizing your ROI, increasing your sales, and building a sustainable Amazon business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Huzaifa Section */}
      <section id="meet-huzaifa" className="py-100px md:py-120px lg:py-140px bg-white dark:bg-[#121212] relative overflow-hidden">
        <div className="container px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20 wow fadeInUp" data-wow-delay=".05s">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] dark:text-white mb-6 leading-tight">
                Meet Huzaifa
                <span className="block text-[#4CAF50]">The Brain Behind Amazon Skipper</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1 wow fadeInLeft" data-wow-delay=".12s">
                <div className="prose prose-lg md:prose-xl max-w-none">
                  <p className="text-lg md:text-xl lg:text-2xl text-[#4CAF50] leading-relaxed font-bold">
                    Huzaifa isn't your typical CEO. He's a fighter and a survivor who turned a five-year battle with cancer into a data-driven disruption of Amazon advertising.
                  </p>
                </div>

                <div className="prose prose-lg md:prose-xl max-w-none">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                    Faced with a life-altering diagnosis, he refused to let it define him. Instead, he channeled his energy into leveraging his natural talents for business & e-commerce.
                  </p>
                </div>

                <div className="prose prose-lg md:prose-xl max-w-none space-y-6">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                    Determined to build a brighter future for himself and his family, he got into the world of Amazon selling. But Huzaifa's ambition didn't stop there. He became obsessed with mastering Amazon's algorithms, and advertising strategies, analyzing data, and experimenting relentlessly.
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                    Today, Huzaifa is not only a cancer survivor but the CEO of Amazonskipper, a company he founded to empower Amazon sellers with the knowledge and tools they need to grow a profitable business.
                  </p>
                </div>

                <div className="prose prose-lg md:prose-xl max-w-none">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                    His hand-picked team of Amazon enthusiasts shares his passion for data & results, working tirelessly to understand the inner workings of the platform.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xl md:text-2xl font-bold text-[#4CAF50] leading-relaxed">
                    So, Amazonskipper is all about your resilience, data-driven decision-making, and commitment to your unstoppable Amazon growth.
                  </p>
                </div>
              </div>

              {/* Right Column - Image/Visual Element */}
              <div className="relative order-1 lg:order-2 wow fadeInRight" data-wow-delay=".18s">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Decorative Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/20 to-[#2E7D32]/20 rounded-30px transform rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 to-[#2E7D32]/10 rounded-30px transform -rotate-6"></div>
                  
                  {/* Image Container */}
                  <div className="relative rounded-30px overflow-hidden h-full border border-[#4CAF50]/30 shadow-2xl">
                    <Image
                      src="/img/hero/Huzaifa's Portrait.png"
                      alt="Huzaifa - Founder & CEO of Amazon Skipper"
                      width={600}
                      height={600}
                      className="w-full h-full object-contain object-top bg-black"
                      priority
                    />
                    {/* Overlay Gradient for better text visibility if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#4CAF50]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4CAF50]/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-100px bg-gradient-to-br from-black via-[#1a1a1a] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/30 via-transparent to-[#4CAF50]/20"></div>
        <div className="absolute inset-0 opacity-[0.1]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative overflow-hidden rounded-[30px] border border-[#4CAF50]/30 bg-gradient-to-br from-black via-[#121212] to-[#4CAF50] px-8 py-12 sm:px-12 md:px-16 md:py-14 shadow-[0_40px_120px_-60px_rgba(34,197,94,0.55)]">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-[#4CAF50] rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-[#0EA5E9] rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <h3 className="text-3xl md:text-4xl font-black text-white">Let’s Scale Smarter</h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                  Scaling fast is easy. Scaling safely is strategy. Discover how we grow brands without burning budgets.
                </p>
                <ButtonPrimary type={2} isIcon={true} url="/contact">
                  Let's Scale Smarter
                </ButtonPrimary>
              </div>
            </div>
          </div>
          <FunfacTsection1 />
        </div>
      </section>

			{/* Testimonials Section */}
			<section id="testimonials" className="wow fadeInUp py-80px md:py-100px bg-[#050505] dark:bg-[#0a0a0a] scroll-mt-[130px]" data-wow-delay=".40s">
				<div className="container">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-white">
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
										<h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
											{testimonial.achievement}
										</h3>

										{/* Quote */}
										<blockquote className="text-lg md:text-xl text-gray-300 italic mb-8 max-w-3xl leading-relaxed">
											{testimonial.quote}
										</blockquote>

										{/* Author Name */}
										<p className="text-xl md:text-2xl font-bold text-white mb-3">
											{testimonial.authorName}
										</p>

										{/* Stars Rating */}
										<div className="flex gap-1 mb-3 justify-center">
											{[...Array(testimonial.rating)].map((_, i) => (
												<i key={i} className="fas fa-star text-white text-xl"></i>
											))}
										</div>

										{/* Author Title */}
										<p className="text-lg text-gray-400">
											{testimonial.authorTitle}
										</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>

      {isClient && (
        <section className="relative py-28 bg-gradient-to-br from-[#0f172a] via-black to-[#0f172a]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/30 via-transparent to-[#0f172a]/40"></div>
            <div className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {successStories.slice(1).map(story => (
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
      )}

      {/* Call-to-Action Section */}
      <section id="cta" className="relative py-100px md:py-120px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#121212] to-[#4CAF50]/40"></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#22C55E] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#22d3ee] rounded-full blur-[130px]"></div>
        </div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-4xl mx-auto rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-md p-10 md:p-14 text-center text-white shadow-[0_40px_120px_-60px_rgba(34,197,94,0.55)] wow fadeInUp" data-wow-delay=".05s">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Get My Growth Audit
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/80 leading-relaxed">
              Find exactly where your ad spend, listings, or strategy are leaking profit — before it costs another dollar.
            </p>
            <div className="flex justify-center wow fadeInUp" data-wow-delay=".15s">
              <ButtonPrimary type={2} isIcon={true} url="/contact">
                Get My Growth Audit
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMain;
