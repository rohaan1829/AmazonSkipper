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
			question: "What's your biggest Amazon ad challenge?",
			options: [
				{ value: "low_roas", text: "Low ROAS - spending more than earning", points: 3 },
				{ value: "high_acos", text: "High ACOS - ads are too expensive", points: 3 },
				{ value: "low_visibility", text: "Low visibility - not enough impressions", points: 2 },
				{ value: "conversion_issues", text: "Low conversion rates", points: 2 },
				{ value: "competition", text: "Too much competition", points: 1 }
			]
		},
		{
			id: 2,
			question: "How long have you been running Amazon ads?",
			options: [
				{ value: "newbie", text: "Less than 3 months", points: 3 },
				{ value: "beginner", text: "3-6 months", points: 2 },
				{ value: "intermediate", text: "6-12 months", points: 2 },
				{ value: "experienced", text: "1+ years but struggling", points: 3 },
				{ value: "expert", text: "2+ years", points: 1 }
			]
		},
		{
			id: 3,
			question: "What's your monthly ad spend?",
			options: [
				{ value: "under_1k", text: "Under $1,000", points: 2 },
				{ value: "1k_5k", text: "$1,000 - $5,000", points: 2 },
				{ value: "5k_10k", text: "$5,000 - $10,000", points: 3 },
				{ value: "10k_25k", text: "$10,000 - $25,000", points: 3 },
				{ value: "over_25k", text: "Over $25,000", points: 1 }
			]
		},
		{
			id: 4,
			question: "What's your current ROAS?",
			options: [
				{ value: "under_2", text: "Under 2:1", points: 3 },
				{ value: "2_3", text: "2:1 - 3:1", points: 2 },
				{ value: "3_4", text: "3:1 - 4:1", points: 2 },
				{ value: "4_5", text: "4:1 - 5:1", points: 1 },
				{ value: "over_5", text: "Over 5:1", points: 1 }
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
													<h3 className="text-2xl font-bold mb-2">Amazon Ad Assessment</h3>
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
											<h3 className="text-2xl font-bold mb-2">Amazon Ad Assessment</h3>
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
							<h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 uppercase font-semibold  leading-1.2 -tracking-0.02em inline-block text-seondary-color dark:text-white-color mb-20px lg:mb-15px xl:mb-20px max-w-580px w-full tj-text-invert">
								We Don't Guess. We decode the data, optimize your ads, & deliver the one thing that matters: ROI.
							</h2>
							<div className="  w-full ">
								<div>
									{/* <!-- fanfact --> */}
									<div className="relative  ">
										<FunFact10 />
									</div>
									<div
										className="mt-35px xl:mt-35px wow fadeInUp"
										data-wow-delay=".3s"
									>
										<ButtonPrimary type={2} isIcon={true} href="/#contact">
											Stop Guessing. Start Scaling.
										</ButtonPrimary>
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
