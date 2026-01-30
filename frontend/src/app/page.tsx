import AboutHeritage from "~/components/layouts/_components/about-heritage";
import ContactSystem from "~/components/layouts/_components/contact-system";
import ExploreCategories from "~/components/layouts/_components/explore-categories";
import Hero from "~/components/layouts/_components/hero";
import TechnicalFooter from "~/components/layouts/_components/technical-footer";
import Header from "~/components/layouts/header";
import { MainContent, SkipLink } from "~/components/skip-link";

export default function Home() {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<SkipLink href="#main-content">Skip to content</SkipLink>
			<Header />
			<MainContent className="flex-1">
				<Hero />
				<ExploreCategories />
				<AboutHeritage />
				<ContactSystem />
			</MainContent>
			<TechnicalFooter />
		</div>
	);
}
