import BrandManagementMain from "@/components/layout/main/BrandManagementMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Brand Management - Amazon Skipper - Your Amazon Business Solution",
  description: "Full-service Amazon brand management including account setup, listing optimization, advertising management, inventory logistics, customer support, and global marketplace expansion.",
};

export default function BrandManagement() {
  return (
    <PageWrapper isInnerPage={true} headerType={9} footerType={9}>
      <BrandManagementMain />
    </PageWrapper>
  );
}
