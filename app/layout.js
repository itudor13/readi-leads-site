import "./globals.css";

export const metadata = {
  title: "Readi Leads | Done-for-you B2B outbound",
  description:
    "Readi Leads builds and runs targeted cold email systems for B2B companies — from market research and data to infrastructure, campaign execution, and reply handling.",
  metadataBase: new URL("https://readileads.com"),
  openGraph: {
    title: "Readi Leads | Done-for-you B2B outbound",
    description:
      "Targeted outbound systems built to create qualified sales conversations.",
    url: "https://readileads.com",
    siteName: "Readi Leads",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
