"use client";
import { useState } from "react";
import Image from "next/image";
import Testimonials9 from "@/components/sections/testimonials/Testimonials9";
import Testimonials4 from "@/components/sections/testimonials/Testimonials4";

const TestimonialsMain = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const successStories = [
    {
      id: 1,
      clientName: "Sarah Martinez",
      company: "TechGear Solutions",
      achievement: "10x ROAS in 60 Days",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/img/testimonials/user/1.jpg",
      metric: "50% Cost Reduction",
      industry: "Electronics"
    },
    {
      id: 2,
      clientName: "David Chen",
      company: "Home Essentials Plus",
      achievement: "300% Revenue Growth",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/img/testimonials/user/2.jpg",
      metric: "45% ACoS Improvement",
      industry: "Home & Kitchen"
    },
    {
      id: 3,
      clientName: "Emily Rodriguez",
      company: "Fitness Pro Gear",
      achievement: "5x Ad Performance",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/img/testimonials/user/3.jpg",
      metric: "60% Lower CPC",
      industry: "Health & Fitness"
    },
    {
      id: 4,
      clientName: "Michael Thompson",
      company: "BeautyCare Co",
      achievement: "8x Return on Investment",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/img/testimonials/user/4.jpg",
      metric: "35% Sales Increase",
      industry: "Beauty & Personal Care"
    }
  ];
  return (
    <main>
      <section className="relative min-h-[320px] md:min-h-[380px] flex items-center overflow-hidden bg-[#0a0a0a] pt-130px md:pt-150px lg:pt-160px pb-130px md:pb-150px lg:pb-160px">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#4CAF50]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-[#4CAF50]/5 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(76, 175, 80, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(76, 175, 80, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        <div className="container relative z-10 px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="max-w-5xl">
                <span className="inline-block mb-4 px-5 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full text-[#4CAF50] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  What Clients Say
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05]">
                  Testimonials
                </h1>
                <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl">
                  Real stories from brands we’ve helped win on Amazon. Explore a variety of formats curated from across the site.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-30px p-1 bg-gradient-to-br from-[#4CAF50] via-[#2E7D32] to-[#FF6B35] shadow-[0_25px_70px_rgba(76,175,80,0.25)]">
                <div className="absolute inset-0 rounded-30px bg-[#4CAF50]/20 blur-3xl opacity-40 -z-10"></div>
                <div className="relative rounded-25px bg-[#070707]/90 dark:bg-[#040404]/95 border border-white/10 overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Client Stories"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section (from ServicesMain) */}
      <section id="success-stories" className="py-100px bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#0a0a0a] relative overflow-hidden scroll-mt-[130px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/10 via-transparent to-[#4CAF50]/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
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
        </div>
      </section>





      <section className="pt-30px pb-80px bg-white dark:bg-[#121212]">
        <Testimonials4 compact={true} idAttr={undefined} />
      </section>
    </main>
  );
};

export default TestimonialsMain;


