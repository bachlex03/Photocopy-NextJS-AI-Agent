"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui";
import { cn } from "~/utils/cn";

interface Category {
	id: string;
	label: string;
	description: string;
	image: string;
	color: string;
	href: string;
}

const categories: Category[] = [
	{
		id: "business-cards",
		label: "Bao thư - Danh thiếp",
		description: "In card visit, bao thư chuyên nghiệp",
		image: "/cat-business-cards.png",
		color: "from-amber-100 to-orange-50",
		href: "#",
	},
	{
		id: "flyers",
		label: "Tờ rơi & Brochure",
		description: "Tờ rơi quảng cáo, brochure đẹp mắt",
		image: "/cat-flyers.png",
		color: "from-emerald-100 to-teal-50",
		href: "#",
	},
	{
		id: "decals",
		label: "In - Cắt Decal",
		description: "Decal dán, tem nhãn, sticker",
		image: "/cat-stickers.png",
		color: "from-rose-100 to-pink-50",
		href: "#",
	},
	{
		id: "blueprints",
		label: "In màu bản vẽ A0",
		description: "Bản vẽ kỹ thuật, bản đồ chất lượng cao",
		image: "/cat-flyers.png",
		color: "from-blue-100 to-indigo-50",
		href: "#",
	},
	{
		id: "photocopy",
		label: "Photocopy A4 - A0",
		description: "Photocopy mọi khổ giấy nhanh chóng",
		image: "/cat-business-cards.png",
		color: "from-violet-100 to-purple-50",
		href: "#",
	},
	{
		id: "photos",
		label: "Bưu ảnh - Giấy khen",
		description: "In ảnh thẻ, giấy khen, chứng nhận",
		image: "/cat-stickers.png",
		color: "from-cyan-100 to-sky-50",
		href: "#",
	},
];

interface ExploreCategoriesProps {
	className?: string;
}

const ExploreCategories = ({ className }: ExploreCategoriesProps) => {
	const scrollRef = useRef<HTMLUListElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	// Intersection Observer for entrance animation
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const checkScrollPosition = useCallback(() => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
		}
	}, []);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", checkScrollPosition, {
				passive: true,
			});
			checkScrollPosition();
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener("scroll", checkScrollPosition);
			}
		};
	}, [checkScrollPosition]);

	const scroll = useCallback((direction: "left" | "right") => {
		if (scrollRef.current) {
			const scrollAmount = 320;
			scrollRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	}, []);

	return (
		<section
			ref={sectionRef}
			id="categories"
			className={cn(
				"w-full bg-background py-16 md:py-24 relative overflow-hidden",
				className,
			)}
			aria-labelledby="categories-heading"
		>
			{/* Sub-grid Decorator */}
			<div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" />

			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Technical Header */}
				<div
					className={cn(
						"flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16",
						"transition-all duration-1000",
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
					)}
				>
					<div className="border-l-4 border-primary pl-6">
						<span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-3 block">
							Service Catalog
						</span>
						<h2
							id="categories-heading"
							className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tighter uppercase"
						>
							Precision <br /> Solutions
						</h2>
						<p className="text-muted-foreground max-w-lg text-lg font-light leading-relaxed">
							Industrial-grade printing and reproduction services, calibrated
							for accuracy and longevity.
						</p>
					</div>

					{/* Navigation Controls - Technical Style */}
					<div className="flex items-center gap-0 border border-border/50">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => scroll("left")}
							disabled={!canScrollLeft}
							className="rounded-none w-14 h-14 border-r border-border/50 hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-20"
							aria-label="Scroll left"
						>
							<ChevronLeft className="w-6 h-6" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => scroll("right")}
							disabled={!canScrollRight}
							className="rounded-none w-14 h-14 hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-20"
							aria-label="Scroll right"
						>
							<ChevronRight className="w-6 h-6" />
						</Button>
					</div>
				</div>

				{/* Categories Container */}
				<div className="relative group">
					<ul
						ref={scrollRef}
						className={cn(
							"flex gap-0 overflow-x-auto pb-8 snap-x snap-mandatory",
							"scroll-smooth no-scrollbar",
							"-mx-4 px-4 md:mx-0 md:px-0",
							"list-none",
						)}
						aria-label="Categories carousel"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
						{categories.map((category, index) => (
							<li
								key={category.id}
								className="border-r border-border/30 last:border-r-0"
							>
								<div
									className={cn(
										"flex-shrink-0 w-[300px] md:w-[380px] snap-start",
										"group/card cursor-pointer overflow-hidden bg-background",
										"transition-all duration-700",
										isVisible
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-12",
									)}
									style={{
										transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
									}}
								>
									<a href={category.href} className="block group">
										{/* Image Space */}
										<div
											className={cn(
												"relative h-64 md:h-72 overflow-hidden bg-neutral-50 dark:bg-neutral-900/50",
												"border-b border-border/30",
											)}
										>
											{/* Technical Overlay */}
											<div className="absolute top-4 left-4 text-[8px] font-mono text-muted-foreground/50 tracking-widest uppercase">
												Ref: {category.id.slice(0, 8)}
											</div>

											<div className="absolute inset-0 flex items-center justify-center p-12">
												<div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
													<Image
														src={category.image}
														alt={category.label}
														fill
														className="object-contain"
														sizes="(max-width: 768px) 240px, 320px"
													/>
												</div>
											</div>

											{/* Sharp Hover Underline */}
											<div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
										</div>

										{/* Content Area */}
										<div className="p-8">
											<h3 className="font-bold text-xl text-foreground mb-2 items-center flex gap-2 uppercase tracking-tight">
												<span className="text-primary font-mono text-sm">
													0{index + 1}
												</span>
												{category.label}
											</h3>
											<p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed h-10 overflow-hidden line-clamp-2">
												{category.description}
											</p>
											<div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary group-hover:gap-4 transition-all duration-300">
												<span>Initialize Service</span>
												<ArrowRight className="w-3 h-3 ml-2" />
											</div>
										</div>
									</a>
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Footer CTA */}
				<div
					className={cn(
						"flex flex-col md:flex-row items-center justify-between border-t border-border/50 pt-12 mt-8",
						"transition-all duration-1000 delay-700",
						isVisible ? "opacity-100" : "opacity-0",
					)}
				>
					<div className="text-sm text-muted-foreground mb-6 md:mb-0 font-mono italic">
						* All services calibrated to ISO reproduction standards.
					</div>
					<Button
						variant="default"
						size="lg"
						className="rounded-none h-14 px-12 bg-foreground text-background hover:bg-primary transition-colors font-bold uppercase tracking-widest text-xs"
					>
						Full Capabilities Matrix
						<ArrowRight className="w-4 h-4 ml-3" />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ExploreCategories;
