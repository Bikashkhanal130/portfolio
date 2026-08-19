import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bikashkhanal1.com.np"),
  title: "Bikash Khanal | Digital Payments & Full-Stack Developer",
  description:
    "Bikash Khanal — Digital Payments Specialist, Technical Support Professional, and Full-Stack Developer based in Kathmandu, Nepal.",
  openGraph: {
    title: "Bikash Khanal | Digital Payments & Full-Stack Developer",
    description:
      "Digital Payments Specialist, Technical Support Professional, and Full-Stack Developer based in Kathmandu, Nepal.",
    type: "website",
    images: ["/bikash-khanal.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikash Khanal | Digital Payments & Full-Stack Developer",
    description:
      "Digital Payments Specialist, Technical Support Professional, and Full-Stack Developer based in Kathmandu, Nepal.",
    images: ["/bikash-khanal.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
