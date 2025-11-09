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
				setValue(14);
				setValue2(50);
				setValue3(1.5);
				setValue4(50);
			}, 250);
			return () => clearTimeout(timeoutId);
		}
	}, [inView]);

	return (
		<>
			{Odometer ? (
				<div
					ref={ref}
					className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-20px text-primary-color dark:text-body-color"
				>
					<div className="funfact-item max-w-full w-full sm:w-180px md:w-220px lg:w-210px xl:w-220px flex flex-col justify-center items-center text-center bg-cream-light-color dark:bg-transparent border border-body-color dark:border-bg-color-2 py-28px sm:py-32px md:py-40px px-10px md:px-18px rounded-10px">
						<div className="number inline-flex items-center justify-center text-size-32 md:text-size-40 xl:text-size-48 font-bold leading-[1.05]">
							<Odometer className="!font-sora tracking-[0.04em]" value={value} />
							<span className="symbol"> +</span>
						</div>
						<div className="text leading-1 text-center text-sm md:text-base lg:text-lg">Job achievements</div>
					</div>

					<div className="funfact-item max-w-full w-full sm:w-180px md:w-220px lg:w-210px xl:w-220px flex flex-col justify-center items-center text-center bg-cream-light-color dark:bg-transparent border border-body-color dark:border-bg-color-2 py-28px sm:py-32px md:py-40px px-10px md:px-18px rounded-10px">
						<div className="number inline-flex items-center justify-center text-size-32 md:text-size-40 xl:text-size-48 font-bold leading-[1.05]">
							<Odometer className="!font-sora tracking-[0.04em]" value={value2} />
							<span className="symbol">%</span>
						</div>
						<div className="text leading-1 text-center text-sm md:text-base lg:text-lg">Job achievements</div>
					</div>

					<div className="funfact-item max-w-full w-full sm:w-180px md:w-220px lg:w-210px xl:w-220px flex flex-col justify-center items-center text-center bg-cream-light-color dark:bg-transparent border border-body-color dark:border-bg-color-2 py-28px sm:py-32px md:py-40px px-10px md:px-18px rounded-10px">
						<div className="number inline-flex items-center justify-center text-size-32 md:text-size-40 xl:text-size-48 font-bold leading-[1.05]">
							<Odometer className="!font-sora tracking-[0.04em]" value={value3} />
							<span className="symbol">+</span>
						</div>
						<div className="text leading-1 text-center text-sm md:text-base lg:text-lg">Years of Experience</div>
					</div>

					<div
						className="funfact-item max-w-full w-full sm:w-180px md:w-220px lg:w-210px xl:w-220px flex flex-col justify-center items-center text-center bg-cream-light-color dark:bg-transparent border border-body-color dark:border-bg-color-2 py-28px sm:py-32px md:py-40px px-10px md:px-18px rounded-10px"
						data-wow-delay=".6s"
					>
						<div className="number inline-flex items-center justify-center text-size-32 md:text-size-40 xl:text-size-48 font-bold leading-[1.05]">
							<Odometer className="!font-sora tracking-[0.04em]" value={value4} />
							<span className="symbol">K</span>
						</div>
						<div className="text leading-1 text-center text-sm md:text-base lg:text-lg">Happy Clients</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default FunFact5;
