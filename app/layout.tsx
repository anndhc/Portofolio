import type { Metadata } from "next";
import { Bodoni_Moda, Nunito_Sans } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anindha Cahya M.S | UI/UX Designer",
  description: "Portfolio of Anindha Cahya M.S, UI/UX Designer specializing in intuitive and visually appealing interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${nunito.variable} scroll-smooth`}
    >
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
