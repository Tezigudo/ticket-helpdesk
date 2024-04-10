import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const inter = Inter({ subsets: ["latin"] });
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
