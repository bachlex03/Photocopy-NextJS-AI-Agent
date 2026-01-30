"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { cn } from "~/utils/cn";

// Dynamic imports for code splitting
const UtilityBar = dynamic(() => import("./_components/utility-bar"), {
	loading: () => <div className="h-10 bg-secondary/30 animate-pulse" />,
});

const BrandBar = dynamic(() => import("./_components/brand-bar"), {
	loading: () => <div className="h-20 bg-background animate-pulse" />,
});

const CategoryNav = dynamic(() => import("./_components/category-nav"), {
	loading: () => <div className="h-12 bg-background animate-pulse" />,
});

interface HeaderProps {
	className?: string;
}

const Header = ({ className }: HeaderProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleMenuToggle = useCallback(() => {
		setIsMobileMenuOpen((prev) => !prev);
	}, []);

	const handleMenuClose = useCallback(() => {
		setIsMobileMenuOpen(false);
	}, []);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	// Close mobile menu on escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isMobileMenuOpen) {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isMobileMenuOpen]);

	return (
		<>
			<header
				className={cn(
					"w-full flex flex-col sticky top-0 z-50",
					"transition-shadow duration-300",
					isScrolled && "shadow-lg shadow-foreground/5",
					className,
				)}
			>
				<UtilityBar />
				<BrandBar
					onMenuToggle={handleMenuToggle}
					isMenuOpen={isMobileMenuOpen}
				/>
				<CategoryNav />
			</header>

			{/* Mobile Menu Overlay */}
			<CategoryNav
				isMobile
				isOpen={isMobileMenuOpen}
				onClose={handleMenuClose}
			/>

			{/* Backdrop */}
			{isMobileMenuOpen && (
				<div
					className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-20 animate-fade-in"
					onClick={handleMenuClose}
					aria-hidden="true"
				/>
			)}
		</>
	);
};

export default Header;
