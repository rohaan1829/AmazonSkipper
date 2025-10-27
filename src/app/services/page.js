import ServicesMain from "@/components/layout/main/ServicesMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Services - Amazon Skipper - Your Amazon Business Solution",
  description: "Professional Amazon business services and solutions to help you succeed on Amazon marketplace. Web Development, UI/UX Design, Content Writing, and Digital Marketing services.",
};

export default function Services() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <ServicesMain />
    </PageWrapper>
  );
}
