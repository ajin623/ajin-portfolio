import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajin Babu | AI in Business Portfolio",
  description: "Personal portfolio of Ajin Babu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}