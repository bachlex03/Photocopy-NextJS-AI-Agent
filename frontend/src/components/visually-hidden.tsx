import { cn } from "~/utils/cn";

/**
 * VisuallyHidden component
 * Hides content visually while keeping it accessible to screen readers
 *
 * @example
 * <button>
 *   <VisuallyHidden>Open menu</VisuallyHidden>
 *   <MenuIcon />
 * </button>
 */
interface VisuallyHiddenProps {
	children: React.ReactNode;
	className?: string;
}

export function VisuallyHidden({ children, className }: VisuallyHiddenProps) {
	return (
		<span
			className={cn(
				"absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
				className,
			)}
			style={{
				clip: "rect(0, 0, 0, 0)",
				clipPath: "inset(50%)",
			}}
		>
			{children}
		</span>
	);
}
