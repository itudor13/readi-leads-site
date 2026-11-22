import FundingLeadPage from "./funding-lead-page";
import "./page.css";

export const metadata = {
  title: "Business Funding Leads for Lenders | Readi Leads",
  description:
    "Qualified small-business funding inquiries for direct lenders and business-loan brokers, generated through Readi Leads paid-social funnels.",
  alternates: {
    canonical: "/business-funding-leads",
  },
  openGraph: {
    title: "Business Funding Leads for Lenders | Readi Leads",
    description:
      "Define the businesses you want to fund. Readi Leads builds and operates the funnel that brings them to you.",
    url: "https://readileads.com/business-funding-leads",
    siteName: "Readi Leads",
    type: "website",
  },
};

export default function BusinessFundingLeadsPage() {
  return <FundingLeadPage />;
}
