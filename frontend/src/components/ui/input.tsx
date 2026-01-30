import * as React from "react";
import { cn } from "~/utils/cn";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	errorMessage?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type,
			error,
			errorMessage,
			leftIcon,
			rightIcon,
			disabled,
			...props
		},
		ref,
	) => {
		return (
			<div className="relative w-full">
				{leftIcon && (
					<div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
						{leftIcon}
					</div>
				)}
				<input
					type={type}
					className={cn(
						"flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
						leftIcon && "pl-10",
						rightIcon && "pr-10",
						error && "border-destructive focus-visible:ring-destructive",
						className,
					)}
					ref={ref}
					disabled={disabled}
					{...props}
				/>
				{rightIcon && (
					<div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
						{rightIcon}
					</div>
				)}
				{error && errorMessage && (
					<p className="mt-1.5 text-xs text-destructive animate-slide-down">
						{errorMessage}
					</p>
				)}
			</div>
		);
	},
);
Input.displayName = "Input";

export { Input };
