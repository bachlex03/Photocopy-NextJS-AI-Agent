"use client";

import { ChevronLeft, ChevronRight, Copy } from "lucide-react";

const PromoBar = () => {
	return (
		<div className="w-full bg-black text-white py-3 px-4 relative flex items-center justify-center">
			{/* Navigation Arrows */}
			<button
				type="button"
				className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
			>
				<ChevronLeft size={20} />
			</button>

			<div className="flex items-center gap-3 text-sm font-semibold tracking-wide">
				<span>$50 off orders $150+ | Code: BMSM</span>
				<button
					type="button"
					title="Copy Code"
					className="hover:text-gray-300 transition-colors"
				>
					<Copy size={16} />
				</button>
				<span className="mx-2 text-gray-400">|</span>
				<span>Ends Jan 30</span>
				<a
					href="#shop"
					className="underline underline-offset-4 hover:text-gray-200 ml-1"
				>
					Shop now
				</a>
			</div>

			<button
				type="button"
				className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
			>
				<ChevronRight size={20} />
			</button>
		</div>
	);
};

export default PromoBar;
