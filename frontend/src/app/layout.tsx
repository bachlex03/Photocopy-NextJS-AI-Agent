import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "~/providers/theme-provider";
import "~/styles/globals.css";

const geistSans = localFont({
	src: "../assets/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
	display: "swap",
});

const geistMono = localFont({
	src: "../assets/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Hoang Dung Photocopy - Professional Printing Services",
		template: "%s | Hoang Dung Photocopy",
	},
	description:
		"Professional photocopy and printing services in Dong Thap. From business cards to A0 technical drawings, we deliver quality printing for all your needs.",
	keywords: [
		"photocopy",
		"printing",
		"business cards",
		"flyers",
		"decal",
		"Dong Thap",
		"Vietnam",
	],
	authors: [{ name: "Hoang Dung Photocopy" }],
	creator: "Hoang Dung Photocopy",
	openGraph: {
		type: "website",
		locale: "vi_VN",
		siteName: "Hoang Dung Photocopy",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
				suppressHydrationWarning
			>
				<ThemeProvider
					defaultTheme="system"
					enableSystem
					storageKey="hoangdung-theme"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
