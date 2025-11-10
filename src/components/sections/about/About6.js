"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunFact10 from "@/components/shared/fun-fact/FunFact10";
import { useState, useEffect } from "react";

const About6 = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState({});
	const [showResults, setShowResults] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const quizQuestions = [
		{
			id: 1,
			question: "Q1. What best describes your brand’s current voyage?",
			options: [
				{
					value: "voyage_sailing_fast",
					text: "A. Sailing fast but scattered — growth feels exciting, just not steady yet",
					points: 2
				},
				{
					value: "voyage_heavy_fuel",
					text: "B. Good winds, heavy fuel — Sales are solid, but ad spends eating the profits",
					points: 3
				},
				{
					value: "voyage_drifting",
					text: "C. Drifting and draining — sales weak, ads burning cash like cannon fire",
					points: 3
				},
				{
					value: "voyage_smooth_waters",
					text: "D. Smooth waters — calm, steady systems doing their job",
					points: 1
				}
			]
		},
		{
			id: 2,
			question: "Q2. What’s slowing your ship down right now?",
			options: [
				{
					value: "slow_ad_spend",
					text: "A. Strong currents of ad spend — we’re burning too much to stay afloat",
					points: 3
				},
				{
					value: "slow_cash_stock",
					text: "B. Low tides of cash or stock — money or inventory always runs tight",
					points: 3
				},
				{
					value: "slow_team_sync",
					text: "C. Crew not in sync — the team’s there, but not rowing the same way",
					points: 2
				},
				{
					value: "slow_foggy_direction",
					text: "D. Foggy direction ahead — we’re moving, but not sure where exactly we’re headed",
					points: 2
				}
			]
		},
		{
			id: 3,
			question: "Q3. “If you could change one thing about your brand tomorrow…”",
			options: [
				{
					value: "change_strengthen_crew",
					text: "A. Strengthen the crew — Hire a new team",
					points: 2
				},
				{
					value: "change_calm_ads",
					text: "B. Calm the ad storms — control my spend",
					points: 3
				},
				{
					value: "change_tighten_sails",
					text: "C. Tighten my sails — stop constant stock-outs",
					points: 2
				},
				{
					value: "change_clear_course",
					text: "D. Find a clearer course — know exactly which products deserve full focus",
					points: 2
				}
			]
		},
		{
			id: 4,
			question: "Q4. Emotion check — how does your voyage with Amazon feel lately?",
			options: [
				{
					value: "emotion_steady",
					text: "A. Steady winds — I’m energized and actually enjoy the data and results",
					points: 1
				},
				{
					value: "emotion_rough",
					text: "B. Rough waters — I’m drained and tired of constant fires",
					points: 3
				},
				{
					value: "emotion_lost",
					text: "C. Lost at sea — I’m burnt out and dread even opening Seller Central",
					points: 3
				},
				{
					value: "emotion_searching",
					text: "D. Searching for calmer tides — I just want the business to breathe again",
					points: 2
				}
			]
		}
	];

	const handleAnswer = (questionId, answer) => {
		setAnswers({ ...answers, [questionId]: answer });
		if (currentQuestion < quizQuestions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResults(true);
		}
	};

	const calculateResults = () => {
		const totalPoints = Object.values(answers).reduce((sum, answer) => sum + answer.points, 0);
		
		if (totalPoints >= 10) {
			return {
				title: "🚨 Critical Intervention Needed",
				message: "Your Amazon ads need immediate attention. You're losing money daily!",
				cta: "Get Emergency Ad Audit",
				color: "text-red-600"
			};
		} else if (totalPoints >= 7) {
			return {
				title: "⚠️ High Priority Optimization",
				message: "Significant improvements possible. Don't let competitors get ahead!",
				cta: "Start Optimization Now",
				color: "text-orange-600"
			};
		} else if (totalPoints >= 4) {
			return {
				title: "📈 Growth Opportunity",
				message: "Good foundation, but major growth potential waiting to be unlocked!",
				cta: "Unlock Your Potential",
				color: "text-blue-600"
			};
		} else {
			return {
				title: "🎯 Fine-Tuning Phase",
				message: "You're doing well! Let's optimize for even better results.",
				cta: "Optimize Further",
				color: "text-green-600"
			};
		}
	};

	const resetQuiz = () => {
		setCurrentQuestion(0);
		setAnswers({});
		setShowResults(false);
	};

	return (
		<section id="about" className="dark:bg-primary-color-light">
			<div className=" mx-15px py-60px md:py-20 lg:py-30 bg-cream-light-color dark:bg-black-color rounded-[24px]  overflow-x-hidden">
				<div className="container">
					{/* <!-- section heading --> */}

					<div className="flex flex-wrap  justify-between gap-x-30px gap-y-50px">
						{/* Quiz Card - Same size as original image */}
						<div
							className="w-full max-w-[515px] lg:max-w-[390px] xl:max-w-[515px] mx-auto lg:mx-0 h-full relative z-0 wow zoomIn"
							data-wow-delay=".3s"
						>
							<div className="w-full h-full bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-15px p-6 text-white relative overflow-hidden">
								{/* Background Pattern */}
								<div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-3xl"></div>
								
								{isClient ? (
									<>
										{!showResults ? (
											<div className="relative z-10 h-full flex flex-col">
												{/* Quiz Header */}
												<div className="mb-6">
													<h3 className="text-2xl font-bold mb-2">Amazon Skipper – Brand Stress Test</h3>
													<p className="text-white/80 text-sm">Find out how we can help your ads perform better</p>
													<div className="mt-3 bg-white/20 rounded-full h-2">
														<div 
															className="bg-white rounded-full h-2 transition-all duration-300"
															style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
														></div>
													</div>
													<p className="text-xs text-white/70 mt-2">Question {currentQuestion + 1} of {quizQuestions.length}</p>
												</div>

												{/* Question */}
												<div className="flex-1 flex flex-col justify-center">
													<h4 className="text-lg font-semibold mb-6 leading-relaxed">
														{quizQuestions[currentQuestion].question}
													</h4>
													
													{/* Options */}
													<div className="space-y-3">
														{quizQuestions[currentQuestion].options.map((option, index) => (
															<button
																key={index}
																onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option)}
																className="w-full text-left p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40 group"
															>
																<span className="text-sm font-medium group-hover:text-white transition-colors">
																	{option.text}
																</span>
															</button>
														))}
													</div>
												</div>
											</div>
										) : (
											<div className="relative z-10 h-full flex flex-col justify-center text-center">
												{/* Results */}
												{(() => {
													const result = calculateResults();
													return (
														<>
															<div className="mb-6">
																<h3 className={`text-2xl font-bold mb-4 ${result.color}`}>
																	{result.title}
																</h3>
																<p className="text-white/90 text-base leading-relaxed mb-6">
																	{result.message}
																</p>
															</div>
															
															<div className="space-y-4">
																<button className="w-full bg-white text-[#4CAF50] font-bold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-105">
																	{result.cta}
																</button>
																<button 
																	onClick={resetQuiz}
																	className="w-full text-white/80 hover:text-white text-sm underline transition-colors"
																>
																	Take Quiz Again
																</button>
															</div>
														</>
													);
												})()}
											</div>
										)}
									</>
								) : (
									/* SSR Fallback - Static content */
									<div className="relative z-10 h-full flex flex-col justify-center text-center">
										<div className="mb-6">
											<h3 className="text-2xl font-bold mb-2">Amazon Skipper – Brand Stress Test</h3>
											<p className="text-white/80 text-sm mb-6">Find out how we can help your ads perform better</p>
											<div className="bg-white/20 rounded-full h-2 mb-4">
												<div className="bg-white rounded-full h-2 w-0"></div>
											</div>
										</div>
										<div className="space-y-3">
											<div className="w-full p-4 bg-white/10 rounded-lg border border-white/20">
												<span className="text-sm font-medium">Loading assessment...</span>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>

						<div className="w-full max-w-[630px] lg:max-w-[510px] xl:max-w-[560px] 2xl:max-w-[630px] flex flex-col justify-start">
							<div className="mb-15px">
								<span
									className="text-xs  uppercase text-primary-color dark:text-white  font-semibold relative inline-block tracking-0.2em wow fadeInRight"
									data-wow-delay=".3s"
								>
									
								</span>
							</div>
							<h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 uppercase font-semibold  leading-1.2 -tracking-0.02em inline-block text-seondary-color dark:text-white-color dark:text-white mb-20px lg:mb-15px xl:mb-20px max-w-580px w-full tj-text-invert">
								We Don't Guess. We decode the data, optimize your ads, & deliver the one thing that matters: ROI.
							</h2>
							<div className="  w-full ">
								<div>
									{/* <!-- fanfact --> */}
									<div className="relative  ">
										<FunFact10 />
									</div>
									<div className="mt-35px xl:mt-35px wow fadeInUp" data-wow-delay=".3s">
										<div className="relative overflow-hidden rounded-[28px] border border-[#4CAF50]/25 bg-gradient-to-br from-black via-[#0a1f14] to-[#22C55E]/40 p-6 sm:p-7 md:p-8 shadow-[0_30px_80px_-40px_rgba(34,197,94,0.55)]">
											<div className="absolute inset-0 pointer-events-none opacity-30">
												<div className="absolute -top-20 left-1/3 h-40 w-40 rounded-full bg-[#22C55E] blur-[120px]" />
												<div className="absolute bottom-[-25%] right-1/4 h-44 w-44 rounded-full bg-[#0EA5E9] blur-[140px]" />
											</div>
											<div className="relative z-10 space-y-4">
												<p className="text-sm md:text-base text-white/80 leading-relaxed">
													Every brand loses money somewhere — we’ll show you where, and how to fix it for good.
												</p>
												<ButtonPrimary type={2} isIcon={true} href="/#contact">
													Find My Profit Leaks
												</ButtonPrimary>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About6;
