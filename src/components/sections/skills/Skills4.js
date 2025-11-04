"use client";

import { useEffect, useState } from "react";

const Skills4 = ({ type, title }) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const valueProps = [
		{
			id: 1,
			text: "More sales, less stress.",
			img: "/img/hero/huzaifa.png",
		},
		{
			id: 2,
			text: "Profitable growth, not just clicks.",
			img: "/img/hero/huzaifa.png",
		},
		{
			id: 3,
			text: "Your products, in front of the right customers.",
			img: "/img/hero/huzaifa.png",
		},
		{
			id: 4,
			text: "A trusted partner invested in your success.",
			img: "/img/hero/huzaifa.png",
		},
		{
			id: 5,
			text: "Time for what matters most.",
			img: "/img/hero/huzaifa.png",
		},
	];

	return (
		<section
			id="skills"
			className="py-20 lg:py-28 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden"
		>
			<div className="container mx-auto px-6">
				<div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16">
					{/* Heading Left */}
					<div className="w-full lg:w-1/3 mb-12 lg:mb-0">
						<h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black dark:text-white -ml-[20%]">
						This could be you.   <br />
							<span className="text-[#4CAF50]">Let us show you how.</span>
						</h2>
					</div>

					{/* Cards Right */}
					<div className="w-full lg:w-2/3 lg:translate-x-[10%]">
						<div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
							{valueProps.map((prop) => (
								<div
									key={prop.id}
									className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-800 transition-transform duration-500 hover:scale-105 h-[220px] md:h-[260px] lg:h-[280px] w-full"
								>
									{/* Background Image */}
									<div
										className="absolute inset-0 bg-cover bg-center"
										style={{
											backgroundImage: `url(${prop.img})`,
										}}
									></div>

									{/* Text */}
									<div className="absolute bottom-0 left-0 p-6 md:p-8">
										<p className="text-lg md:text-xl font-semibold text-white drop-shadow-md">
											{prop.text}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills4;
