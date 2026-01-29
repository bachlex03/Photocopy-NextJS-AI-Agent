"use client";

import Link from "next/link";

const links = [
	{ label: "Websites by Vista x Wix", href: "#" },
	{ label: "Corporate Pricing", href: "#" },
	{ label: "Reseller Program", href: "#" },
	{ label: "VistaCreate", href: "#" },
];

const UtilityBar = () => {
	return (
		<div className="w-full bg-[#F5F5F5] py-2 px-4 border-b border-gray-200 hidden md:block">
			<div className="max-w-screen-2xl mx-auto flex gap-6">
				{links.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						className="text-xs font-medium text-gray-700 hover:text-black transition-colors"
					>
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default UtilityBar;
