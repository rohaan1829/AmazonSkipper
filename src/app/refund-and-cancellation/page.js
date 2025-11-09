import RefundCancellationMain from "@/components/layout/main/RefundCancellationMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Refund & Cancellation Policy - Amazon Skipper",
  description:
    "Understand Amazon Skipper's refund and cancellation terms, eligibility, and processes for service engagements and subscriptions.",
};

export default function RefundAndCancellationPage() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <RefundCancellationMain />
    </PageWrapper>
  );
}

