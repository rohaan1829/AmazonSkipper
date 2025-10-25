"use client";

import Link from "next/link";
import { useEffect } from "react";

const ButtonPopupVideo2 = ({ url }) => {
	useEffect(() => {
		import("glightbox").then(({ default: GLightbox }) => {
			const lightbox = GLightbox({
				selector: ".glightbox",
			});
		});
	}, []);
	return (
		<Link
			href="https://www.youtube.com/embed/GGf1JjSAKP4"
			className="glightbox popup_video flex-shrink-0 w-[215px] h-[215px] sm:w-70px sm:h-70px md:w-20 md:h-20 xl:w-30 xl:h-120px 2xl:w-[215px] 2xl:h-[215px] relative z-0 text-size-22 md:text-2xl inline-flex justify-center items-center group bg-cover bg-center bg-no-repeat bg-[url('/img/hero/proof.png')] dark:bg-[url('/img/hero/proof-white.png')]"
			style={{ 
				animation: "spin 8s linear infinite"
			}}
		>
			<i className="fa-sharp fa-solid fa-play text-[#4CAF50] text-3xl group-hover:scale-110 transition-all duration-300"></i>
		</Link>
	);
};

export default ButtonPopupVideo2;
