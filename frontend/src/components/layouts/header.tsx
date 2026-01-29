"use client";

import BrandBar from "./_components/brand-bar";
import CategoryNav from "./_components/category-nav";
import PromoBar from "./_components/promo-bar";
import UtilityBar from "./_components/utility-bar";

const Header = () => {
	return (
		<header className="w-full flex flex-col font-sans">
			<UtilityBar />
			<BrandBar />
			<CategoryNav />
			{/* <PromoBar /> */}
		</header>
	);
};

export default Header;
