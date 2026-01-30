"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { cn } from "~/utils/cn";

interface Category {
	label: string;
	href: string;
	description?: string;
	featured?: boolean;
}

const categories: Category[] = [
	{
		label: "In - Photo - Scan",
		href: "#",
		description: "Dịch vụ in ảnh, scan tài liệu",
	},
	{
		label: "Photocopy A4 - A0",
		href: "#",
		description: "Photocopy mọi khổ giấy",
		featured: true,
	},
	{
		label: "Bao thư - Danh thiếp",
		href: "#",
		description: "In bao thư, card visit chuyên nghiệp",
	},
	{
		label: "In - Cắt Decal",
		href: "#",
		description: "Decal dán, tem nhãn, sticker",
	},
	{
		label: "Bưu ảnh - Giấy khen",
		href: "#",
		description: "In ảnh thẻ, giấy khen, chứng nhận",
	},
	{ label: "Tờ rơi", href: "#", description: "Tờ rơi quảng cáo, brochure" },
	{
		label: "In màu bản vẽ A0",
		href: "#",
		description: "Bản vẽ kỹ thuật, bản đồ",
		featured: true,
	},
	{ label: "In giấy ảnh", href: "#", description: "In ảnh chất lượng cao" },
];

interface CategoryNavProps {
	className?: string;
	isMobile?: boolean;
	isOpen?: boolean;
	onClose?: () => void;
}

const CategoryNav = ({
	className,
	isMobile = false,
	isOpen = false,
	onClose,
}: CategoryNavProps) => {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

	const handleCategoryClick = useCallback(
		(category: string) => {
			if (isMobile) {
				setActiveCategory(activeCategory === category ? null : category);
			}
		},
		[activeCategory, isMobile],
	);

	const handleLinkClick = useCallback(() => {
		onClose?.();
	}, [onClose]);

	if (isMobile) {
		return (
			<nav
				id="mobile-menu"
				className={cn(
					"md:hidden fixed inset-x-0 top-[120px] bottom-0 bg-background/98 backdrop-blur-lg z-30",
					"transform transition-transform duration-500 ease-in-out",
					isOpen ? "translate-x-0" : "translate-x-full",
					className,
				)}
				aria-label="Mobile navigation"
				aria-hidden={!isOpen}
			>
				<div className="h-full overflow-y-auto px-6 py-8">
					<div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-b border-border/30 pb-4">
						Main Categories
					</div>
					<ul className="space-y-4">
						{categories.map((category) => (
							<li
								key={category.label}
								className="border-b border-border/10 pb-4"
							>
								<button
									type="button"
									onClick={() => handleCategoryClick(category.label)}
									className={cn(
										"w-full flex items-center justify-between py-2",
										"text-left font-bold uppercase tracking-tighter text-lg transition-all duration-200",
										activeCategory === category.label && "text-primary",
									)}
								>
									<span>{category.label}</span>
									<ChevronDown
										className={cn(
											"w-5 h-5 transition-transform duration-300",
											activeCategory === category.label && "rotate-180",
										)}
									/>
								</button>
								{activeCategory === category.label && category.description && (
									<div className="py-4 text-sm text-muted-foreground animate-slide-down">
										<p className="font-light mb-4">{category.description}</p>
										<Link
											href={category.href}
											onClick={handleLinkClick}
											className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary hover:gap-2 transition-all"
										>
											Enter Cluster
										</Link>
									</div>
								)}
							</li>
						))}
					</ul>
				</div>
			</nav>
		);
	}

	return (
		<nav
			className={cn(
				"hidden md:block w-full bg-background/95 backdrop-blur-md border-b border-border/30",
				className,
			)}
			aria-label="Main navigation"
		>
			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<ul className="flex items-center justify-center h-14">
					{categories.map((category) => (
						<li
							key={category.label}
							className="relative h-full flex items-center"
							onMouseEnter={() => setHoveredCategory(category.label)}
							onMouseLeave={() => setHoveredCategory(null)}
						>
							<Link
								href={category.href}
								className={cn(
									"relative px-6 h-full flex items-center text-[11px] font-bold uppercase tracking-[0.15em]",
									"text-foreground/60 hover:text-foreground",
									"transition-all duration-300 ease-out",
									"focus-visible:outline-none focus-visible:bg-accent",
									hoveredCategory === category.label &&
										"text-foreground bg-primary/5",
									category.featured && "text-primary",
								)}
							>
								{category.label}

								{/* Technical Underline */}
								<div
									className={cn(
										"absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500",
										hoveredCategory === category.label ? "w-full" : "w-0",
									)}
								/>
							</Link>

							{/* Dropdown Preview - Technical Box */}
							{hoveredCategory === category.label && category.description && (
								<div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 z-50">
									<div
										className={cn(
											"bg-background border border-border/50 shadow-2xl p-6 w-80 animate-slide-down",
											"relative overflow-hidden",
										)}
									>
										{/* Decorator Grid */}
										<div className="absolute inset-0 bg-grid-technical opacity-10 pointer-events-none" />

										<div className="relative z-10">
											<div className="text-[9px] font-mono text-primary/50 mb-3 tracking-widest uppercase">
												Category Specification
											</div>
											<p className="text-sm text-foreground mb-6 leading-relaxed font-light">
												{category.description}
											</p>
											<Link
												href={category.href}
												className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-primary group"
											>
												<span>Access Resource</span>
												<div className="w-8 h-px bg-primary/30 group-hover:w-12 transition-all" />
											</Link>
										</div>

										{/* Corner Accent */}
										<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30" />
									</div>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default CategoryNav;
