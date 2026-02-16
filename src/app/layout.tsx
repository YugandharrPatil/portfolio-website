import ClientSideProviders from "@/components/providers/client-side-providers";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
config.autoAddCss = false;

// FONTS
import {
  geistMono,
  geistSans,
  playfairDisplay,
  poppinsFont,
  sourceCodePro,
} from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Yugandhar Patil",
  description: "Indie Developer from India!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="smooth-scroll"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppinsFont.variable} ${playfairDisplay.variable} ${sourceCodePro.variable} container mx-auto antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ClientSideProviders>{children}</ClientSideProviders>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
