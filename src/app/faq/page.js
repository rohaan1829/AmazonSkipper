import FaqMain from "@/components/layout/main/FaqMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "FAQ's - Amazon Skipper | Answers for Scalable Amazon Growth",
  description:
    "Find clear answers about Amazon Skipper’s Amazon growth services, brand audit process, creative support, and results-driven approach. Built for sellers ready to scale with less stress.",
};

export default function FaqPage() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <FaqMain />
    </PageWrapper>
  );
}


