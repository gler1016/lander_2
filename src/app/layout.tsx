import type { Metadata } from "next";
import { METADATA } from "@/@content";
import { variableClassNames } from "@/@design/fonts";
import { cn } from "@/util/cn";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "../styles/globals.scss";
import Footer from "@/components/Footer";

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(variableClassNames)}>
        <ThemeProvider>
          {children}    
        </ThemeProvider>
      </body>
    </html>
  );
}