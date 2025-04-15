import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Feed",
  description: "Living feed of Stephen Hathaway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
