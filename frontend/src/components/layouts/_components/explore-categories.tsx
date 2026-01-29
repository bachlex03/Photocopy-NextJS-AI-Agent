"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
	{
		label: "Bao thư - Danh thiếp",
		image: "/cat-business-cards.png",
		color: "bg-[#F7F6F2]",
	},
	{
		label: "Tờ rơi & Brochure",
		image: "/cat-flyers.png",
		color: "bg-[#F2F7F6]",
	},
	{
		label: "In - Cắt Decal",
		image: "/cat-stickers.png",
		color: "bg-[#F7F2F2]",
	},
	{
		label: "In màu bản vẽ A0",
		image: "/cat-flyers.png", // Reusing for demo, ideally unique
		color: "bg-[#F2F4F7]",
	},
	{
		label: "Photocopy A4 - A0",
		image: "/cat-business-cards.png", // Reusing for demo
		color: "bg-[#F7F7F2]",
	},
	{
		label: "Bưu ảnh - Giấy khen",
		image: "/cat-stickers.png", // Reusing for demo
		color: "bg-[#F2F2F7]",
	},
];

const ExploreCategories = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const { current } = scrollRef;
			const scrollAmount = 300;
			if (direction === "left") {
				current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
			} else {
				current.scrollBy({ left: scrollAmount, behavior: "smooth" });
			}
		}
	};

	return (
		<section className="w-full bg-white py-12">
			<div className="max-w-screen-2xl mx-auto px-4">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-2xl font-bold text-gray-900">
						Explore all categories
					</h2>
				</div>

				<div className="relative group">
					{/* Navigation Buttons */}
					<button
						type="button"
						onClick={() => scroll("left")}
						className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:text-[#00A4E4] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 border border-gray-100 disabled:opacity-0"
						aria-label="Scroll left"
					>
						<ChevronLeft size={24} />
					</button>
					<button
						type="button"
						onClick={() => scroll("right")}
						className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:text-[#00A4E4] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 border border-gray-100"
						aria-label="Scroll right"
					>
						<ChevronRight size={24} />
					</button>

					{/* Categories Scroll Container */}
					<div
						ref={scrollRef}
						className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar scroll-smooth"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
						{categories.map((category) => (
							<div
								key={category.label}
								className="flex flex-col items-center gap-4 min-w-[180px] snap-start group/item cursor-pointer"
							>
								<div
									className={`w-48 h-48 rounded-full ${category.color} flex items-center justify-center overflow-hidden relative shadow-sm hover:shadow-md transition-all group-hover/item:scale-105 duration-300`}
								>
									<div className="w-32 h-32 relative">
										<Image
											src={category.image}
											alt={category.label}
											fill
											className="object-contain drop-shadow-md"
										/>
									</div>
								</div>
								<span className="text-sm font-bold text-gray-900 text-center group-hover/item:text-[#00A4E4] transition-colors">
									{category.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExploreCategories;
