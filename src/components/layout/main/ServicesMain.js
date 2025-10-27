"use client";
import { useEffect, useState } from "react";
import getALlServices from "@/libs/getALlServices";
import Testimonials9 from "@/components/sections/testimonials/Testimonials9";

const ServicesMain = () => {
  const [services, setServices] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
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

  return (
    <main>
      {/* Hero Services Header */}
      <section className="relative py-100px bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#4CAF50]/20 overflow-hidden">
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

      {/* Enhanced Service Cards */}
      <section className="py-100px bg-white dark:bg-[#121212]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#121212] dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive Amazon business solutions designed to maximize your ROI and minimize your ad spend
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-white dark:bg-[#1a1a1a] rounded-20px p-8 border border-gray-200 dark:border-gray-700 hover:border-[#4CAF50] transition-all duration-300 hover:shadow-2xl hover:shadow-[#4CAF50]/20 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-15px flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${service.iconName} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.shortDesc}
                </p>
                <div className="text-[#4CAF50] font-semibold">
                  {service.totalProject}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Testimonials */}
      <Testimonials9 />

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
