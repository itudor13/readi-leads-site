import PlanCalculator from "./plan-calculator";
import "./calculator.css";

export const metadata = {
  title: "ROI Calculator | Readi Leads",
  description: "Estimate potential monthly revenue and costs for a Readi Leads outbound campaign.",
};

export default function CalculatorPage() {
  return (
    <main className="plan-page">
      <header className="site-header plan-header">
        <a className="brand" href="/" aria-label="Readi Leads home">Readi Leads</a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/how-it-works">How it works</a>
          <a href="https://calendly.com/ian-readileads/30min">Book a call</a>
        </nav>
      </header>
      <PlanCalculator />
    </main>
  );
}
