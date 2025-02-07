import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/app/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Load regular and bold weights
  variable: "--font-roboto", // Optional: Define a CSS variable
  display: "swap",
});

const homeUrl =
  "https://lhebnpqypzctccgh.public.blob.vercel-storage.com/hero.jpg";

export const metadata: Metadata = {
  title:
    "Nisida Industries - Specialists in AC and DC electrical motor repairs ",
  description:
    "Nisida, a Level 1 BEE-rated company based in Industria, Johannesburg, specializes in AC and DC motor repairs, servo and stepper motsor repairs, and custom motor design and manufacturing",
  openGraph: {
    title:
      "Nisida Industries - Specialists in AC and DC electrical motor repairs",
    description:
      "Nisida, a Level 1 BEE-rated company based in Industria, Johannesburg, specializes in AC and DC motor repairs, servo and stepper motsor repairs, and custom motor design and manufacturing",
    url: `https://nisidaa/`,
    type: "article",
    siteName: "Nisida Industries",
    images: [
      {
        url: homeUrl,
        width: 1200,
        height: 630,
        alt: "home",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${roboto.variable}  ${inter.variable}  antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
