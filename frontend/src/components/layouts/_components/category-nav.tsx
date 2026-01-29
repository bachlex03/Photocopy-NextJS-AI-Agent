"use client";

import Link from "next/link";

const categories = [
	{ label: "In - Photo - Scan", href: "#" },
	{ label: "Photocopy A4 - A0", href: "#" },
	{ label: "Bao thư - Danh thiếp", href: "#" },
	{ label: "In - Cắt Decal", href: "#" },
	{ label: "Bưu ảnh - giấy khen", href: "#" },
	{ label: "Tờ rơi", href: "#" },
	{ label: "In màu bản vẽ A0", href: "#" },
	{ label: "In giấy ảnh", href: "#" },
];

const CategoryNav = () => {
	return (
		<nav className="w-full bg-white px-4 border-b border-gray-100 overflow-x-auto no-scrollbar">
			<div className="max-w-screen-2xl mx-auto flex items-center justify-center gap-8 py-3">
				{categories.map((category) => (
					<Link
						key={category.label}
						href={category.href}
						className="text-[14px] font-semibold text-gray-800 leading-tight whitespace-nowrap px-1 py-1 border-b-2 border-transparent hover:border-[#00A4E4] hover:text-[#00A4E4] transition-[color,border-color] duration-150 ease-out"
					>
						{category.label}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default CategoryNav;
