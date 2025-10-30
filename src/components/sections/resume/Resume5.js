"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const stepsData = [
    {
        id: 1,
        bigTitle: "Complete Brand Audit",
        sub: "Setting Realistic Expectations",
        bullets: ["Icebreaker Call", "Market Analysis", "Data Extraction", "Account Audit"],
        img: "/img/about/audit.png",
        alt: "Discovery Call",
    },
    {
        id: 2,
        bigTitle: "Scope and Goal Clarity",
        sub: "Setting Realistic Goals",
        bullets: ["Explanation Call", "Scope Clarity", "Goal Clarity", "Actions Checklist"],
        img: "/img/about/goal.jpg",
        alt: "What needs to be done",
    },
    {
        id: 3,
        bigTitle: "Execution",
        sub: "This is Where the Magic Happens",
        bullets: [
            "Advertising Strategy Building",
            "Smooth Brand Management",
            "Detail Page Optimization",
            "Advertising Implementation",
        ],
        img: "/img/about/execution.webp",
        alt: "Sale Report",
    },
];

const Resume5 = ({
	type,
	title = "How It Works",
	subheadline = "Behind the Scenes of Your Amazon Ads Transformation",
	ctaVariant = "double", // "double" | "reveal"
	onCTAClick,
}) => {
	const prefersReducedMotion = useMemo(
		() =>
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches,
		[]
	);

	const [activeId, setActiveId] = useState(1);
	const containerRef = useRef(null);

	// Initialize from URL hash
	useEffect(() => {
		const hash = typeof window !== "undefined" ? window.location.hash : "";
		const match = hash.match(/#step-(\d+)/);
		if (match) {
			const id = Number(match[1]);
			if (id >= 1 && id <= stepsData.length) {
				setActiveId(id);
			}
		}
	}, []);

	// Update hash on active step
	useEffect(() => {
		if (typeof window !== "undefined") {
			const next = `#step-${activeId}`;
			if (window.location.hash !== next) {
				history.replaceState(null, "", next);
			}
		}
	}, [activeId]);

	const handleToggle = (id) => {
		const willOpen = activeId !== id;
		setActiveId(id);
		// analytics
		if (typeof window !== "undefined") {
			window.dispatchEvent(
				new CustomEvent("howitworks", {
					detail: { type: "step", action: willOpen ? "open" : "close", step: id },
				})
			);
		}
	};

	const handleCTAClick = (variant) => {
		// analytics
		if (typeof window !== "undefined") {
			window.dispatchEvent(
				new CustomEvent("howitworks", {
					detail: { type: "cta", action: "click", cta: variant },
				})
			);
		}
		if (typeof onCTAClick === "function") onCTAClick(variant);
	};

	return (
		<section id="resume" aria-labelledby="howitworks-heading">
			<div
				className={` py-60px md:py-20 lg:py-30 relative ${
					type === 2 ? "dark:bg-primary-color-light" : ""
				} after:absolute after:top-0 after:left-1/2  after:-translate-x-1/2 after:-translate-y-1/2 after:right-5 after:w-650px after:h-550px after:blur-[150px] after:rounded-50% after:bg-gradient-circle-2 after:-z-1   after:opacity-60`}
			>
				<div className="container" ref={containerRef}>
					{/* heading */}
					<div className="mb-10 md:mb-50px xl:mb-60px text-center flex flex-col items-center ">
						<h2
							id="howitworks-heading"
							className={`text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 font-semibold  leading-1.2 -tracking-0.02em inline-block text-seondary-color dark:text-white-color   max-w-580px w-full ${
								type === 2 ? "uppercase tj-text-invert" : " wow fadeInUp"
							}`}
							data-wow-delay={type === 2 ? "0" : ".4s"}
						>
							{title}
						</h2>
						<p className="text-primary-color-light dark:text-body-color-3 mt-3 max-w-700px text-lg md:text-xl lg:text-2xl">
							{subheadline}
						</p>
					</div>

                    {/* 3-step two-column layout inspired by reference image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-35px md:gap-50px lg:gap-60px items-stretch">
                        {/* Step 1 */}
                        <div className="bg-cream-light-color dark:bg-black-color bg-gradient-to-br from-[#4CAF50]/10 to-transparent dark:from-[#4CAF50]/15 rounded-15px p-5 md:p-25px border border-body-color dark:border-bg-color-2 h-full flex flex-col">
                            <div className="text-primary-color text-3xl font-bold mb-10">1</div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-white-color mb-5">{stepsData[0].bigTitle}</h3>
                            <p className="text-primary-color-light dark:text-body-color-3 mb-6">{stepsData[0].sub}</p>
                            <ul className="grid grid-cols-2 gap-y-3 text-white-color/90 text-size-15">
                                {stepsData[0].bullets.map((b, i) => (
                                    <li key={i} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-color"></span>{b}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-15px overflow-hidden border border-body-color dark:border-bg-color-2 bg-cream-light-color dark:bg-black-color p-5 md:p-25px h-full">
                            <img src={stepsData[0].img} alt={stepsData[0].alt} className="w-full h-full object-cover rounded-10" />
                        </div>

                        {/* Step 2 */}
                        <div className="rounded-15px overflow-hidden border border-body-color dark:border-bg-color-2 bg-cream-light-color dark:bg-black-color p-5 md:p-25px order-3 md:order-none h-full">
                            <img src={stepsData[1].img} alt={stepsData[1].alt} className="w-full h-full object-cover rounded-10" />
                        </div>
                        <div className="bg-cream-light-color dark:bg-black-color bg-gradient-to-br from-[#4CAF50]/10 to-transparent dark:from-[#4CAF50]/15 rounded-15px p-5 md:p-25px border border-body-color dark:border-bg-color-2 order-2 md:order-none h-full flex flex-col">
                            <div className="text-primary-color text-3xl font-bold mb-10">2</div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-white-color mb-5">{stepsData[1].bigTitle}</h3>
                            <p className="text-primary-color-light dark:text-body-color-3 mb-6">{stepsData[1].sub}</p>
                            <ul className="grid grid-cols-2 gap-y-3 text-white-color/90 text-size-15">
                                {stepsData[1].bullets.map((b, i) => (
                                    <li key={i} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-color"></span>{b}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-cream-light-color dark:bg-black-color bg-gradient-to-br from-[#4CAF50]/10 to-transparent dark:from-[#4CAF50]/15 rounded-15px p-5 md:p-25px border border-body-color dark:border-bg-color-2 h-full flex flex-col">
                            <div className="text-primary-color text-3xl font-bold mb-10">3</div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-white-color mb-5">{stepsData[2].bigTitle}</h3>
                            <p className="text-primary-color-light dark:text-body-color-3 mb-6">{stepsData[2].sub}</p>
                            <ul className="grid grid-cols-2 gap-y-3 text-white-color/90 text-size-15">
                                {stepsData[2].bullets.map((b, i) => (
                                    <li key={i} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-color"></span>{b}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-15px overflow-hidden border border-body-color dark:border-bg-color-2 bg-cream-light-color dark:bg-black-color p-5 md:p-25px h-full">
                            <img src={stepsData[2].img} alt={stepsData[2].alt} className="w-full h-full object-cover rounded-10" />
                        </div>
                    </div>

					{/* CTA variants */}
					<div className="mt-30px md:mt-50px text-center flex flex-col items-center gap-15px">
						{ctaVariant === "double" ? (
							<>
								<h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white-color">
									What If Your Amazon Ads Could Work Twice as Hard?
								</h3>
								<button
									type="button"
									className=" font-bold text-white-color capitalize w-full max-w-[320px] py-22px md:py-[28px] px-3 bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-15px flex gap-10px justify-center items-center leading-1 transition-all duration-300 group"
									data-cta="double"
									onClick={() => handleCTAClick("double")}
								>
									Double My Efforts!
									<i className="fa-regular fa-arrow-right transition-all duration-400 -rotate-45 group-hover:rotate-0"></i>
								</button>
							</>
						) : (
							<>
								<h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white-color">
									What's the ONE Thing Holding Back Your Amazon Sales?
								</h3>
								<button
									type="button"
									className=" font-bold text-white-color capitalize w-full max-w-[320px] py-22px md:py-[28px] px-3 bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-15px flex gap-10px justify-center items-center leading-1 transition-all duration-300 group"
									data-cta="reveal"
									onClick={() => handleCTAClick("reveal")}
								>
									We'll Reveal It!
									<i className="fa-regular fa-arrow-right transition-all duration-400 -rotate-45 group-hover:rotate-0"></i>
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume5;