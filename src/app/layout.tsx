import { ThemeProvider } from "@/app/components/theme-provider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
config.autoAddCss = false;

export const metadata: Metadata = {
	title: "Yugandhar Patil",
	description: "Indie Developer from India!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="smooth-scroll" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
