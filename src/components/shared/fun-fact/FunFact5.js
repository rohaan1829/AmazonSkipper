"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const FunFact5 = () => {
	const [value, setValue] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState(0);
	const [value4, setValue4] = useState(0);
	const [Odometer, setOdometer] = useState(null);
	// Intersection Observer
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.4, // Adjust as needed
	});
	useEffect(() => {
		import("react-odometerjs").then(mod => setOdometer(() => mod.default));
	}, []);

	// Trigger odometer when visible
	useEffect(() => {
		if (inView) {
			const timeoutId = setTimeout(() => {
				setValue(100);
				setValue2(277);
				setValue3(300);
				setValue4(150);
			}, 250);
			return () => clearTimeout(timeoutId);
		}
	}, [inView]);

	return (
		<>
			{Odometer ? (
				<div
					ref={ref}
					className="grid w-full max-w-6xl mx-auto grid-cols-1 gap-6 text-primary-color dark:text-body-color sm:grid-cols-2 xl:grid-cols-4"
				>
					<div className="funfact-item flex h-full min-h-[190px] w-full min-w-[260px] flex-col items-center justify-center rounded-2xl border border-body-color bg-cream-light-color px-12 py-10 text-center dark:border-bg-color-2 dark:bg-transparent">
						<div className="number inline-flex items-center justify-center text-size-40 md:text-size-35 xl:text-size-30 font-black leading-[1.05]">
							<Odometer className="!font-sora tracking-[0.02em]" value={value} />
							<span className="symbol whitespace-nowrap">&nbsp;MIL +</span>
						</div>
						<p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-primary-color dark:text-white">
							Revenue This Year
						</p>
					</div>

					<div className="funfact-item flex h-full min-h-[190px] w-full min-w-[260px] flex-col items-center justify-center rounded-2xl border border-body-color bg-cream-light-color px-12 py-10 text-center dark:border-bg-color-2 dark:bg-transparent">
						<div className="number inline-flex items-center justify-center text-size-40 md:text-size-48 xl:text-size-56 font-black leading-[1.05]">
							<Odometer className="!font-sora tracking-[0.02em]" value={value2} />
							<span className="symbol">%  +</span>
						</div>
						<p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-primary-color dark:text-white">
							Average Revenue Growth
						</p>
					</div>

					<div className="funfact-item flex h-full min-h-[190px] w-full min-w-[260px] flex-col items-center justify-center rounded-2xl border border-body-color bg-cream-light-color px-12 py-10 text-center dark:border-bg-color-2 dark:bg-transparent">
						<div className="number inline-flex items-center justify-center text-size-40 md:text-size-48 xl:text-size-56 font-black leading-[1.05]">
							<Odometer className="!font-sora tracking-[0.02em]" value={value3} />
							<span className="symbol"> +</span>
						</div>
						<p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-primary-color dark:text-white">
							Brands We Helped
						</p>
					</div>

					<div
						className="funfact-item flex h-full min-h-[190px] w-full min-w-[260px] flex-col items-center justify-center rounded-2xl border border-body-color bg-cream-light-color px-12 py-10 text-center dark:border-bg-color-2 dark:bg-transparent"
						data-wow-delay=".6s"
					>
						<div className="number inline-flex items-center justify-center text-size-40 md:text-size-48 xl:text-size-56 font-black leading-[1.05]">
							<Odometer className="!font-sora tracking-[0.02em]" value={value4} />
							<span className="symbol">&nbsp; +</span>
						</div>
						<p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-primary-color dark:text-white">
							Brands Currently Working With Us
						</p>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default FunFact5;
