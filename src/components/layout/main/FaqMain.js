"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";
import { useMemo, useState } from "react";

const FaqMain = () => {
	const faqs = useMemo(
		() => [
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
		],
		[]
	);

	const [activeFaq, setActiveFaq] = useState(0);

	const toggleFaq = index => {
		setActiveFaq(prevIndex => (prevIndex === index ? -1 : index));
	};

	return (
		<main className="overflow-hidden">
			{/* Hero */}
			<section className="relative z-0 min-h-screen flex items-center overflow-hidden bg-cream-light-color dark:bg-black-color pt-130px md:pt-150px lg:pt-160px pb-70px md:pb-100px">
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-color-light/20 blur-3xl"></div>
					<div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
				</div>
				<div className="container">
					<div className="grid gap-40px lg:gap-15 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] items-center">
						<div>
							<span className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs font-semibold text-primary-color dark:text-white-color wow fadeInDown">
								Frequently Asked
								<span className="w-2 h-2 rounded-full bg-primary-color-light inline-block"></span>
								Questions
							</span>
							<h1 className="mt-20px mb-25px text-4xl sm:text-size-45 lg:text-size-55 xl:text-size-65 font-semibold uppercase leading-1.1 text-seondary-color dark:text-white-color wow fadeInUp">
								Your clarity checkpoint before we scale together.
							</h1>
							<p className="max-w-[640px] text-base md:text-lg leading-1.7 text-body-color dark:text-gray-color-4 wow fadeInUp" data-wow-delay=".1s">
								Every Amazon brand is on its own voyage. These answers show you exactly how we steady the waters, reclaim your margins, and systemize growth without adding chaos.
							</p>
							<div className="mt-35px flex flex-wrap gap-20px wow fadeInUp" data-wow-delay=".2s">
								<ButtonPrimary href="/#contact" isIcon={true}>
									Talk to a Growth Skipper
								</ButtonPrimary>
							</div>
						</div>
						<div className="relative">
							<div className="rounded-25px bg-white-color dark:bg-[#111111] shadow-[0_35px_70px_-40px_rgba(0,0,0,0.35)] border border-[#000]/5 dark:border-white/10 p-30px flex flex-col gap-25px wow fadeInRight" data-wow-delay=".1s">
								<div>
									<p className="text-sm uppercase tracking-[0.3em] text-gray-color-2 dark:text-gray-color-4 mb-3">
										In their words
									</p>
									<p className="text-lg font-semibold text-seondary-color dark:text-white-color leading-1.6">
										“Amazon Skipper is the first team that gave us calm waters. We scale faster now — and actually sleep at night.”
									</p>
									<p className="mt-3 text-sm text-body-color-3 dark:text-gray-color-4">
										Operations Director, 8-Figure Amazon Brand
									</p>
								</div>
								<div className="h-[1px] bg-gradient-to-r from-transparent via-primary-color-light/30 to-transparent"></div>
								<ul className="grid grid-cols-2 gap-15px">
									{[
										{ value: "82M+", label: "Managed Ad Revenue" },
										{ value: "47", label: "Days to measurable impact" },
										{ value: "4.9/5", label: "Client confidence score" },
										{ value: "Zero Guesswork", label: "Promise we make (and keep)" },
									].map((item, idx) => (
										<li key={idx} className="rounded-20px bg-cream-light-color dark:bg-[#1A1A1A] px-4 py-6 text-center border border-transparent dark:border-white/10">
											<p className="text-2xl font-semibold text-primary-color-light dark:text-white-color">
												{item.value}
											</p>
											<p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-color-2 dark:text-gray-color-4">
												{item.label}
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section id="faq" className="py-70px md:py-110px bg-white-color dark:bg-primary-color-light">
				<div className="container">
					<div className="max-w-5xl mx-auto wow fadeInUp" data-wow-delay=".1s">
						<div className="rounded-25px bg-cream-light-color dark:bg-black-color border border-white/60 dark:border-white/10 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.45)] p-25px sm:p-35px">
							<ul className="space-y-12">
								{faqs.map(({ question, answer }, idx) => {
									const isActive = activeFaq === idx;
									return (
										<li
											key={question}
											className="border-b border-border-color last:border-none pb-12 last:pb-0"
										>
											<button
												type="button"
												onClick={() => toggleFaq(idx)}
												aria-expanded={isActive}
												className="flex w-full items-start justify-between gap-4 text-left"
											>
												<div>
													<span className="mb-3 inline-flex items-center rounded-full bg-white-color dark:bg-[#101010] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-color-light">
														Q{idx + 1}
													</span>
													<h3 className="text-xl sm:text-2xl font-semibold leading-1.4 text-[#4CAF50] dark:text-[#7DFFAE]">
														{question}
													</h3>
												</div>
												<div className={`flex-shrink-0 rounded-full border border-primary-color-light/40 text-primary-color-light dark:text-white-color dark:border-white/20 w-11 h-11 inline-flex items-center justify-center transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}>
													<i className="fa-regular fa-plus text-lg"></i>
												</div>
											</button>
												<div
													className={`transition-all duration-400 ease-in-out overflow-hidden ${isActive ? "mt-6 max-h-[420px]" : "max-h-0"}`}
												>
													<p className="text-base leading-1.8 text-body-color dark:text-white-color pr-6">
														{answer}
													</p>
												</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-60px md:py-90px bg-cream-light-color dark:bg-black-color">
				<div className="container">
					<div
						className="relative overflow-hidden text-center rounded-30px bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] px-30px py-40px md:px-60px md:py-70px text-white wow zoomIn"
						data-wow-delay=".1s"
					>
						<div className="absolute inset-0 opacity-10">
							<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
							<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
						</div>
						<div className="relative z-10 max-w-3xl mx-auto">
							<h2 className="text-3xl md:text-size-40 lg:text-size-45 font-semibold uppercase leading-1.2 mb-4">
								Start My Brand Turnaround
							</h2>
							<p className="text-base md:text-lg leading-1.8 text-white/85 mb-8">
								Growth doesn’t need to be dramatic — just disciplined. We’ll help you reset, rebuild, and scale profitably.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<ButtonPrimary href="/#contact" isIcon={true}>
									Start My Brand Turnaround
								</ButtonPrimary>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default FaqMain;


