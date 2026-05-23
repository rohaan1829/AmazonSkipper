"use client";
import Footer6 from "@/components/layout/footer/Footer6";
import Header from "@/components/layout/header/Header";
import FooterContextProvider from "@/context_api/FooterContext";
import HeaderContextProvider from "@/context_api/HeaderContext";
import PortfolioRenderContextProvider from "@/context_api/PortfolioRenderContext";
import useSticky from "@/hooks/useSticky";
import smoothScroll from "@/libs/smoothScroll";
import { useEffect } from "react";
import BackToTop from "../others/BackToTop";
import MagicCusror1 from "../others/MagicCusror1";

const PageWrapper = ({
	children,
	isIndexPage,
	isInnerPage,
	isResumeBtn,
	headerType,
	footerType,
}) => {
	useSticky();
	useEffect(() => {
		// WOW.js drives the `wow fadeInUp`-style scroll reveals used throughout
		// the live components. Dynamic-imported so it doesn't block first paint.
		import("wow.js").then(({ default: WOW }) => {
			new WOW().init();
		});
		smoothScroll();
	}, []);
	return (
		<div>
			<BackToTop />
			{headerType === 4 && <MagicCusror1 />}
			<HeaderContextProvider
				value={{ isIndexPage, isInnerPage, headerType, isResumeBtn }}
			>
				<Header />
			</HeaderContextProvider>
			<PortfolioRenderContextProvider>
				{children}
			</PortfolioRenderContextProvider>
			<FooterContextProvider value={{ footerType }}>
				<Footer6 />
			</FooterContextProvider>
		</div>
	);
};

export default PageWrapper;
