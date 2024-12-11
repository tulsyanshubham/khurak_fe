import { Providers } from "@/components/Provider";
import "./globals.css";

export const metadata = {
  title: "Khuraak",
  description: "something i dont know",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers >
        <body className="dark">
          {children}
        </body>
      </Providers>
    </html>
  );
}
