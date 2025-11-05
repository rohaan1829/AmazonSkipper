"use client";
import { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const CaseStudiesMain = () => {
  const [isClient, setIsClient] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    revenue: 0,
    acos: 42,
    tacos: 28,
  });

  useEffect(() => {
    setIsClient(true);
    
    // Animate metrics on scroll
    const animateMetrics = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate revenue from 45k to 205k
              let current = 45000;
              const target = 205000;
              const increment = (target - current) / 60;
              const revenueInterval = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(revenueInterval);
                }
                setAnimatedMetrics((prev) => ({
                  ...prev,
                  revenue: Math.round(current),
                }));
              }, 30);

              // Animate ACoS from 42% to 18%
              let acos = 42;
              const acosTarget = 18;
              const acosIncrement = (acos - acosTarget) / 60;
              const acosInterval = setInterval(() => {
                acos -= Math.abs(acosIncrement);
                if (acos <= acosTarget) {
                  acos = acosTarget;
                  clearInterval(acosInterval);
                }
                setAnimatedMetrics((prev) => ({
                  ...prev,
                  acos: Math.round(acos * 10) / 10,
                }));
              }, 30);

              // Animate TACoS from 28% to 14%
              let tacos = 28;
              const tacosTarget = 14;
              const tacosIncrement = (tacos - tacosTarget) / 60;
              const tacosInterval = setInterval(() => {
                tacos -= Math.abs(tacosIncrement);
                if (tacos <= tacosTarget) {
                  tacos = tacosTarget;
                  clearInterval(tacosInterval);
                }
                setAnimatedMetrics((prev) => ({
                  ...prev,
                  tacos: Math.round(tacos * 10) / 10,
                }));
              }, 30);

              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      const metricsSection = document.getElementById("metrics-section");
      if (metricsSection) {
        observer.observe(metricsSection);
      }

      return () => observer.disconnect();
    };

    animateMetrics();
  }, []);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatPercent = (num) => {
    return `${num.toFixed(1)}%`;
  };

  const revenueIncrease = ((205000 / 45000 - 1) * 100).toFixed(0);
  const acosReduction = (42 - 18).toFixed(0);
  const tacosReduction = ((28 - 14) / 28 * 100).toFixed(0);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#f8f9fa] to-white dark:from-black dark:via-[#0a0a0a] dark:to-[#121212] pt-130px md:pt-150px lg:pt-180px pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#4CAF50]/5 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(76, 175, 80, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(76, 175, 80, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full text-[#4CAF50] text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                Success Stories
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-[#1a1a1a] dark:text-white mb-8">
              Case <span className="text-[#4CAF50]" style={{textShadow: '0 0 40px rgba(76, 175, 80, 0.3)'}}>Studies</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10 font-light">
              Witness how we help businesses transform from struggling to successful on Amazon. Become an Amazon success story with our tailored solutions and proven track record.
            </p>

            {/* Stats Counter */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#4CAF50] mb-2">100+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#4CAF50] mb-2">355%</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider">Avg. Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#4CAF50] mb-2">24pt</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider">ACoS Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Section */}
      <section className="py-100px md:py-120px lg:py-140px bg-white dark:bg-[#121212] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Case Study Header */}
            <div className="mb-16 md:mb-20">
              <div className="inline-block px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                Featured Case Study
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] dark:text-white mb-6 leading-tight">
                A Compelling Turnaround: From Stagnation to Momentum
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
                Want a blueprint for turning an under‑performing Amazon brand into a runaway success? Read on to see how a natural‑protein‑bar maker overcame fierce competition, poor visibility, and soaring ad costs — and emerged stronger than ever. This journey illustrates how clear strategy and disciplined execution can make numbers soar.
              </p>
            </div>

            {/* Before Section */}
            <div className="mb-20 md:mb-24">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-30px p-8 md:p-12 border-2 border-red-200 dark:border-red-800/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✕</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#1a1a1a] dark:text-white">
                    Before We Stepped In
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
                  The company produces natural protein bars, but was struggling on Amazon. Its listings were inefficiently structured, competitors were drawing away potential customers, and shifts in demand across seasons caused erratic sales. All of this led to a lacklustre performance:
                </p>

                {/* Before Metrics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-20px p-6 border-2 border-red-200 dark:border-red-800/50">
                    <div className="text-3xl md:text-4xl font-black text-red-600 dark:text-red-400 mb-2">
                      $45K
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                      Monthly Revenue
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400 mt-2 font-semibold">
                      Stuck & Stagnant
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-20px p-6 border-2 border-red-200 dark:border-red-800/50">
                    <div className="text-3xl md:text-4xl font-black text-red-600 dark:text-red-400 mb-2">
                      42%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                      Advertising Cost of Sales
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400 mt-2 font-semibold">
                      Eating Into Profits
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-20px p-6 border-2 border-red-200 dark:border-red-800/50">
                    <div className="text-3xl md:text-4xl font-black text-red-600 dark:text-red-400 mb-2">
                      28%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                      Total ACoS (TACoS)
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400 mt-2 font-semibold">
                      Heavy Paid Reliance
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 italic">
                  These metrics painted a picture of a brand spending too much and gaining too little.
                </p>
              </div>
            </div>

            {/* Strategy Section */}
            <div className="mb-20 md:mb-24">
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-30px p-8 md:p-12 border border-[#4CAF50]/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#4CAF50] font-bold text-xl">✓</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white">
                    The Skipper Strategy
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  To right the ship, we crafted a multifaceted plan anchored in proven tactics from successful Amazon case studies:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Product & Listing Rebuild",
                      desc: "Thorough keyword research and incorporated popular, purchase‑driven phrases into product titles and descriptions. Enhanced product detail pages featured lifestyle imagery, and variant groupings were reorganised to improve browsing."
                    },
                    {
                      title: "Cross‑Selling & Complementary Products",
                      desc: "Popular nut mixes were prominently featured on new bar listings, creating synergy between established and new items. Advertisements promoted complementary bundles and special deals to encourage larger orders."
                    },
                    {
                      title: "Advertising & Search Strategy",
                      desc: "Branded keyword‑protection campaigns safeguarded existing traffic, visibility campaigns targeted top search phrases and seasonally timed promotions tapped into fitness demand. Weekly bid tweaks and bidding multipliers for premium ad placements kept spend efficient."
                    },
                    {
                      title: "Creative Optimisation",
                      desc: "Invested in high‑quality photos and videos showcasing the bars' appearance and serving ideas. These upgraded visuals increased shopper engagement and purchase likelihood."
                    },
                    {
                      title: "Budget Reallocation & Marketplace Management",
                      desc: "Ad spend was shifted away from weaker regions to marketplaces where the brand reliably controlled the buy‑box. Budgets focused on terms that yielded conversions, and product‑targeting campaigns were streamlined."
                    },
                    {
                      title: "Display Remarketing",
                      desc: "Re‑engaged shoppers who had previously browsed the products, increasing conversion rates and maximizing return on ad spend."
                    }
                  ].map((strategy, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-20px p-6 border border-white/20">
                      <h4 className="text-xl font-bold text-white mb-3">{strategy.title}</h4>
                      <p className="text-white/80 leading-relaxed">{strategy.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* After Section - Metrics */}
            <div id="metrics-section" className="mb-20 md:mb-24">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-30px p-8 md:p-12 border-2 border-[#4CAF50] dark:border-[#4CAF50]/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#1a1a1a] dark:text-white">
                    The Calm After the Storm
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
                  Six months later, the brand's performance told a radically different story:
                </p>

                {/* After Metrics - Animated Dashboard Style */}
                <div className="bg-white dark:bg-[#1a1a1a] rounded-30px p-6 md:p-8 border-2 border-[#4CAF50]/30 mb-8">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#4CAF50] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AS</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Amazon Seller</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Performance Dashboard</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">🇺🇸</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">US Marketplace</span>
                    </div>
                  </div>

                  {/* Key Metrics Cards */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 rounded-20px p-6 border border-[#4CAF50]/20">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        Sales Today
                      </div>
                      <div className="text-3xl font-black text-[#4CAF50] mb-1">
                        {isClient ? formatCurrency(animatedMetrics.revenue / 30) : "$0"}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                        ↗ {revenueIncrease}% vs Previous
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 rounded-20px p-6 border border-[#4CAF50]/20">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        Units Sold Today
                      </div>
                      <div className="text-3xl font-black text-[#4CAF50] mb-1">
                        {isClient ? Math.round(animatedMetrics.revenue / 30 / 12) : "0"}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                        ↗ Consistent Growth
                      </div>
                    </div>
                  </div>

                  {/* Product Sales Overview */}
                  <div className="bg-gray-50 dark:bg-[#0a0a0a] rounded-20px p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        Product Sales
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Last 30 days
                      </div>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <div className="text-4xl font-black text-[#4CAF50]">
                        {isClient ? formatCurrency(animatedMetrics.revenue) : "$0"}
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                        ↗ {revenueIncrease}%↑ Previous 30 days
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      vs $45K previously
                    </div>
                    
                    {/* Simple Bar Chart Visualization */}
                    <div className="mt-6 flex items-end gap-1 h-24">
                      {Array.from({length: 30}).map((_, i) => {
                        const height = 30 + Math.random() * 60 + (i > 15 ? 20 : 0);
                        return (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#4CAF50] to-[#2E7D32] rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                            style={{ height: `${height}%` }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Highlight Box */}
                  <div className="bg-gradient-to-r from-orange-400/20 via-[#4CAF50]/20 to-purple-400/20 rounded-20px p-6 mb-6 border-2 border-[#4CAF50]/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="text-2xl md:text-3xl font-black text-[#1a1a1a] dark:text-white mb-2">
                        {isClient ? formatCurrency(animatedMetrics.revenue) : "$205,000"} in 6 Months
                      </div>
                      <div className="text-lg text-gray-700 dark:text-gray-300">
                        While achieving {isClient ? formatPercent(animatedMetrics.acos) : "18%"} ACoS
                      </div>
                      <div className="mt-4 inline-block px-4 py-2 bg-[#4CAF50] text-white rounded-full text-sm font-bold">
                        ↗ {revenueIncrease}% Growth
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-[#4CAF50]/10 to-transparent rounded-20px p-6 border border-[#4CAF50]/20 relative group hover:scale-105 transition-transform">
                      <div className="absolute top-2 right-2 w-8 h-8 bg-[#4CAF50]/20 rounded-full flex items-center justify-center group-hover:bg-[#4CAF50] transition-colors">
                        <span className="text-[#4CAF50] group-hover:text-white text-lg">🔍</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        Sales
                      </div>
                      <div className="text-2xl font-black text-[#4CAF50] mb-1">
                        {isClient ? formatCurrency(animatedMetrics.revenue) : "$205,000"}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Monthly Revenue
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#4CAF50]/10 to-transparent rounded-20px p-6 border border-[#4CAF50]/20 relative group hover:scale-105 transition-transform">
                      <div className="absolute top-2 right-2 w-8 h-8 bg-[#4CAF50]/20 rounded-full flex items-center justify-center group-hover:bg-[#4CAF50] transition-colors">
                        <span className="text-[#4CAF50] group-hover:text-white text-lg">🔍</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        ACoS
                      </div>
                      <div className="text-2xl font-black text-[#4CAF50] mb-1">
                        {isClient ? formatPercent(animatedMetrics.acos) : "18.0%"}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {acosReduction}pt Reduction
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#4CAF50]/10 to-transparent rounded-20px p-6 border border-[#4CAF50]/20 relative group hover:scale-105 transition-transform">
                      <div className="absolute top-2 right-2 w-8 h-8 bg-[#4CAF50]/20 rounded-full flex items-center justify-center group-hover:bg-[#4CAF50] transition-colors">
                        <span className="text-[#4CAF50] group-hover:text-white text-lg">🔍</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        TACoS
                      </div>
                      <div className="text-2xl font-black text-[#4CAF50] mb-1">
                        {isClient ? formatPercent(animatedMetrics.tacos) : "14.0%"}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {tacosReduction}% Reduction
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Results */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-20px p-6 border border-[#4CAF50]/30">
                    <div className="text-4xl md:text-5xl font-black text-[#4CAF50] mb-2">
                      {revenueIncrease}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Increase in Revenue
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      From $45K to $205K monthly
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-20px p-6 border border-[#4CAF50]/30">
                    <div className="text-4xl md:text-5xl font-black text-[#4CAF50] mb-2">
                      {acosReduction}pt
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      ACoS Reduction
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      From 42% to 18%
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-20px p-6 border border-[#4CAF50]/30">
                    <div className="text-4xl md:text-5xl font-black text-[#4CAF50] mb-2">
                      {tacosReduction}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      TACoS Reduction
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      From 28% to 14%
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/50 dark:bg-[#1a1a1a]/50 rounded-20px backdrop-blur-sm">
                  <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    Beyond these core metrics, profit margins increased dramatically, basket size grew thanks to cross‑selling, and the brand secured Amazon's Choice badges across multiple flavours. The transformation shows that with a clear plan and continual optimisation, even a struggling brand can chart a course to stability and long‑term growth.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-30px p-12 md:p-16 border border-[#4CAF50]/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                  Ready to Transform Your Amazon Business?
                </h3>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join hundreds of successful Amazon sellers who've transformed their businesses with our proven strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ButtonPrimary type={2} isIcon={true} url="/#contact">
                    Get Your Free Audit
                  </ButtonPrimary>
                  <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#4CAF50] rounded-15px font-bold text-lg transition-all duration-300 transform hover:scale-105">
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesMain;

