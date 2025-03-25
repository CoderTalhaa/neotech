import { PT_Sans_Narrow, Inter, Nunito, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utils/nav/Navbar";
import Footer from "@/components/ui/Footer";
import Cursor from "@/components/utils/Cursor";

const pt_sans_narrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt_sans_narrow",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const nunito = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Neo Technology Developers",
  description:
    "It&rsquo;s not a faith in technology. It&rsquo;s faith in people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/T.svg" />
      </head>
      <body
        className={`${pt_sans_narrow.variable} ${inter.variable} ${nunito.variable} antialiased`}
      >
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
