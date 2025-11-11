"use client";

import About6 from "@/components/sections/about/About6";
import Contact3 from "@/components/sections/contact/Contact3";
//import Blogs5 from "@/components/sections/blogs/Blogs5";
import Brands2 from "@/components/sections/brands/Brands2";
import Hero9 from "@/components/sections/heros/Hero9";
import BrandMarque from "@/components/sections/marquee/BrandMarque";
import FeatureMarque2 from "@/components/sections/marquee/FeatureMarque2";
import Portfolio9 from "@/components/sections/portfolio/Portfolio9";
//import Resume5 from "@/components/sections/resume/Resume5";
//import Services6 from "@/components/sections/services/Services6";
import Skills4 from "@/components/sections/skills/Skills4";
import Testimonials9 from "@/components/sections/testimonials/Testimonials9";
import FunfacTsection1 from "@/components/sections/funfact/FunfacTsection1";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useState } from "react";

const faqs = [
	{
		question: "What is Amazon Skipper?",
		answer:
			"Amazon Skipper is an eCommerce growth agency helping Amazon sellers scale with clarity and control. Since 2018, we’ve focused on one goal — bringing sellers peace of mind while their brands grow steadily across Amazon, Shopify, and TikTok Shop.",
	},
	{
		question: "What services do you offer?",
		answer:
			"We help brands with complete Amazon growth — from product launch and PPC management to listing optimization, strategy, and expansion. In short: everything it takes to grow your brand without burning out.",
	},
	{
		question: "Is everything handled in-house?",
		answer:
			"Yes — our specialists handle PPC, listings, creative, and analytics internally. That’s how we maintain consistent quality and strategy alignment across your entire account.",
	},
	{
		question: "Can you guarantee results?",
		answer:
			"We guarantee effort, expertise, and a proven process. If specific targets aren’t met under a results-based partnership, our refund or adjustment policy kicks in — it’s part of our risk-reversal promise.",
	},
	{
		question: "How long does it take to see results after working with Amazon Skipper?",
		answer:
			"It depends on your product stage and category. Most brands start seeing measurable improvements — in spend efficiency, sessions, or sales — within the first 4–8 weeks of structured management.",
	},
	{
		question: "Do you manage creatives too (images, videos, A+ content)?",
		answer:
			"Yes, we do. Our creative team designs optimized listing visuals, A+ modules, and short-form brand content that align with your positioning and conversion goals.",
	},
	{
		question: "What makes you different from other Amazon agencies?",
		answer:
			"We don’t just manage ads — we manage peace of mind. Our approach blends performance with structure, ensuring you scale profitably without the chaos that usually comes with “growth.”",
	},
	{
		question: "What’s included in your Brand Audit Call?",
		answer:
			"A 15–20 minute overview of your current setup — PPC structure, listings, and performance gaps. You’ll leave with a clear picture of what’s blocking your profit and what we’d fix first.",
	},
];

