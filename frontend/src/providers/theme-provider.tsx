"use client";

import * as React from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	enableSystem?: boolean;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
	resolvedTheme: "dark" | "light";
};

const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
	toggleTheme: () => null,
	resolvedTheme: "light",
};

const ThemeProviderContext =
	React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
	children,
	defaultTheme = "system",
	enableSystem = true,
	storageKey = "theme",
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = React.useState<Theme>(defaultTheme);
	const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">(
		"light",
	);
	const [mounted, setMounted] = React.useState(false);

	// Safe useLayoutEffect for SSR
	const useIsomorphicLayoutEffect =
		typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

	React.useEffect(() => {
		setMounted(true);
		const savedTheme = localStorage.getItem(storageKey) as Theme;
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, [storageKey]);

	// Apply theme effect
	useIsomorphicLayoutEffect(() => {
		if (!mounted) return;

		const applyTheme = () => {
			const root = window.document.documentElement;
			root.classList.add("no-transitions");
			root.classList.remove("light", "dark");

			let resolved: "dark" | "light";
			if (theme === "system" && enableSystem) {
				resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light";
			} else {
				resolved = theme as "dark" | "light";
			}

			// Add class to root
			root.classList.add(resolved);
			setResolvedTheme(resolved);
			localStorage.setItem(storageKey, theme);

			// Force reflow to ensure the class change is applied before removing no-transitions
			window.getComputedStyle(root).opacity;

			// Remove the no-transitions class after a small tick
			requestAnimationFrame(() => {
				root.classList.remove("no-transitions");
			});
		};

		// Use View Transition API if supported for premium feel
		if (document.startViewTransition) {
			document.startViewTransition(() => applyTheme());
		} else {
			applyTheme();
		}
	}, [theme, enableSystem, mounted, storageKey]);

	// Listen for system theme changes
	React.useEffect(() => {
		if (!enableSystem) return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => {
			if (theme === "system") {
				const applySystemTheme = () => {
					const root = window.document.documentElement;
					root.classList.add("no-transitions");
					root.classList.remove("light", "dark");
					const resolved = mediaQuery.matches ? "dark" : "light";
					root.classList.add(resolved);
					setResolvedTheme(resolved);

					// Force reflow
					window.getComputedStyle(root).opacity;

					requestAnimationFrame(() => {
						root.classList.remove("no-transitions");
					});
				};

				if (document.startViewTransition) {
					document.startViewTransition(() => applySystemTheme());
				} else {
					applySystemTheme();
				}
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme, enableSystem]);

	const toggleTheme = React.useCallback(() => {
		setTheme((prev) => {
			if (prev === "light") return "dark";
			if (prev === "dark") return "light";
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "light"
				: "dark";
		});
	}, []);

	const value = React.useMemo(
		() => ({
			theme,
			setTheme,
			toggleTheme,
			resolvedTheme,
		}),
		[theme, toggleTheme, resolvedTheme],
	);

	// Prevent flash of wrong theme
	if (!mounted) {
		return <div style={{ visibility: "hidden" }}>{children}</div>;
	}

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = React.useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};
