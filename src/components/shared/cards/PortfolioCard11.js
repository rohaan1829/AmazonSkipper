"use client";
import Link from "next/link";

const PortfolioCard11 = ({ portfolio }) => {
	const { title, img, shortDesc } = portfolio ? portfolio : {};
	return (
		<div className="portfolio-item branding  p-5 md:p-25px bg-cream-light-color dark:bg-black-color hover:bg-cream-light-color dark:hover:bg-seondary-color rounded-30px group relative h-full flex flex-col">
			<Link
				href="/services"
				className="mb-25px block rounded-15px overflow-hidden w-full h-[260px] sm:h-[300px]"
			>
				<img
					src={img}
					className="w-full h-full object-contain mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300 group-hover:scale-110"
					alt=""
				/>
			</Link>

			<div className="flex items-center gap-25px  justify-between flex-grow">
				<div className="flex-grow">
					<h4 className="block text-xl text-seondary-color dark:text-white-color hover:text-primary-color dark:hover:text-primary-color   font-bold  mb-1.5 min-h-[60px]">
						<Link href="/services">
							{title}
						</Link>
					</h4>

					<p className="block text-primary-color-light dark:text-body-color-3 min-h-[60px]">
						{shortDesc}
					</p>
				</div>

				<Link
					href="/services"
					className="flex-shrink-0 text-size-25px w-60px h-60px text-primary-color-light dark:text-white-color group-hover:text-white-color   bg-transparent group-hover:bg-gradient-primary-8 outline-1 outline outline-body-color dark:outline-bg-color-2 group-hover:border-transparent  rounded-100% leading-1 transition-all duration-300  inline-flex justify-center items-center"
				>
					<span className="relative overflow-hidden -rotate-45">
						<i className="fa-regular fa-arrow-right  text-lg group-hover:translate-x-150% transition-all duration-500 inline-block"></i>
						<i className="fa-regular fa-arrow-right absolute left-0 top-0 -translate-x-150% text-lg group-hover:-translate-x-0 transition-all duration-500"></i>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default PortfolioCard11;
