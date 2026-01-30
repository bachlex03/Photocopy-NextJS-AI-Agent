import { cn } from "~/utils/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "circle" | "text";
	lines?: number;
}

function Skeleton({
	className,
	variant = "default",
	lines = 1,
	...props
}: SkeletonProps) {
	if (variant === "text" && lines > 1) {
		return (
			<div className="space-y-2" {...props}>
				{Array.from({ length: lines }).map((_, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: Skeleton lines are static and order doesn't change
						key={index}
						className={cn(
							"animate-pulse rounded-md bg-muted",
							index === lines - 1 ? "w-3/4" : "w-full",
							"h-4",
							className,
						)}
					/>
				))}
			</div>
		);
	}

	const variantStyles = {
		default: "rounded-md",
		circle: "rounded-full",
		text: "rounded-md h-4",
	};

	return (
		<div
			className={cn(
				"animate-pulse bg-muted",
				variantStyles[variant],
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
