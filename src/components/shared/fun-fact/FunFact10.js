"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const FunFact10 = () => {
	const [value, setValue] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState(0);

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
				setValue(0);
				setValue2(0);
				setValue3(0);
			}, 250);
			return () => clearTimeout(timeoutId);
		}
	}, [inView]);

	return null;
};

export default FunFact10;
