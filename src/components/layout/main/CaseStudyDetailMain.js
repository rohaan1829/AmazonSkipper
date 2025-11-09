"use client";

import { useEffect, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import getCaseStudies from "@/libs/getCaseStudies";

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

		let scrollObserver = null;
		let timeoutId = null;

		const setupScrollAnimation = () => {
			const caseStudyElement = document.getElementById(`case-study-${index}`);
			if (!caseStudyElement) {
				timeoutId = setTimeout(setupScrollAnimation, 100);
				return;
			}

			const rect = caseStudyElement.getBoundingClientRect();
			const isInView = rect.top < window.innerHeight && rect.bottom > 0;
			if (isInView && index === 0) {
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
				{ threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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

		const animateMetrics = () => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
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
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			}`}
		>
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

			<div
				className={`mb-20 md:mb-24 transition-all duration-700 ease-out delay-[100ms] ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
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

			<div
				className={`mb-20 md:mb-24 transition-all duration-700 ease-out delay-[200ms] ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
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

			<div
				id={`metrics-section-${index}`}
				className={`mb-20 md:mb-24 transition-all duration-700 ease-out delay-[300ms] ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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

					<div className="bg-white dark:bg-[#1a1a1a] rounded-30px p-6 md:p-8 border-2 border-[#4CAF50]/30 mb-8">
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
							<div className="mt-6 flex items-end gap-1 h-24">
								{Array.from({ length: 30 }).map((_, i) => {
									const seed = (i * 7 + 13) % 100;
									const height = 30 + seed * 0.6 + (i > 15 ? 20 : 0);
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

						<div className="bg-gradient-to-r from-orange-400/20 via-[#4CAF50]/20 to-purple-400/20 rounded-20px p-6 mb-6 border-2 border-[#4CAF50]/30 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>
							<div className="relative z-10">
								<div className="text-2xl md:text-3xl font-black text-[#1a1a1a] dark:text-white mb-2">
									{isClient ? formatCurrency(animatedMetrics.revenue) : formatCurrency(revenue.after)} in 6
									Months
								</div>
								<div className="text-lg text-gray-700 dark:text-gray-300">
									While achieving {isClient ? formatPercent(animatedMetrics.acos) : formatPercent(acos.after)} ACoS
								</div>
								<div className="mt-4 inline-block px-4 py-2 bg-[#4CAF50] text-white rounded-full text-sm font-bold">
									↗ {revenueIncrease}% Growth
								</div>
							</div>
						</div>

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
									ACoS Reduction
								</div>
								<div className="text-xs text-green-600 dark:text-green-400 mt-1 font-semibold">
									↓ {acosReduction} pts
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
									TACoS Reduction
								</div>
								<div className="text-xs text-green-600 dark:text-green-400 mt-1 font-semibold">
									↓ {tacosReduction}% improvement
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`mb-20 md:mb-24 transition-all duration-700 ease-out delay-[400ms] ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
				<div className="bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-30px p-8 md:p-12 border border-white/10 text-white relative overflow-hidden">
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white blur-3xl"></div>
						<div className="absolute bottom-0 left-0 w-[18rem] h-[18rem] rounded-full bg-[#4CAF50] blur-[120px]"></div>
					</div>
					<div className="relative z-10">
						<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
							<div className="flex-1">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#4CAF50] text-sm font-semibold uppercase tracking-[0.3em] mb-6">
									Creative Strategy
								</div>
								<h3 className="text-3xl md:text-4xl font-black mb-4">
									Visual Storytelling That Converts
								</h3>
								<p className="text-lg text-white/80 leading-relaxed mb-6">
									High-impact creative assets turned attention into action. Enhanced product visuals,
									lifestyle imagery, and conversion-focused videos translated into measurable growth.
								</p>
								<div className="grid sm:grid-cols-3 gap-4">
									<div className="bg-white/10 rounded-20px p-5 text-center">
										<div className="text-2xl font-black text-[#7DFFAE] mb-2">+68%</div>
										<div className="text-xs uppercase tracking-[0.2em] text-white/70">Listing Views</div>
									</div>
									<div className="bg-white/10 rounded-20px p-5 text-center">
										<div className="text-2xl font-black text-[#7DFFAE] mb-2">+42%</div>
										<div className="text-xs uppercase tracking-[0.2em] text-white/70">Session to Order</div>
									</div>
									<div className="bg-white/10 rounded-20px p-5 text-center">
										<div className="text-2xl font-black text-[#7DFFAE] mb-2">3.1x</div>
										<div className="text-xs uppercase tracking-[0.2em] text-white/70">ROAS Lift</div>
									</div>
								</div>
							</div>
							<div className="relative w-full max-w-[420px] mx-auto">
								<div className="absolute -top-6 -right-6 w-24 h-24 bg-[#4CAF50]/20 rounded-full blur-2xl"></div>
								<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
								<div className="relative bg-white/10 rounded-[32px] p-6 border border-white/10 backdrop-blur">
									<div className="flex items-center justify-between mb-5">
										<div>
											<p className="text-xs uppercase tracking-[0.2em] text-white/60">Creative Rollout</p>
											<div className="text-lg font-semibold">Launch Campaign</div>
										</div>
										<div className="text-xs text-white/60">Q2</div>
									</div>
									<Image
										src="/img/portfolio/graph.png"
										alt="Performance graph"
										width={500}
										height={320}
										className="w-full rounded-2xl border border-white/10"
										priority
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`transition-all duration-700 ease-out delay-[500ms] ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
				<div className="bg-gradient-to-br from-[#4CAF50]/10 via-transparent to-[#2E7D32]/10 rounded-30px p-8 md:p-12 border border-[#4CAF50]/30">
					<div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center">
						<div>
							<h3 className="text-3xl md:text-4xl font-black text-[#1a1a1a] dark:text-white mb-6">
								{caseStudy.cta.title}
							</h3>
							<p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
								{caseStudy.cta.description}
							</p>
							<div className="flex flex-wrap gap-4">
								{caseStudy.cta.buttons?.map((button, idx) => (
									<ButtonPrimary key={idx} href={button.url} isIcon={button.type === "primary"}>
										{button.text}
									</ButtonPrimary>
								))}
							</div>
						</div>
						<div className="bg-white dark:bg-[#1a1a1a] rounded-25px shadow-xl border border-[#4CAF50]/20 p-8 relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 to-transparent opacity-80"></div>
							<div className="relative z-10">
								<div className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-4">
									Quick Wins
								</div>
								<ul className="space-y-4">
									{[
										"Audit your campaign spend vs returns",
										"Identify high-impact listing improvements",
										"Build a 30-day margin recovery plan",
									].map((item, idx) => (
										<li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
											<span className="w-6 h-6 rounded-full bg-[#4CAF50] text-white flex items-center justify-center text-xs mt-1">
												{idx + 1}
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const CaseStudyDetailMain = ({ activeCaseStudyId }) => {
	const [caseStudies, setCaseStudies] = useState([]);

	useEffect(() => {
		const data = getCaseStudies();
		setCaseStudies(data);
	}, []);

	const targetCaseStudy = caseStudies.find((study) => study.id === activeCaseStudyId);

	if (!targetCaseStudy) {
		return (
			<div className="py-120px">
				<div className="container">
					<p className="text-center text-xl text-gray-600 dark:text-gray-300">
						We couldn't find the case study you're looking for.
					</p>
				</div>
			</div>
		);
	}

	return (
		<main className="overflow-hidden">
			<section className="relative z-0 min-h-[60vh] flex items-center overflow-hidden bg-cream-light-color dark:bg-black-color pt-130px md:pt-150px lg:pt-160px pb-70px md:pb-100px">
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-color-light/20 blur-3xl"></div>
					<div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
				</div>
				<div className="container">
					<div className="grid gap-40px lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] items-center">
						<div>
							<h1 className="mt-4 mb-25px text-4xl sm:text-size-45 lg:text-size-55 xl:text-size-65 font-semibold uppercase leading-1.1 text-seondary-color dark:text-white-color">
								{targetCaseStudy.hero?.title || "Case Studies"}
							</h1>
							<p className="max-w-[640px] text-base md:text-lg leading-1.7 text-body-color dark:text-gray-color-4">
								{targetCaseStudy.hero?.description}
							</p>
							<div className="mt-35px flex flex-wrap gap-20px">
								<ButtonPrimary href="/#contact" isIcon={true}>
									Talk to a Growth Skipper
								</ButtonPrimary>
							</div>
						</div>
						<div className="relative hidden lg:block">
							<div className="rounded-25px bg-white-color dark:bg-[#111111] shadow-[0_35px_70px_-40px_rgba(0,0,0,0.35)] border border-[#000]/5 dark:border-white/10 p-30px flex flex-col gap-25px">
								<Image
									src="/img/portfolio/graph.png"
									alt="Performance graph"
									width={480}
									height={320}
									className="w-full rounded-2xl"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-70px md:py-110px bg-white-color dark:bg-primary-color-light">
				<div className="container">
					<CaseStudyItem caseStudy={targetCaseStudy} index={0} />
				</div>
			</section>
		</main>
	);
};

export default CaseStudyDetailMain;

