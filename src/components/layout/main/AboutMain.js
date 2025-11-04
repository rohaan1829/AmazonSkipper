"use client";
import { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const AboutMain = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stats = [
    { value: "500+", label: "Successful Campaigns" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "$82M+", label: "PPC Profits Managed" },
    { value: "47", label: "Days to Results" }
  ];

  return (
    <main>
      {/* Hero About Header */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-black dark:via-[#0a0a0a] dark:to-[#121212] pt-130px md:pt-150px lg:pt-160px">
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
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-6 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full text-[#4CAF50] text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                  About Amazon Skipper
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-[#1a1a1a] dark:text-white mb-8">
                <span className="block">The "Amazon Skipper"</span>
                <span className="block text-[#4CAF50]" style={{textShadow: '0 0 40px rgba(76, 175, 80, 0.5)'}}>
                  Story
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10 font-light">
                Founded in late 2022 by Amazon expert Huzaifa, our team is made up of seasoned PPC experts, data scientists, and creative problem-solvers who are passionate about one thing: helping sellers like you win on Amazon.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonPrimary type={2} isIcon={true} href="/#contact">
                  Get Your Free Audit
                </ButtonPrimary>
                <button className="px-8 py-4 border-2 border-[#1a1a1a] dark:border-white/30 text-[#1a1a1a] dark:text-white hover:bg-[#1a1a1a] dark:hover:bg-white/10 hover:text-white dark:hover:text-white rounded-15px font-bold text-lg transition-all duration-300">
                  See Our Results
                </button>
              </div>
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
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] dark:text-white mb-6 leading-tight">
                Building a Better Way
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] mx-auto"></div>
            </div>

            {/* Story Content */}
            <div className="space-y-8 md:space-y-10">
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-30px p-8 md:p-12 border border-[#4CAF50]/30">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light">
                  We saw too many sellers struggling with underperforming ads, skyrocketing ACoS, and a lack of real results. We knew there had to be a better way.
                </p>
              </div>

              <div className="prose prose-lg md:prose-xl max-w-none space-y-6">
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
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block px-4 py-2 bg-[#4CAF50]/20 text-[#4CAF50] rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] dark:text-white mb-6 leading-tight">
                Our Vision For Your
                <span className="block text-[#4CAF50]">Amazon Growth</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] mx-auto"></div>
            </div>

            {/* Vision Content */}
            <div className="space-y-8 md:space-y-10">
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-30px p-8 md:p-12 border border-[#4CAF50]/30">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light">
                  At Amazonskipper, we don't believe in luck or guesswork when it comes to Amazon advertising. We believe in data, in strategy, and in results.
                </p>
              </div>

              <div className="prose prose-lg md:prose-xl max-w-none space-y-6">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                  But it's not just about us. It's about YOU. Your goals, your challenges, your vision for your brand. We take the time to understand your unique needs and tailor a strategy specifically created for you.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
                  That's why we spent years dissecting Amazon's algorithms, studying market trends, and testing countless strategies. We've seen what works, what doesn't, and what truly moves the needle for sellers like you.
                </p>
              </div>

              <div className="prose prose-lg md:prose-xl max-w-none">
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
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] dark:bg-[#4CAF50]/20 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                The Founder
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] dark:text-white mb-6 leading-tight">
                Meet Huzaifa
                <span className="block text-[#4CAF50]">The Brain Behind Amazon Skipper</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="prose prose-lg md:prose-xl max-w-none">
                  <p className="text-lg md:text-xl lg:text-2xl text-[#4CAF50] leading-relaxed font-light">
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
              <div className="relative order-1 lg:order-2">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Decorative Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/20 to-[#2E7D32]/20 rounded-30px transform rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 to-[#2E7D32]/10 rounded-30px transform -rotate-6"></div>
                  
                  {/* Image Container */}
                  <div className="relative rounded-30px overflow-hidden h-full border border-[#4CAF50]/30 shadow-2xl">
                    <Image
                      src="/img/hero/huzaifa.png"
                      alt="Huzaifa - Founder & CEO of Amazon Skipper"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
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
        {/* Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/30 via-transparent to-[#4CAF50]/20"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.1]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              Numbers that speak for themselves
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center text-white max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="group transform hover:scale-110 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-20px p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-black mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <p className="text-lg md:text-xl opacity-90 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta" className="relative py-100px md:py-120px overflow-hidden bg-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Transform Your
              <span className="block text-white">Amazon Business?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Join hundreds of successful Amazon sellers who've transformed their businesses with our proven strategies. Let's build your unstoppable growth together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonPrimary type={2} isIcon={true} href="/#contact">
                Get Started Today
              </ButtonPrimary>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black rounded-15px font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMain;
