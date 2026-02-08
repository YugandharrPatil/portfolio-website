import type {Metadata} from "next";
import {Geist, Geist_Mono, Poppins} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const poppinsFont = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
});

const geistSans = Geist({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	title: "Yugandhar Patil",
	description: "Indie Developer from India!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="smooth-scroll" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} ${poppinsFont.variable} antialiased container mx-auto`}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
