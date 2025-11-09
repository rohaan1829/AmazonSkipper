"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { motion } from "framer-motion";

const onboardingSteps = [
	{
		title: "Discover & Strategize",
		description:
			"We start by understanding your business, products, audience, and Amazon goals. Using data-driven insights, we create a tailored strategy that identifies key opportunities and sets a clear path for growth.",
		icon: "fa-compass-drafting",
	},
	{
		title: "Launch & Optimize",
		description:
			"We handle everything from building and launching your campaigns to optimizing bids, targeting, and creatives. You focus on your business while we fine-tune performance to maximize your ROI.",
		icon: "fa-rocket-launch",
	},
	{
		title: "Scale & Elevate",
		description:
			"With results rolling in, we help you scale profitably—expanding into new markets, refining strategies, and continuously improving to keep you ahead of the competition.",
		icon: "fa-arrows-up-to-line",
	},
];

const headingVariants = {
	hidden: { opacity: 0, y: -40 },
	visible: { opacity: 1, y: 0 },
};

const stepVariants = {
	hidden: { opacity: 0, y: 60 },
	visible: { opacity: 1, y: 0 },
};

const Skills4 = () => {
	return (
		<section
			id="skills"
			className="py-80px pb-140px bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#050505] relative overflow-hidden"
		>
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-[22rem] h-[22rem] rounded-full bg-[#FF6B35]/15 blur-[120px]"></div>
			</div>
			<div className="container relative z-10">
				<motion.div
					className="text-center mb-16 mt-6"
					variants={headingVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<motion.h2
						className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
						variants={headingVariants}
						transition={{ duration: 0.7, delay: 0.1 }}
					>
						How We Onboard
					</motion.h2>
				</motion.div>
				<motion.div
					className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 mb-16"
					variants={headingVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, delay: 0.15 }}
				>
					<div className="max-w-3xl">
						<h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
							A Seamless Partnership Built To Win Amazon
						</h2>
						<p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
							Every engagement begins with clarity, accelerates with precision execution, and never stops
							evolving. Here’s how we bring brands onboard and deliver momentum from day one.
						</p>
					</div>
				</motion.div>

				<div className="relative">
					<div className="absolute hidden lg:block left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#4CAF50]/50 to-transparent translate-x-[-50%]"></div>
					<div className="grid gap-14 lg:gap-20">
						{onboardingSteps.map((step, index) => (
							<motion.div
								key={step.title}
								className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 group"
								variants={stepVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<div className="flex items-center gap-6 lg:w-[18rem]">
									<div className="relative">
										<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] shadow-[0_20px_45px_rgba(76,175,80,0.35)] flex items-center justify-center text-2xl font-black text-white">
											{index + 1}
										</div>
										<div className="absolute inset-0 rounded-2xl blur-2xl bg-[#4CAF50]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>
									<div className="hidden lg:block w-24 h-[1px] bg-gradient-to-r from-[#4CAF50]/40 to-transparent"></div>
								</div>
								<div className="flex-1">
									<div className="relative bg-white/5 border border-white/10 rounded-25px p-8 md:p-10 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#4CAF50]/40 group-hover:shadow-[0_25px_70px_rgba(76,175,80,0.25)]">
										<div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#4CAF50]/20 to-[#2E7D32]/20 flex items-center justify-center text-[#4CAF50]">
											<i className={`fas ${step.icon} text-lg`}></i>
										</div>
										<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
										<p className="text-gray-300 leading-[1.8] text-base md:text-lg">{step.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<div className="mt-16 text-center">
						<p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
							Scaling fast is easy. Scaling safely is strategy. Discover how we grow brands without burning budgets.
						</p>
						<div className="mt-8 flex justify-center">
							<ButtonPrimary type={2} isIcon={true} url="/#contact">
								Let’s Scale Smarter
							</ButtonPrimary>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills4;
