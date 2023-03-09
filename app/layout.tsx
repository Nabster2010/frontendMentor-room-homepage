import "./globals.css";
import { League_Spartan } from "@next/font/google";
import NavBar from "./navbar";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-spartan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${leagueSpartan.variable}`}>
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
