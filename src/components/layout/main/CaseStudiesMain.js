"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const getCaseStudies = () => [
  {
    id: 1,
    header: {
      title: "A Compelling Turnaround: From Stagnation to Momentum",
      description:
        "Want a blueprint for turning an under-performing Amazon brand into a runaway success? Read on to see how a natural-protein-bar maker overcame fierce competition, poor visibility, and soaring ad costs — and emerged stronger than ever. This journey illustrates how clear strategy and disciplined execution can make numbers soar.",
    },
    after: {
      metrics: {
        revenue: { before: 50000, after: 150000 },
        acos: { before: 35, after: 22 },
        tacos: { before: 18, after: 12 },
      },
    },
    color: "pink",
  },
  {
    id: 2,
    header: {
      title: "Turning the Tide for an Eco-Cleaning Brand: A Fresh Start on Amazon",
      description:
        "Looking for inspiration on reviving a stalled Amazon presence? See how a company that sells biodegradable cleaning sprays escaped lacklustre sales, tamed its ad spend and charted a new path to growth. This story proves that smart tactics and consistent refinements can make a struggling brand thrive.",
    },
    after: {
      metrics: {
        revenue: { before: 75000, after: 225000 },
        acos: { before: 40, after: 28 },
        tacos: { before: 20, after: 14 },
      },
    },
    color: "orange",
  },
  {
    id: 3,
    header: {
      title: "Brewing Success for a Specialty Coffee Brand: From Low Sales to Roaring Hot",
      description:
        "Ever wonder how a small coffee brand can rise above the noise on Amazon? This story chronicles how a roaster of artisan beans moved from stagnation to explosive growth. With clever adjustments and relentless optimisation, they turned sips into a thriving business.",
    },
    after: {
      metrics: {
        revenue: { before: 100000, after: 350000 },
        acos: { before: 32, after: 24 },
        tacos: { before: 16, after: 10 },
      },
    },
    color: "cyan",
  },
  {
    id: 4,
    header: {
      title: "Rescuing a Plant-Based Pet Food Brand: Creating a Feeding Frenzy on Amazon",
      description:
        "Need proof that a stagnant Amazon business can roar back to life? Here’s how a company making plant-based pet food escaped supply-chain woes and runaway ad costs to achieve spectacular growth. This tale shows that with the right approach, even underdogs can dominate their niche.",
    },
    after: {
      metrics: {
        revenue: { before: 30000, after: 120000 },
        acos: { before: 45, after: 30 },
        tacos: { before: 22, after: 15 },
      },
    },
    color: "pink",
  },
  {
    id: 5,
    header: {
      title: "Revitalising an Artisan Skincare Brand: From Slow Sales to Soaring Success",
      description:
        "Curious how a niche beauty label can shine on Amazon’s crowded shelves? This case chronicles how a maker of small-batch moisturisers and soaps transformed its performance. With inventive solutions and disciplined spending, the brand went from obscurity to becoming a sought-after name.",
    },
    after: {
      metrics: {
        revenue: { before: 55000, after: 200000 },
        acos: { before: 38, after: 24 },
        tacos: { before: 19, after: 11 },
      },
    },
    color: "purple",
  },
];

