import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";


export const metadata: Metadata = {
  title: "Khurak",
  description: "something i dont know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider >
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
