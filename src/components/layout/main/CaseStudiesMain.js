"use client";
import { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import getCaseStudies from "@/libs/getCaseStudies";

// Case Study Item Component
const CaseStudyItem = ({ caseStudy, index }) => {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    revenue: 0,
    acos: caseStudy?.after?.metrics?.acos?.before || 42,
    tacos: caseStudy?.after?.metrics?.tacos?.before || 28,
  });

  useEffect(() => {
    setIsClient(true);
    
    // Scroll animation observer - wait for element to be in DOM
    let scrollObserver = null;
    let timeoutId = null;

    const setupScrollAnimation = () => {
      const caseStudyElement = document.getElementById(`case-study-${index}`);
      if (!caseStudyElement) {
        // Retry if element not found yet
        timeoutId = setTimeout(setupScrollAnimation, 100);
        return;
      }

      // Check if element is already in view (for first case study)
      const rect = caseStudyElement.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInView && index === 0) {
        // First case study - show immediately if already in view
        setIsVisible(true);
        return;
      }

      scrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (scrollObserver) {
                scrollObserver.disconnect();
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      scrollObserver.observe(caseStudyElement);
    };

    setupScrollAnimation();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (scrollObserver) scrollObserver.disconnect();
    };
  }, [index]);

  useEffect(() => {
    setIsClient(true);
    
    if (!caseStudy?.after?.metrics) return;
    
    const { revenue, acos, tacos } = caseStudy.after.metrics;
    
    // Animate metrics on scroll
    const animateMetrics = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate revenue
              let current = revenue.before;
              const target = revenue.after;
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

              // Animate ACoS
              let acosCurrent = acos.before;
              const acosTarget = acos.after;
              const acosIncrement = (acosCurrent - acosTarget) / 60;
              const acosInterval = setInterval(() => {
                acosCurrent -= Math.abs(acosIncrement);
                if (acosCurrent <= acosTarget) {
                  acosCurrent = acosTarget;
                  clearInterval(acosInterval);
                }
                setAnimatedMetrics((prev) => ({
                  ...prev,
                  acos: Math.round(acosCurrent * 10) / 10,
                }));
              }, 30);

              // Animate TACoS
              let tacosCurrent = tacos.before;
              const tacosTarget = tacos.after;
              const tacosIncrement = (tacosCurrent - tacosTarget) / 60;
              const tacosInterval = setInterval(() => {
                tacosCurrent -= Math.abs(tacosIncrement);
                if (tacosCurrent <= tacosTarget) {
                  tacosCurrent = tacosTarget;
                  clearInterval(tacosInterval);
                }
                setAnimatedMetrics((prev) => ({
                  ...prev,
                  tacos: Math.round(tacosCurrent * 10) / 10,
                }));
              }, 30);

              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      const metricsSection = document.getElementById(`metrics-section-${index}`);
      if (metricsSection) {
        observer.observe(metricsSection);
      }

      return () => observer.disconnect();
    };

    animateMetrics();
  }, [caseStudy, index]);

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

  if (!caseStudy) return null;

  const { revenue, acos, tacos } = caseStudy.after.metrics;
  const revenueIncrease = ((revenue.after / revenue.before - 1) * 100).toFixed(0);
  const acosReduction = (acos.before - acos.after).toFixed(0);
  const tacosReduction = (((tacos.before - tacos.after) / tacos.before) * 100).toFixed(0);

  return (
    <div 
      id={`case-study-${index}`}
      className={`${index > 0 ? "mt-20 md:mt-24" : ""} transition-all duration-700 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
    >
      {/* Case Study Header */}
      <div className="mb-16 md:mb-20">
        <div className="inline-block px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
          {caseStudy.header.badge}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] dark:text-white mb-6 leading-tight">
          {caseStudy.header.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          {caseStudy.header.description}
        </p>
      </div>

      {/* Before Section */}
      <div className={`mb-20 md:mb-24 transition-all duration-700 ease-out delay-[100ms] ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-6"
      }`}>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-30px p-8 md:p-12 border-2 border-red-200 dark:border-red-800/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">✕</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#1a1a1a] dark:text-white">
              {caseStudy.before.title}
            </h3>
          </div>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
            {caseStudy.before.description}
          </p>

          {/* Before Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {caseStudy.before.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1a1a1a] rounded-20px p-6 border-2 border-red-200 dark:border-red-800/50">
                <div className="text-3xl md:text-4xl font-black text-red-600 dark:text-red-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-xs text-red-600 dark:text-red-400 mt-2 font-semibold">
                  {metric.status}
                </div>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 italic">
            {caseStudy.before.summary}
          </p>
        </div>
      </div>

      {/* Strategy Section */}
      <div className={`mb-20 md:mb-24 transition-all duration-700 ease-out delay-[200ms] ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-6"
      }`}>
        <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-30px p-8 md:p-12 border border-[#4CAF50]/30">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#4CAF50] font-bold text-xl">✓</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white">
              {caseStudy.strategy.title}
            </h3>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {caseStudy.strategy.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.strategy.items.map((strategy, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-20px p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-3">{strategy.title}</h4>
                <p className="text-white/80 leading-relaxed">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* After Section - Metrics */}
      <div 
        id={`metrics-section-${index}`} 
        className={`mb-20 md:mb-24 transition-all duration-700 ease-out delay-[300ms] ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-30px p-8 md:p-12 border-2 border-[#4CAF50] dark:border-[#4CAF50]/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#1a1a1a] dark:text-white">
              {caseStudy.after.title}
            </h3>
          </div>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
            {caseStudy.after.description}
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
                vs {formatCurrency(revenue.before)} previously
              </div>
              
              {/* Simple Bar Chart Visualization */}
              <div className="mt-6 flex items-end gap-1 h-24">
                {Array.from({length: 30}).map((_, i) => {
                  // Use deterministic pattern based on index to avoid hydration mismatch
                  const seed = (i * 7 + 13) % 100;
                  const height = 30 + (seed * 0.6) + (i > 15 ? 20 : 0);
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
                  {isClient ? formatCurrency(animatedMetrics.revenue) : formatCurrency(revenue.after)} in 6 Months
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300">
                  While achieving {isClient ? formatPercent(animatedMetrics.acos) : formatPercent(acos.after)} ACoS
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
                  {revenue.label}
                </div>
                <div className="text-2xl font-black text-[#4CAF50] mb-1">
                  {isClient ? formatCurrency(animatedMetrics.revenue) : formatCurrency(revenue.after)}
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
                  {acos.label}
                </div>
                <div className="text-2xl font-black text-[#4CAF50] mb-1">
                  {isClient ? formatPercent(animatedMetrics.acos) : formatPercent(acos.after)}
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
                  {tacos.label}
                </div>
                <div className="text-2xl font-black text-[#4CAF50] mb-1">
                  {isClient ? formatPercent(animatedMetrics.tacos) : formatPercent(tacos.after)}
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
                From {formatCurrency(revenue.before)} to {formatCurrency(revenue.after)} monthly
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
                From {acos.before}% to {acos.after}%
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
                From {tacos.before}% to {tacos.after}%
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/50 dark:bg-[#1a1a1a]/50 rounded-20px backdrop-blur-sm">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              {caseStudy.after.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const CaseStudiesMain = () => {
  const caseStudies = getCaseStudies();
  const featuredCaseStudy = caseStudies.find(cs => cs.featured) || caseStudies[0];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#f8f9fa] to-white dark:from-black dark:via-[#0a0a0a] dark:to-[#121212] pt-130px md:pt-150px lg:pt-160px">
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
                {featuredCaseStudy.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-[#1a1a1a] dark:text-white mb-8">
              {featuredCaseStudy.hero.title.split(' ')[0]} <span className="text-[#4CAF50]" style={{textShadow: '0 0 40px rgba(76, 175, 80, 0.3)'}}>{featuredCaseStudy.hero.titleHighlight}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10 font-light">
              {featuredCaseStudy.hero.description}
            </p>

            {/* Stats Counter */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
              {featuredCaseStudy.hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-[#4CAF50] mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Studies Section */}
      <section className="py-100px md:py-120px lg:py-140px bg-white dark:bg-[#121212] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container relative z-10 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Render all case studies */}
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyItem key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}

            {/* CTA Section - Only show once at the end */}
            {caseStudies.length > 0 && (
              <div className="text-center bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-30px p-12 md:p-16 border border-[#4CAF50]/30 relative overflow-hidden mt-20">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                    {caseStudies[0].cta.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                    {caseStudies[0].cta.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {caseStudies[0].cta.buttons.map((button, idx) => (
                      button.type === "primary" ? (
                        <ButtonPrimary key={idx} type={2} isIcon={true} url={button.url}>
                          {button.text}
                        </ButtonPrimary>
                      ) : (
                        <button key={idx} className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#4CAF50] rounded-15px font-bold text-lg transition-all duration-300 transform hover:scale-105">
                          {button.text}
                        </button>
                      )
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesMain;

