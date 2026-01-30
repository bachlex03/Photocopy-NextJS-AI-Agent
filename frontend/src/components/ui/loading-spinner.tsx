import { cn } from "~/utils/cn";

interface LoadingSpinnerProps {
	className?: string;
	size?: "sm" | "md" | "lg" | "xl";
	variant?: "default" | "primary" | "white";
}

const sizeClasses = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8",
	xl: "w-12 h-12",
};

const variantClasses = {
	default: "text-muted-foreground",
	primary: "text-primary",
	white: "text-white",
};

export function LoadingSpinner({
	className,
	size = "md",
	variant = "default",
}: LoadingSpinnerProps) {
	return (
		<output
			className={cn("inline-flex items-center justify-center", className)}
			aria-label="Loading"
		>
			<svg
				className={cn(
					"animate-spin",
					sizeClasses[size],
					variantClasses[variant],
				)}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<title>Loading spinner</title>
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				/>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
			<span className="sr-only">Loading...</span>
		</output>
	);
}

interface LoadingOverlayProps {
	className?: string;
	children?: React.ReactNode;
	isLoading: boolean;
}

export function LoadingOverlay({
	className,
	children,
	isLoading,
}: LoadingOverlayProps) {
	return (
		<div className={cn("relative", className)}>
			{children}
			{isLoading && (
				<div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
					<LoadingSpinner size="xl" />
				</div>
			)}
		</div>
	);
}
