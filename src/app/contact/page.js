import ContactMain from "@/components/layout/main/ContactMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Contact Us - Amazon Skipper",
  description:
    "Connect with Amazon Skipper for tailored Amazon growth strategies, PPC management, and account optimization support.",
};

export default function ContactPage() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <ContactMain />
    </PageWrapper>
  );
}
