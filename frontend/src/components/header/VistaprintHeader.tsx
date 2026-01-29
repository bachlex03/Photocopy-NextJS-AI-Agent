"use client";

import BrandBar from "./BrandBar";
import CategoryNav from "./CategoryNav";
import PromoBar from "./PromoBar";
import UtilityBar from "./UtilityBar";

const VistaprintHeader = () => {
	return (
		<header className="w-full flex flex-col font-sans">
			<UtilityBar />
			<BrandBar />
			<CategoryNav />
			<PromoBar />
		</header>
	);
};

export default VistaprintHeader;