const CaseStudyCard = ({ study, index }) => {
  const { header, color } = study;

  const colorStyles = {
    pink: {
      bg: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/20",
      border: "border-pink-200 dark:border-pink-800/30",
      accent: "text-pink-600 dark:text-pink-400",
      highlight: "bg-pink-500/10 border-pink-300 dark:border-pink-700",
      graph: "bg-pink-100 dark:bg-pink-900/20",
      barAccent: "bg-pink-500",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/20",
      border: "border-orange-200 dark:border-orange-800/30",
      accent: "text-orange-600 dark:text-orange-400",
      highlight: "bg-orange-500/10 border-orange-300 dark:border-orange-700",
      graph: "bg-orange-100 dark:bg-orange-900/20",
      barAccent: "bg-orange-500",
    },
    cyan: {
      bg: "bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950/30 dark:to-blue-900/20",
      border: "border-cyan-200 dark:border-cyan-800/30",
      accent: "text-cyan-600 dark:text-cyan-400",
      highlight: "bg-cyan-500/10 border-cyan-300 dark:border-cyan-700",
      graph: "bg-cyan-100 dark:bg-cyan-900/20",
      barAccent: "bg-cyan-500",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-900/20",
      border: "border-purple-200 dark:border-purple-800/30",
      accent: "text-purple-600 dark:text-purple-400",
      highlight: "bg-purple-500/10 border-purple-300 dark:border-purple-700",
      graph: "bg-purple-100 dark:bg-purple-900/20",
      barAccent: "bg-purple-500",
    },
  };

  const styles = colorStyles[color];
  const isEven = index % 2 === 0;

	return (
		<Link
			href={`/case-studies/${study.id}`}
      className={`group relative block h-full overflow-hidden rounded-3xl border ${styles.border} ${styles.bg} p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_-60px_rgba(15,23,42,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60`}
    >
      <div className={`grid h-full items-stretch gap-8 lg:grid-cols-2 ${isEven ? "" : "lg:grid-cols-[1.2fr_0.8fr]"}`}>
        {/* Content Section */}
        <div className={`flex h-full flex-col justify-center ${isEven ? "order-1" : "order-2"}`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
						</div>

          <h3 className="text-3xl lg:text-4xl font-black leading-tight text-[#101828] dark:text-white mb-4">
							{header?.title}
						</h3>

          <p className="text-base text-[#475467] dark:text-gray-300 mb-8 leading-relaxed">
            {header?.description}
          </p>

					</div>

        {/* Dashboard Mockup */}
        <div className={`relative ${isEven ? "order-2" : "order-1"} flex h-full`}>
          <div
            className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 ${styles.border} ${styles.graph} p-4 shadow-lg`}
          >
            <Image
              src="/img/portfolio/graph.png"
              alt="Performance dashboard preview"
              width={900}
              height={640}
              className="w-full h-auto rounded-xl border border-white/40 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.7)]"
              priority={index < 2}
            />
					</div>
				</div>
			</div>
		</Link>
	);
};

const CaseStudiesMain = () => {
	const caseStudies = useMemo(() => getCaseStudies(), []);

	return (
    <main className="min-h-screen bg-black overflow-hidden">
      <section className="relative overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -top-24 -left-16 h-96 w-96 rounded-full bg-[#4CAF50]/20 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
				</div>

        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-[30px] bg-black px-6 py-20 sm:px-10 lg:px-16 mb-20 text-center">
            <div className="absolute inset-0 opacity-35 pointer-events-none">
              <div className="absolute top-1/3 left-[22%] h-64 w-64 rounded-full bg-[#22C55E]/40 blur-[100px]"></div>
              <div className="absolute bottom-1/4 right-[18%] h-56 w-56 rounded-full bg-[#22C55E]/25 blur-[90px]"></div>
              <div className="absolute top-[18%] right-[30%] h-52 w-52 rounded-full bg-[#22d3ee]/20 blur-[95px]"></div>
              <div className="absolute bottom-[12%] left-[18%] h-44 w-44 rounded-full bg-[#15803D]/25 blur-[80px]"></div>
            </div>
            <div className="hidden sm:block">
              {[
                { size: 22, x: "right-[18%]", y: "-top-4", anim: "floatSlow 9s", opacity: "opacity-90" },
                { size: 18, x: "left-[12%]", y: "top-[48%]", anim: "floatMedium 7s", opacity: "opacity-70" },
                { size: 16, x: "left-[6%]", y: "top-[32%]", anim: "floatFast 6s", opacity: "opacity-65" },
                { size: 18, x: "right-[30%]", y: "bottom-8", anim: "floatFast 5s", opacity: "opacity-75" },
                { size: 16, x: "left-[26%]", y: "-bottom-6", anim: "floatMedium 8s", opacity: "opacity-60" },
                { size: 14, x: "left-[32%]", y: "top-[12%]", anim: "floatMedium 9s", opacity: "opacity-75" },
                { size: 13, x: "left-[4%]", y: "top-[18%]", anim: "floatFast 5.5s", opacity: "opacity-55" },
                { size: 13, x: "left-[20%]", y: "top-[65%]", anim: "floatMedium 7.5s", opacity: "opacity-60" },
                { size: 12, x: "left-[8%]", y: "bottom-[22%]", anim: "floatSlow 8.5s", opacity: "opacity-65" },
                { size: 14, x: "right-[8%]", y: "top-[25%]", anim: "floatSlow 10s", opacity: "opacity-65" },
                { size: 12, x: "left-[28%]", y: "top-[10%]", anim: "floatFast 6s", opacity: "opacity-80" },
                { size: 12, x: "right-[15%]", y: "bottom-[18%]", anim: "floatMedium 6.5s", opacity: "opacity-60" },
                { size: 14, x: "left-[10%]", y: "top-[5%]", anim: "floatFast 6.5s", opacity: "opacity-55" },
                { size: 11, x: "left-[18%]", y: "top-[38%]", anim: "floatSlow 7.5s", opacity: "opacity-65" },
                { size: 10, x: "left-[34%]", y: "top-[45%]", anim: "floatMedium 6.8s", opacity: "opacity-75" },
                { size: 11, x: "left-[14%]", y: "bottom-[30%]", anim: "floatFast 5.8s", opacity: "opacity-70" },
                { size: 9, x: "left-[30%]", y: "bottom-[12%]", anim: "floatMedium 8.2s", opacity: "opacity-60" },
                { size: 13, x: "right-[12%]", y: "top-[12%]", anim: "floatSlow 7.8s", opacity: "opacity-70" },
                { size: 11, x: "right-[22%]", y: "top-[38%]", anim: "floatFast 6.1s", opacity: "opacity-70" },
                { size: 9, x: "right-[10%]", y: "top-[55%]", anim: "floatMedium 7.7s", opacity: "opacity-65" },
                { size: 10, x: "right-[26%]", y: "bottom-[26%]", anim: "floatFast 6.9s", opacity: "opacity-60" },
                { size: 12, x: "right-[5%]", y: "bottom-[10%]", anim: "floatMedium 8.6s", opacity: "opacity-55" },
              ].map(({ size, x, y, anim, opacity }, idx) => (
                <Image
                  key={idx}
                  src="/img/shapes/5.jpg"
                  alt="Decorative accent"
                  width={size}
                  height={size}
                  className={`pointer-events-none absolute ${y} ${x} ${opacity} drop-shadow-[0_18px_40px_rgba(34,197,94,0.22)]`}
                  style={{ animation: `${anim} ease-in-out infinite` }}
                  priority
                />
              ))}
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-tight">
							Amazon growth stories engineered for predictable revenue
						</h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Real brands. Real numbers. Explore how we turn chaotic ad accounts into disciplined
                profit engines — and what a calm, scaling Amazon brand actually looks like.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <ButtonPrimary type={2} isIcon={true} url="/#contact">
                  Fix My ACoS Now
                </ButtonPrimary>
                <Link
                  href="#case-studies-grid"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/75 transition hover:border-white hover:text-white"
                >
                  See Our Results
                </Link>
              </div>
					</div>
          </section>
          <style jsx>{`
            @keyframes floatSlow {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0px); }
            }
            @keyframes floatMedium {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0px); }
            }
            @keyframes floatFast {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-16px); }
              100% { transform: translateY(0px); }
            }
          `}</style>

          {/* Case Studies Grid */}
          <div className="space-y-12 mb-20">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
						</div>

          {/* CTA Section */}
          <section className="relative mt-24 overflow-hidden rounded-[40px] border border-[#4CAF50]/30 bg-gradient-to-br from-black via-[#121212] to-[#4CAF50] px-6 py-16 sm:px-10 lg:px-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#4CAF50] blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#4CAF50] blur-3xl"></div>
								</div>

            <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
              <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Fix My ACoS Now
              </h2>
              <p className="text-lg text-white/80 sm:text-xl">
                If your ad spend feels like a black hole, this is your turning point. Let’s rebuild your numbers with structure.
              </p>

              <ButtonPrimary type={2} isIcon={true} url="/#contact">
                Fix My ACoS Now
              </ButtonPrimary>
									</div>
          </section>

				</div>
			</section>
		</main>
	);
};

export default CaseStudiesMain;