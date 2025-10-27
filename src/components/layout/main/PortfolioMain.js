"use client";
import HeroBreadcarumb from "@/components/sections/heros/HeroBreadcarumb";
import Portfolio9 from "@/components/sections/portfolio/Portfolio9";
import Cta1 from "@/components/sections/cta/Cta1";

const PortfolioMain = () => {
  return (
    <main>
      <HeroBreadcarumb
        title="Our Portfolio"
        text="Successful Amazon business projects and case studies"
        actualItem="Home"
        path="/"
        isBlog={false}
      />
      
      {/* Portfolio Grid */}
      <Portfolio9 />
      
      {/* Call to Action */}
      <Cta1 />
    </main>
  );
};

export default PortfolioMain;
