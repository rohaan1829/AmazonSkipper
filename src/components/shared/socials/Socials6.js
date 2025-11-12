import Link from "next/link";

const Socials6 = () => {
	return (
		<ul className=" hidden md:flex lg:hidden xl:flex  gap-x-10px">
			<li>
				<Link
					href="https://www.facebook.com/profile.php?id=61560301466107"
					className="text-primary-color dark:text-white-color hover:text-body-color  text-size-13 border border-primary-color dark:border-border-color-3 dark:hover:border-primary-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-facebook-f"></i>
				</Link>
			</li>
			<li>
				<Link
					href="https://www.instagram.com/amazonskiper"
					className="text-primary-color dark:text-white-color hover:text-body-color  text-size-13 border border-primary-color dark:border-border-color-3 dark:hover:border-primary-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-instagram"></i>
				</Link>
			</li>
			<li>
				<Link
					href="https://www.linkedin.com/in/virtuallyhuzaifa/"
					className="text-primary-color dark:text-white-color hover:text-body-color  text-size-13 border border-primary-color dark:border-border-color-3 dark:hover:border-primary-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-linkedin-in"></i>
				</Link>
			</li>
			<li>
				<Link
					href="https://twitter.com/amazonskiper"
					className="text-primary-color dark:text-white-color hover:text-body-color  text-size-13 border border-primary-color dark:border-border-color-3 dark:hover:border-primary-color w-30px h-30px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-x-twitter"></i>
				</Link>
			</li>
		</ul>
	);
};

export default Socials6;
