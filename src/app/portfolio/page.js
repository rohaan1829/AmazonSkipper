import PortfolioMain from "@/components/layout/main/PortfolioMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Portfolio - Amazon Skipper - Our Work & Projects",
  description: "Explore our successful Amazon business projects and case studies. See how we've helped businesses grow on Amazon marketplace.",
};

export default function Portfolio() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <PortfolioMain />
    </PageWrapper>
  );
}
