"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui";
import { cn } from "~/utils/cn";

interface HeroProps {
	className?: string;
}

const Hero = ({ className }: HeroProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const heroRef = useRef<HTMLElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	// High-perf parallax via CSS variables (GPU accelerated)
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width - 0.5;
			const y = (e.clientY - rect.top) / rect.height - 0.5;

			// Update CSS variables directly on the element to avoid React re-renders
			containerRef.current.style.setProperty("--mouse-x", `${x * 30}px`);
			containerRef.current.style.setProperty("--mouse-y", `${y * 30}px`);
		};

		const hero = heroRef.current;
		if (hero) {
			hero.addEventListener("mousemove", handleMouseMove, { passive: true });
		}

		return () => {
			if (hero) {
				hero.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, []);

	return (
		<section
			ref={heroRef}
			className={cn(
				"w-full bg-background overflow-hidden relative border-b border-border/50",
				className,
			)}
			aria-label="Hero section"
		>
			{/* Technical Grid Background */}
			<div className="absolute inset-0 bg-grid-technical opacity-50" />

			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
				<div
					ref={containerRef}
					className={cn(
						"relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden",
						"bg-neutral-900 border border-border/50 shadow-2xl",
						"transition-all duration-700 ease-out",
						isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]",
					)}
					style={
						{
							"--mouse-x": "0px",
							"--mouse-y": "0px",
							borderRadius: "var(--radius-md)", // Sharpened geometry
						} as React.CSSProperties
					}
				>
					{/* Background Image with Parallax (Direct CSS Transformation) */}
					<div
						className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform"
						style={{
							transform: "translate(var(--mouse-x), var(--mouse-y)) scale(1.1)",
						}}
					>
						<Image
							src="/hero-products.png"
							alt="Collection of premium printed products"
							fill
							className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
							priority
							sizes="(max-width: 1280px) 100vw, 1280px"
						/>
					</div>

					{/* High-Contrast Gradient Overlays */}
					<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
					<div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />

					{/* Design Accents: Technical Strokes */}
					<div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
					<div className="absolute left-0 top-0 w-20 h-px bg-gradient-to-r from-primary/50 to-transparent" />

					{/* Content: Asymmetric 90/10 Logic */}
					<div className="relative h-full flex flex-col justify-end md:justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
						<div
							className={cn(
								"max-w-3xl transition-all duration-1000 delay-200",
								isVisible
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-12",
							)}
						>
							{/* Technical Badge */}
							<div className="inline-flex items-center gap-3 px-3 py-1 bg-primary text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-8">
								<span className="w-1.5 h-1.5 bg-white rounded-none animate-pulse" />
								Established 1974
							</div>

							{/* Title: Brutalist Massive Type */}
							<h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.85]">
								Precision <br />
								<span className="text-transparent stroke-white stroke-1 [-webkit-text-stroke:1px_white]">
									Printing
								</span>
							</h1>

							{/* Description */}
							<p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed font-light">
								From A0 architectural blueprints to premium business cards. We
								deliver professional accuracy for every project.
							</p>

							{/* CTA Group */}
							<div className="flex flex-col sm:flex-row gap-0 border-l border-white/20">
								<Button
									size="lg"
									className="group/btn bg-white text-black hover:bg-primary hover:text-white rounded-none h-16 px-10 text-base font-bold transition-all duration-300"
									asChild
								>
									<a href="tel:+84983959195">
										Contact Now
										<ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-2" />
									</a>
								</Button>
								<Button
									variant="ghost"
									size="lg"
									className="group/btn text-white hover:bg-white/10 rounded-none h-16 px-10 text-base font-medium border-l border-white/20 transition-all duration-300"
									asChild
								>
									<a href="#categories">View Services</a>
								</Button>
							</div>
						</div>
					</div>

					{/* Geometric Ornament: Top Right */}
					<div className="absolute top-12 right-12 hidden lg:block">
						<div className="flex flex-col items-end gap-1">
							<div className="w-12 h-0.5 bg-primary/50" />
							<div className="w-8 h-0.5 bg-primary/30" />
							<div className="w-4 h-0.5 bg-primary/10" />
						</div>
					</div>

					{/* Vertical Indicator */}
					<div className="absolute left-8 bottom-0 hidden md:flex flex-col items-center gap-4 py-8">
						<div className="w-px h-12 bg-gradient-to-t from-white/50 to-transparent" />
						<span className="text-[10px] text-white/30 uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
							Scroll
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
