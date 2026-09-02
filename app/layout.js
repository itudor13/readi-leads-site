import Script from "next/script";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Readi Leads | Pay for Qualified Meetings",
  description:
    "Done for you targeted email outbound. Pay for qualified meetings. We pick who to email, set up sending, write the notes, and book the meetings that show up.",
  metadataBase: new URL("https://readileads.com"),
  openGraph: {
    title: "Readi Leads | Pay for Qualified Meetings",
    description:
      "Done for you targeted email outbound. Pay for qualified meetings.",
    url: "https://readileads.com",
    siteName: "Readi Leads",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
