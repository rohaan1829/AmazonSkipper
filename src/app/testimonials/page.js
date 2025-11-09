import TestimonialsMain from "@/components/layout/main/TestimonialsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Testimonials - Amazon Skipper - Client Feedback & Reviews",
  description:
    "Read testimonials and feedback from clients who have grown their Amazon businesses with Amazon Skipper.",
};

export default function Testimonials() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <TestimonialsMain />
    </PageWrapper>
  );
}


