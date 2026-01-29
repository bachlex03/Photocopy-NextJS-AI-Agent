"use client";

import Image from "next/image";
import { Languages, Search } from "lucide-react";

const BrandBar = () => {
	return (
		<div className="w-full bg-white py-4 px-4 border-b border-gray-100">
			<div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-8">
				{/* Brand Logo */}
				<div className="flex items-center gap-2 shrink-0">
					<Image 
						src="/hoangdung-logo.svg" 
						alt="Hoang Dung Logo" 
						width={160} 
						height={40} 
						className="h-10 w-auto object-contain"
						priority
					/>
				</div>

				{/* Search Bar */}
				<div className="flex-1 max-w-3xl relative hidden md:block">
					<input
						type="text"
						placeholder="Search"
						className="w-full border-2 border-gray-300 rounded-full py-2 px-6 pr-12 focus:outline-none focus:border-gray-500 transition-all placeholder:text-gray-500 italic"
					/>
					<button
						type="button"
						className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition-colors"
					>
						<Search size={22} />
					</button>
				</div>

				{/* Language Selector */}
				<div className="flex items-center gap-6 shrink-0">
					<button
						type="button"
						title="Select Language"
						className="text-gray-700 hover:text-black transition-transform hover:scale-110 flex items-center gap-2"
					>
						<Languages size={24} strokeWidth={1.5} />
						<span className="text-sm font-medium hidden lg:block">English</span>
					</button>
				</div>
			</div>

			{/* Mobile Search - Visible only on small screens */}
			<div className="mt-4 md:hidden relative">
				<input
					type="text"
					placeholder="Search"
					className="w-full border-2 border-gray-300 rounded-full py-2 px-4 pr-12 focus:outline-none focus:border-gray-500"
				/>
				<button
					type="button"
					className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
				>
					<Search size={20} />
				</button>
			</div>
		</div>
	);
};

export default BrandBar;
