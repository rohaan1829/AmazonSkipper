import PrivacyPolicyMain from "@/components/layout/main/PrivacyPolicyMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Privacy Policy - Amazon Skipper",
  description:
    "Learn how Amazon Skipper collects, uses, protects, and shares your personal information. Review our privacy commitments and contact details.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <PrivacyPolicyMain />
    </PageWrapper>
  );
}