const Index9Main = () => {
	const [activeFaq, setActiveFaq] = useState(0);

	return (
		<main className="overflow-hidden">
			<div className="wow fadeIn" data-wow-delay=".05s">
				<Hero9 />
			</div>
			<section className="wow fadeInUp bg-black py-16" data-wow-delay=".08s">
				<div className="container">
					<FunfacTsection1 />
				</div>
			</section>
			<div className="wow fadeInUp" data-wow-delay=".12s">
				<BrandMarque type={2} />
			</div>
			<div className="wow fadeInUp" data-wow-delay=".16s">
				<Brands2 />
			</div>
			<div className="wow fadeInUp" data-wow-delay=".20s">
				<Skills4 />
			</div>
			<div className="wow fadeInUp" data-wow-delay=".24s">
				<FeatureMarque2 type={3} isRotate={true} />
			</div>
			{/* <Blogs5 /> */}
			<div className="wow fadeInUp" data-wow-delay=".28s">
				<About6 />
			</div>
			<div className="wow fadeInUp" data-wow-delay=".40s">
				<Testimonials9 sectionClassName="py-80px md:py-100px bg-[#050505] dark:bg-[#0a0a0a]" />
			</div>
			{/* <Services6 type={2} /> */}
			<div className="wow fadeInUp" data-wow-delay=".32s">
				<Portfolio9 />
			</div>
			<div className="wow fadeInUp" data-wow-delay=".36s">
				<FeatureMarque2 type={3} isRotate={true} />
			</div>
			
			<section className="py-70px md:py-100px bg-white dark:bg-[#121212]">
				<div className="container">
					<div className="text-center mb-40px">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] dark:text-white">
							FAQ's
						</h2>
					</div>
					<div className="max-w-5xl mx-auto">
						<div className="rounded-25px bg-white dark:bg-black/40 border border-[#e5e7eb] dark:border-white/10 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.45)] p-25px sm:p-35px">
							<ul className="space-y-10 sm:space-y-12">
								{faqs.map(({ question, answer }, idx) => {
									const isActive = activeFaq === idx;
									return (
										<li
											key={question}
											className="border-b border-[#e5e7eb] dark:border-white/10 last:border-none pb-10 last:pb-0"
										>
											<button
												type="button"
												onClick={() => setActiveFaq(prev => (prev === idx ? -1 : idx))}
												aria-expanded={isActive}
												className="flex w-full items-start justify-between gap-4 text-left"
											>
												<div>
													<span className="mb-3 inline-flex items-center rounded-full bg-[#4CAF50]/10 dark:bg-[#4CAF50]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
														Q{idx + 1}
													</span>
													<h3 className="text-xl sm:text-2xl font-semibold leading-[1.35] text-[#121212] dark:text-white">
														{question}
													</h3>
												</div>
												<div
													className={`flex-shrink-0 rounded-full border border-[#4CAF50]/40 dark:border-white/20 text-[#4CAF50] dark:text-white w-11 h-11 inline-flex items-center justify-center transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}
												>
													<i className="fa-regular fa-plus text-lg"></i>
												</div>
											</button>
											<div
												className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? "mt-6 max-h-[420px]" : "max-h-0"}`}
											>
												<p className="text-base md:text-lg leading-relaxed text-[#374151] dark:text-white/80 pr-4">
													{answer}
												</p>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="mt-16 max-w-5xl mx-auto">
						<div className="relative overflow-hidden rounded-[32px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0b1f14] to-[#22C55E]/40 px-8 py-10 sm:px-12 md:px-16 md:py-14 shadow-[0_30px_90px_-45px_rgba(34,197,94,0.6)]">
							<div className="absolute inset-0 pointer-events-none opacity-30">
								<div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-[#22C55E] blur-[130px]" />
								<div className="absolute bottom-[-25%] right-1/4 h-64 w-64 rounded-full bg-[#0EA5E9] blur-[150px]" />
							</div>
							<div className="relative z-10 flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-center">
								<div className="max-w-3xl space-y-3 text-center mx-auto">
									<h3 className="text-2xl md:text-3xl font-semibold leading-tight text-white">
										Build My Calm Growth Plan
									</h3>
									<p className="text-base md:text-lg text-white/80 leading-relaxed">
										You don’t need louder ads - you need a predictable system. Let’s build your peace-of-mind plan today.
									</p>
								</div>
								<ButtonPrimary type={2} isIcon={true} url="/contact">
									Build My Calm Growth Plan
								</ButtonPrimary>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <Resume5 type={2} /> */}
			{/* <Testimonials9 /> */}
			
			<Contact3 />

			{/* CTA Section */}
			<section id="cta" className="py-100px md:py-120px lg:py-140px bg-white dark:bg-[#121212] relative overflow-hidden">
				<div className="container relative z-10 px-6 md:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<div
							className="text-center bg-gradient-to-br from-black via-[#121212] to-[#4CAF50] rounded-30px p-12 md:p-16 border border-[#4CAF50]/30 relative overflow-hidden wow zoomIn"
							data-wow-delay=".42s"
						>
							<div className="absolute inset-0 opacity-10">
								<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl"></div>
								<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl"></div>
							</div>
							<div className="relative z-10">
								<h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 wow fadeInUp" data-wow-delay=".48s">
									Book Your Free Strategy Call
								</h3>
								<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto wow fadeInUp" data-wow-delay=".52s">
									Ready to stop guessing and start scaling? Let's walk you through how we cut chaos and build stable growth.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center wow fadeInUp" data-wow-delay=".58s">
									<ButtonPrimary type={2} isIcon={true} url="/contact">
										Book Your Free Strategy Call
									</ButtonPrimary>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Index9Main;
