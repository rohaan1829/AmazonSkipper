"use client";
import { useHeaderContext } from "@/context_api/HeaderContext";
import Image from "next/image";
import Link from "next/link";

// Height-capped logo. The source PNGs are now tightly cropped (2750x1300)
// so visible content fills the bounding box — `h-14`/`h-16` translates to
// ~56/64px of *visible* logo rather than mostly transparent padding.
const Logo = () => {
	const { headerType } = useHeaderContext();
	const isWide =
		headerType === 4 || headerType === 9 || headerType === 10;
	const sizeClass = isWide
		? "h-14 md:h-16 w-auto"
		: "h-12 w-12";
	const src = isWide ? "/img/logo/black.png" : "/img/logo/logo.png";

	return (
		<Link href="/" className="logo block">
			{/* dark-mode logo */}
			<Image
				className={`${sizeClass} hidden dark:inline-block`}
				src={src}
				alt="Amazon Skipper"
				width={1000}
				height={1000}
				priority
			/>
			{/* light-mode logo */}
			<Image
				className={`${sizeClass} inline-block dark:hidden`}
				src="/img/logo/8 - Edited.png"
				alt="Amazon Skipper"
				width={1000}
				height={1000}
				priority
			/>
		</Link>
	);
};

export default Logo;
