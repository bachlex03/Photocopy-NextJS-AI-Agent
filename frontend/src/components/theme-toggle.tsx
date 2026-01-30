"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui";
import { useTheme } from "~/providers/theme-provider";

export function ThemeToggle() {
	const { resolvedTheme, toggleTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
			title={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
			className="relative overflow-hidden"
		>
			<Sun
				className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
				aria-hidden="true"
			/>
			<Moon
				className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
				aria-hidden="true"
			/>
		</Button>
	);
}
