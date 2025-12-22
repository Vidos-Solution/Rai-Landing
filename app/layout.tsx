import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  title: "Vidos Responsible AI (RAI)",
  description: "Practical Responsible AI for professional environments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NavbarWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

