import Link from "next/link";

const ButtonPrimary = ({ children, type, url, className, isIcon }) => {
	return (
		<Link
			href={url ? url : "#"}
			className={`text-xs sm:text-sm lg:text-[13px] xl:text-size-15 font-bold text-white-color capitalize py-2.5 sm:py-3 lg:py-3.5 xl:py-17px px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-35px whitespace-nowrap ${
				type === 2 ? "" : "ml-10px"
			} bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 ${className} ${
				isIcon ? "inline-flex gap-1.5 sm:gap-2 lg:gap-2.5 xl:gap-10px items-center shrink-0 " : ""
			} transition-all duration-300 group`}
		>
			<span className="truncate">{children ? children : ""}</span>{" "}
			{isIcon ? (
				<i className="fa-regular fa-arrow-right transition-all duration-400 -rotate-45 group-hover:rotate-0 shrink-0"></i>
			) : (
				""
			)}
		</Link>
	);
};

export default ButtonPrimary;
