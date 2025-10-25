"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const FunFact9 = () => {
	const [Odometer, setOdometer] = useState(null);
	const [value, setValue] = useState(0);
	const [isClient, setIsClient] = useState(false);

	// Intersection Observer
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.4, // Adjust as needed
	});

	// Lazy-load OdometerJS
	useEffect(() => {
		setIsClient(true);
		import("react-odometerjs").then(mod => setOdometer(() => mod.default));
	}, []);

	// Trigger odometer when visible
	useEffect(() => {
		if (inView) {
			const timeoutId = setTimeout(() => setValue(12), 250);
			return () => clearTimeout(timeoutId);
		}
	}, [inView]);

	// Show static content during SSR and until client hydration
	if (!isClient) {
		return (
			<div
				ref={ref}
				className="funfact-single w-full max-w-full  border border-x-0 border-border-color dark:border-bg-color-2 pt-3 md:pt-2.5 xl:pt-1 mb-30px"
			>
				<div className="funfact-item   flex flex-wrap sm:flex-nowrap flex-col justify-center  bg-transparent  w-full ">
					<div className="number inline-flex items-center text-6xl sm:text-size-75 xl:text-size-95 2xl:text-size-110 text-seondary-color dark:text-white-color  font-bold leading-1  ">
						<span className="tracking-[0.04em] leading-1">0</span>{" "}
						<span className="symbol"> +</span>
					</div>
					<div className="text-seondary-color dark:text-gray-color-2  text-end -translate-y-[18px] ">
						Years of Experience
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			ref={ref}
			className="funfact-single w-full max-w-full  border border-x-0 border-border-color dark:border-bg-color-2 pt-3 md:pt-2.5 xl:pt-1 mb-30px"
		>
			<div className="funfact-item   flex flex-wrap sm:flex-nowrap flex-col justify-center  bg-transparent  w-full ">
				<div className="number inline-flex items-center text-6xl sm:text-size-75 xl:text-size-95 2xl:text-size-110 text-seondary-color dark:text-white-color  font-bold leading-1  ">
					{Odometer ? (
						<Odometer className="tracking-[0.04em] leading-1" value={value} />
					) : (
						<span className="tracking-[0.04em] leading-1">{value}</span>
					)}{" "}
					<span className="symbol"> +</span>
				</div>
				<div className="text-seondary-color dark:text-gray-color-2  text-end -translate-y-[18px] ">
					Years of Experience
				</div>
			</div>
		</div>
	);
};

export default FunFact9;
