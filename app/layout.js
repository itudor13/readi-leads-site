import "./globals.css";

export const metadata = {
  title: "Readi Leads | Done for you targeted email outbound",
  description:
    "Done for you targeted email outbound. Pay for qualified meetings. Readi Leads runs the sending for you, and you pay when a qualified meeting shows up.",
  metadataBase: new URL("https://readileads.com"),
  openGraph: {
    title: "Readi Leads | Done for you targeted email outbound",
    description:
      "Done for you targeted email outbound. Pay for qualified meetings.",
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
