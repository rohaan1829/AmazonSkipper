"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const TestimonialsMain = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
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
                      src="https://www.youtube.com/embed/5U66ATCyg4I?si=DXIVm5jJDIYOACaA"
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

			{/* CTA Section */}
			<section className="py-70px md:py-100px bg-white dark:bg-[#121212]">
				<div className="container">
					<div className="mt-16 max-w-5xl mx-auto">
						<div className="relative overflow-hidden rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#22C55E]/40 px-8 py-10 sm:px-12 md:px-16 md:py-14 shadow-[0_30px_90px_-45px_rgba(34,197,94,0.6)]">
							<div className="absolute inset-0 pointer-events-none opacity-30">
								<div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-[#22C55E] blur-[130px]" />
								<div className="absolute bottom-[-25%] right-1/4 h-64 w-64 rounded-full bg-[#0EA5E9] blur-[150px]" />
							</div>
							<div className="relative z-10 flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-center">
								<div className="max-w-3xl space-y-3 text-center mx-auto">
									<h3 className="text-2xl md:text-3xl font-semibold leading-tight text-white">
										Curious what actually drives our 6-month turnarounds?
									</h3>
									<p className="text-base md:text-lg text-white/80 leading-relaxed">
										Take a behind-the-scenes look at our approach and see how calm growth actually gets engineered.
									</p>
								</div>
								<ButtonPrimary type={2} isIcon={true} url="/contact">
									Show Me How It Works
								</ButtonPrimary>
							</div>
						</div>
					</div>
				</div>
			</section>
    </main>
  );
};

export default TestimonialsMain;


