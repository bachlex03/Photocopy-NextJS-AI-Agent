"use client";

import { cn } from "~/utils/cn";

interface SkipLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

/**
 * Skip Link component for accessibility
 * Allows keyboard users to skip to main content
 *
 * @example
 * <SkipLink href="#main-content">Skip to main content</SkipLink>
 */
export function SkipLink({ href, children, className }: SkipLinkProps) {
	return (
		<a
			href={href}
			className={cn(
				"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4",
				"z-[100] px-4 py-2 bg-primary text-primary-foreground rounded-md",
				"font-medium text-sm shadow-lg",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				className,
			)}
		>
			{children}
		</a>
	);
}

/**
 * Main content wrapper with id for skip link target
 */
interface MainContentProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
}

export function MainContent({
	children,
	className,
	id = "main-content",
}: MainContentProps) {
	return (
		<main id={id} className={className} tabIndex={-1}>
			{children}
		</main>
	);
}
