"use client";

import Link from "next/link";

const categories = [
	{ label: "Deals", href: "#", highlight: true },
	{ label: "Business Cards", href: "#" },
	{ label: "Postcards & Print Advertising", href: "#" },
	{ label: "Signs, Banners & Posters", href: "#" },
	{ label: "Stickers & Labels", href: "#" },
	{ label: "Clothing & Bags", href: "#" },
	{ label: "Promotional Products", href: "#" },
	{ label: "Packaging", href: "#" },
	{ label: "Calendars & Gifts", href: "#" },
];

const CategoryNav = () => {
	return (
		<nav className="w-full bg-white px-4 border-b border-gray-100 overflow-x-auto no-scrollbar">
			<div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4 py-3">
				{categories.map((category) => (
					<Link
						key={category.label}
						href={category.href}
						className={`text-[13px] font-medium leading-tight whitespace-nowrap px-1 py-2 border-b-2 border-transparent hover:border-black transition-[color,border-color] duration-150 ease-out ${
							category.highlight ? "text-[#C00000]" : "text-gray-800"
						}`}
					>
						{category.label}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default CategoryNav;
