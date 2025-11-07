import About6 from "@/components/sections/about/About6";
//import Blogs5 from "@/components/sections/blogs/Blogs5";
import Brands2 from "@/components/sections/brands/Brands2";
import Hero9 from "@/components/sections/heros/Hero9";
import FeatureMarque2 from "@/components/sections/marquee/FeatureMarque2";
import Portfolio9 from "@/components/sections/portfolio/Portfolio9";
//import Resume5 from "@/components/sections/resume/Resume5";
//import Services6 from "@/components/sections/services/Services6";
import Skills4 from "@/components/sections/skills/Skills4";
// import Testimonials9 from "@/components/sections/testimonials/Testimonials9";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Index9Main = () => {
	return (
		<main className="overflow-hidden">
			<div className="wow fadeIn" data-wow-delay=".05s">
				<Hero9 />
			</div>
			<div className="wow fadeInUp" data-wow-delay=".12s">
				<Brands2 />
			</div>
			<div className="wow fadeInUp" data-wow-delay=".18s">
				<Skills4 />
			</div>
			{/* <Blogs5 /> */}
			<div className="wow fadeInUp" data-wow-delay=".24s">
				<About6 />
			</div>
			{/* <Services6 type={2} /> */}
			<div className="wow fadeInUp" data-wow-delay=".3s">
				<Portfolio9 />
			</div>
			<div className="wow fadeInUp" data-wow-delay=".36s">
				<FeatureMarque2 type={3} isRotate={true} />
			</div>
			{/* <Resume5 type={2} /> */}
			{/* <Testimonials9 /> */}
			
			{/* CTA Section */}
			<section id="cta" className="py-100px md:py-120px lg:py-140px bg-white dark:bg-[#121212] relative overflow-hidden">
				<div className="container relative z-10 px-6 md:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<div
							className="text-center bg-gradient-to-br from-black via-[#121212] to-[#4CAF50] rounded-30px p-12 md:p-16 border border-[#4CAF50]/30 relative overflow-hidden wow zoomIn"
							data-wow-delay=".42s"
						>
							<div className="absolute inset-0 opacity-10">
								<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl"></div>
								<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl"></div>
							</div>
							<div className="relative z-10">
								<h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 wow fadeInUp" data-wow-delay=".48s">
									Book Your Free Strategy Call
								</h3>
								<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto wow fadeInUp" data-wow-delay=".52s">
									Ready to stop guessing and start scaling? Let's walk you through how we cut chaos and build stable growth.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center wow fadeInUp" data-wow-delay=".58s">
									<ButtonPrimary type={2} isIcon={true} url="/#contact">
										Book Your Free Strategy Call
									</ButtonPrimary>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Index9Main;
