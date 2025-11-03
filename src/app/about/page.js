import AboutMain from "@/components/layout/main/AboutMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "About Us - Amazon Skipper - Your Amazon Business Solution",
  description: "Learn about Amazon Skipper - a data-driven Amazon advertising agency that helps sellers reduce ad spend by up to 50% while maximizing ROI. Meet our team of experts behind $82M+ in managed PPC profits.",
};

export default function About() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <AboutMain />
    </PageWrapper>
  );
}

