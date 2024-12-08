import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "My Porfolio",
  description: "Chris's Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        {children}</body>
    </html>
  );
}
