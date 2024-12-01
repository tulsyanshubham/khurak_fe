import "./globals.css";

export const metadata = {
  title: "Khuraak",
  description: "something i dont know",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  );
}
