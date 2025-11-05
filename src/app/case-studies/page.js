import CaseStudiesMain from "@/components/layout/main/CaseStudiesMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Case Studies - Amazon Skipper - Real Results from Real Brands",
  description: "Discover how Amazon Skipper transforms struggling Amazon brands into runaway successes. See real case studies with measurable results, revenue growth, and ACoS reduction.",
};

export default function CaseStudies() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <CaseStudiesMain />
    </PageWrapper>
  );
}

