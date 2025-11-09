import CaseStudyDetailMain from "@/components/layout/main/CaseStudyDetailMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getCaseStudies from "@/libs/getCaseStudies";

export function generateStaticParams() {
	const caseStudies = getCaseStudies();
	return caseStudies.map((study) => ({ id: study.id.toString() }));
}

const CaseStudyDetailPage = ({ params }) => {
	const caseStudyId = Number(params?.id);

	return (
		<PageWrapper isInnerPage={true} headerType={9} footerType={9}>
			<CaseStudyDetailMain activeCaseStudyId={caseStudyId} />
		</PageWrapper>
	);
};

export default CaseStudyDetailPage;

