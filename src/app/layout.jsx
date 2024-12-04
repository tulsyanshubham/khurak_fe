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
        <body>
          {children}
        </body>
      </Providers>
    </html>
  );
}
