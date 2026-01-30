"use client";

import { Languages, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { ThemeToggle } from "~/components/theme-toggle";
import { Input } from "~/components/ui";
import { cn } from "~/utils/cn";

interface BrandBarProps {
	className?: string;
	onMenuToggle?: () => void;
	isMenuOpen?: boolean;
}

const BrandBar = ({
	className,
	onMenuToggle,
	isMenuOpen = false,
}: BrandBarProps) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			if (searchQuery.trim()) {
				// Handle search
				console.log("Searching for:", searchQuery);
			}
		},
		[searchQuery],
	);

	return (
		<div
			className={cn(
				"w-full bg-background/95 backdrop-blur-md border-b border-border/30 sticky top-0 z-40",
				className,
			)}
		>
			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between gap-4 h-16 md:h-20">
					{/* Mobile Menu Button - Sharpened */}
					<button
						type="button"
						onClick={onMenuToggle}
						className="md:hidden p-3 -ml-3 rounded-none hover:bg-accent transition-colors duration-200 border-r border-border/30"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
					>
						{isMenuOpen ? (
							<X className="w-5 h-5 text-foreground" aria-hidden="true" />
						) : (
							<Menu className="w-5 h-5 text-foreground" aria-hidden="true" />
						)}
					</button>

					{/* Brand Logo - Sharper container */}
					<a
						href="/"
						className="flex items-center gap-4 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary h-full px-4 border-l border-r border-border/10"
						aria-label="Hoang Dung Photocopy - Home"
					>
						<div className="relative group">
							<Image
								src="/hoangdung-logo.svg"
								alt="Hoang Dung Logo"
								width={140}
								height={36}
								className="h-7 md:h-9 w-auto object-contain transition-all duration-500 group-hover:brightness-110"
								priority
							/>
							<div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
						</div>
					</a>

					{/* Desktop Search Bar - Technical Geometry */}
					<search className="hidden md:flex flex-1 max-w-xl mx-12">
						<form onSubmit={handleSearchSubmit} className="w-full">
							<div
								className={cn(
									"relative w-full group transition-all duration-300",
								)}
							>
								<Input
									type="search"
									placeholder="SEARCH SYSTEM DATA..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className={cn(
										"w-full h-12 pl-6 pr-14 rounded-none border-x-0 border-t-0 border-b-2 bg-secondary/30",
										"placeholder:text-muted-foreground/30 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-[0.2em] placeholder:not-italic",
										"focus:bg-secondary/50 focus:border-primary/50",
										"transition-all duration-300",
									)}
									aria-label="Search products"
								/>
								<button
									type="submit"
									className="absolute right-0 top-0 h-12 w-12 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
									aria-label="Submit search"
								>
									<Search className="w-4 h-4" aria-hidden="true" />
								</button>
								{/* Technical Accent for Search */}
								<div className="absolute top-0 right-0 w-1 h-1 bg-primary/30" />
							</div>
						</form>
					</search>

					{/* Right Actions - Technical Grid Style */}
					<div className="flex items-center h-full">
						<div className="h-full px-4 border-l border-border/30 flex items-center">
							<ThemeToggle />
						</div>

						{/* Language Selector - Sharpened */}
						<button
							type="button"
							className="flex items-center gap-3 h-full px-6 border-l border-border/30 text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
							aria-label="Select language"
							title="Language: Vietnamese"
						>
							<Languages className="w-4 h-4 text-primary" aria-hidden="true" />
							<span className="hidden lg:inline text-[10px] font-bold uppercase tracking-[0.2em]">
								VND / VI
							</span>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Search - Simplified Sharp */}
			<div className="md:hidden px-4 pb-4">
				<search>
					<form onSubmit={handleSearchSubmit}>
						<div className="relative">
							<Input
								type="search"
								placeholder="SEARCH..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full h-11 pl-4 pr-12 rounded-none border-x-0 border-t-0 border-b-2 bg-secondary/30 text-xs placeholder:tracking-widest"
								aria-label="Search products"
							/>
							<button
								type="submit"
								className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-muted-foreground"
								aria-label="Submit search"
							>
								<Search className="w-4 h-4" aria-hidden="true" />
							</button>
						</div>
					</form>
				</search>
			</div>
		</div>
	);
};

export default BrandBar;
