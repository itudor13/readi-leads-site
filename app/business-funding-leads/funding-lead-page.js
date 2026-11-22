"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/ian-readileads/30min";

const fitCards = [
  {
    title: "Direct business lenders",
    copy: "Teams funding small businesses directly with a defined credit box, geographic footprint, and sales capacity.",
  },
  {
    title: "Business-loan brokers",
    copy: "Brokerages with active lender relationships, a clear product mix, and people ready to work new inquiries quickly.",
  },
  {
    title: "Established sales floors",
    copy: "Buyers who can contact leads promptly, track outcomes, and give useful feedback so targeting can improve.",
  },
];

const process = [
  ["Define the buy box", "We align on geography, revenue, time in business, product type, exclusions, and delivery capacity."],
  ["Build the funnel", "Readi Leads creates the ads, landing experience, qualification logic, and routing around that profile."],
  ["Generate inquiries", "Small-business owners enter through owned paid-social funnels and answer the agreed qualification questions."],
  ["Deliver and learn", "Qualified inquiries are routed for follow-up. Your disposition feedback helps sharpen future targeting."],
];

const faqs = [
  [
    "Are the leads exclusive?",
    "Exclusive, shared, and aged inquiries may be available depending on the market, product, geography, and current supply. We confirm the available format before anything starts.",
  ],
  [
    "How quickly are inquiries delivered?",
    "When live delivery is configured, inquiries can be routed as they arrive. Fast follow-up matters, so buyers should have a process for contacting new inquiries within minutes during operating hours.",
  ],
  [
    "Can we choose our qualification criteria?",
    "Yes. Geography, revenue, time in business, product type, and other agreed filters can shape the funnel and qualification flow. Availability depends on how narrow the profile is.",
  ],
  [
    "Where do the inquiries come from?",
    "Readi Leads generates them through paid-social funnels that we operate. The business owner chooses to submit an inquiry through that experience.",
  ],
  [
    "Do you guarantee a specific lead volume or close rate?",
    "No blanket volume or close-rate claim is made on this page. Supply and performance vary by market, offer, filters, speed-to-contact, and sales execution. We review fit and current availability on the call.",
  ],
  [
    "What happens after the call?",
    "If there is a fit, we document the buy box, available lead format, routing, feedback loop, and commercial terms before launch.",
  ],
];

function trackMeta(event, payload, attempt = 0) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, payload);
    return;
  }
  if (typeof window !== "undefined" && attempt < 20) {
    window.setTimeout(() => trackMeta(event, payload, attempt + 1), 150);
  }
}

function CalendlyBooking({ name, email }) {
  const containerRef = useRef(null);
  const [widgetReady, setWidgetReady] = useState(false);

  const bookingUrl = useMemo(() => {
    const params = new URLSearchParams({
      hide_gdpr_banner: "1",
      background_color: "fbf8f1",
      text_color: "14241d",
      primary_color: "c45c41",
    });
    if (name) params.set("name", name);
    if (email) params.set("email", email);
    return `${CALENDLY_URL}?${params.toString()}`;
  }, [name, email]);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const init = () => {
      if (cancelled || !containerRef.current) return;
      if (window.Calendly?.initInlineWidget) {
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: bookingUrl,
          parentElement: containerRef.current,
        });
        setWidgetReady(true);
        return;
      }
      attempts += 1;
      if (attempts < 40) window.setTimeout(init, 150);
    };

    init();
    return () => {
      cancelled = true;
    };
  }, [bookingUrl]);

  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event !== "calendly.event_scheduled") return;
      if (sessionStorage.getItem("readileads-funding-schedule") === "1") return;
      sessionStorage.setItem("readileads-funding-schedule", "1");
      trackMeta("Schedule", { content_name: "Business Funding Leads Call" });
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="bf-calendar-wrap" aria-label="Book a business funding lead availability call">
      {!widgetReady && <p className="bf-calendar-loading">Loading available times…</p>}
      <div ref={containerRef} className="bf-calendly" />
    </div>
  );
}

function QualificationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "" });

  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    setContact({ name, email });
    setSubmitted(true);

    if (sessionStorage.getItem("readileads-funding-lead") !== "1") {
      sessionStorage.setItem("readileads-funding-lead", "1");
      trackMeta("Lead", { content_name: "Business Funding Buyer Qualification" });
    }

    window.setTimeout(() => {
      document.getElementById("booking-calendar")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="bf-qualify-shell" id="qualify">
      <div className="bf-qualify-copy">
        <p className="bf-kicker">Buyer qualification</p>
        <h2>See whether there is availability for your buy box.</h2>
        <p>
          This short check helps us understand whether your team is set up to work new funding inquiries. Complete it to unlock the live calendar.
        </p>
        <ul>
          <li>No pricing commitment</li>
          <li>No lead-volume promise</li>
          <li>Your answers are never included in Meta event data</li>
        </ul>
      </div>

      {!submitted ? (
        <form className="bf-form" onSubmit={submit}>
          <div className="bf-field-grid">
            <label>
              Your name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Work email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Company
              <input name="company" autoComplete="organization" required />
            </label>
            <label>
              Website
              <input name="website" type="url" inputMode="url" placeholder="https://" />
            </label>
            <label>
              Buyer type
              <select name="buyerType" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Direct lender</option>
                <option>Business-loan broker</option>
                <option>Lender and broker</option>
                <option>Other funding provider</option>
              </select>
            </label>
            <label>
              New-inquiry capacity
              <select name="capacity" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>1–10 per week</option>
                <option>11–25 per week</option>
                <option>26–50 per week</option>
                <option>51+ per week</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>

          <fieldset>
            <legend>Products you actively place or fund</legend>
            <div className="bf-check-grid">
              {["Working capital", "Term loans", "Lines of credit", "Equipment financing", "SBA", "Revenue-based financing"].map((product) => (
                <label key={product}>
                  <input type="checkbox" name="products" value={product} />
                  <span>{product}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label>
            Primary geography
            <input name="geography" placeholder="States, regions, or nationwide" required />
          </label>

          <label className="bf-consent">
            <input type="checkbox" name="consent" required />
            <span>
              I agree that Readi Leads may contact me about lead availability. My answers are used to assess fit and are not sent to Meta. If I continue to booking, my name and email are shared with Calendly to schedule the call.
            </span>
          </label>

          <button className="bf-button" type="submit">Check fit and see times</button>
          <p className="bf-form-note">
            No sensitive borrower data is requested here. Calendly handles booking information under its own privacy terms.
          </p>
        </form>
      ) : (
        <div className="bf-booking-panel" id="booking-calendar">
          <div className="bf-success-line">
            <span aria-hidden="true">✓</span>
            <div>
              <strong>Qualification check complete.</strong>
              <p>Choose a time with Ian to review your buy box and current availability.</p>
            </div>
          </div>
          <CalendlyBooking name={contact.name} email={contact.email} />
        </div>
      )}
    </div>
  );
}

export default function FundingLeadPage() {
  useEffect(() => {
    if (sessionStorage.getItem("readileads-funding-view") === "1") return;
    sessionStorage.setItem("readileads-funding-view", "1");
    trackMeta("ViewContent", { content_name: "Business Funding Leads" });
  }, []);

  return (
    <main className="bf-page">
      <header className="bf-header">
        <a className="bf-brand" href="/" aria-label="Readi Leads home">Readi Leads</a>
        <nav aria-label="Business funding leads navigation">
          <a href="#how">How it works</a>
          <a href="#criteria">Targeting</a>
          <a href="#faq">Questions</a>
          <a className="bf-nav-cta" href="#qualify">Request availability</a>
        </nav>
      </header>

      <section className="bf-hero">
        <div className="bf-hero-inner">
          <p className="bf-kicker">For direct lenders and business-loan brokers</p>
          <h1>Meet business owners actively exploring funding.</h1>
          <p className="bf-hero-lead">
            Define your buy box. We build the paid-social funnel and generate small-business funding inquiries your team can work.
          </p>

          <div className="bf-hero-video" aria-labelledby="funding-video-title">
            <span className="bf-play" aria-hidden="true">▶</span>
            <div>
              <p className="bf-video-label">Video coming soon</p>
              <h2 id="funding-video-title">How the business-funding lead system works</h2>
              <p>Ian’s short walkthrough will appear here.</p>
            </div>
          </div>

          <a className="bf-button bf-hero-button" href="#qualify">Qualify and book a call</a>
          <p className="bf-microcopy">Availability depends on product, geography, filters, and current supply.</p>
        </div>
      </section>

      <section className="bf-section" id="how">
        <div className="bf-section-head">
          <p className="bf-kicker">From buy box to follow-up</p>
          <h2>A simple operating system for finding fundable conversations.</h2>
          <p>You define what your team can place or fund. Readi Leads turns that profile into a focused acquisition and delivery process.</p>
        </div>
        <div className="bf-process-grid">
          {process.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bf-section bf-criteria-section" id="criteria">
        <div className="bf-criteria-copy">
          <p className="bf-kicker">Targeting that matches your desk</p>
          <h2>Start with the businesses you want to speak with.</h2>
          <p>
            Criteria can shape both targeting and qualification. We review the tradeoff between a narrower profile and available lead supply before launch.
          </p>
          <a className="bf-text-link" href="#qualify">Bring us your current buy box</a>
        </div>
        <div className="bf-criteria-board">
          {[
            ["Geography", "States, regions, nationwide"],
            ["Business revenue", "Your agreed minimum or range"],
            ["Time in business", "Aligned to your product rules"],
            ["Funding product", "Products your team actively places"],
            ["Additional filters", "Discussed and agreed before launch"],
          ].map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="bf-band">
        <div>
          <p className="bf-kicker">Delivery options</p>
          <h2>Buy the format that fits your sales motion.</h2>
        </div>
        <div className="bf-option-grid">
          <article><h3>Live inquiries</h3><p>Delivered as they arrive when live routing and supply are available.</p></article>
          <article><h3>Exclusive or shared</h3><p>Availability varies by market and campaign. The delivery model is agreed before launch.</p></article>
          <article><h3>Aged opportunities</h3><p>May be available for teams with a proven reactivation and nurture process.</p></article>
        </div>
        <p className="bf-band-note">No format is assumed. Current availability is confirmed on the qualification call.</p>
      </section>

      <section className="bf-section">
        <div className="bf-section-head">
          <p className="bf-kicker">Who this is built for</p>
          <h2>Lead supply works when the buyer has a real follow-up system.</h2>
        </div>
        <div className="bf-fit-grid">
          {fitCards.map((card) => (
            <article key={card.title}><h3>{card.title}</h3><p>{card.copy}</p></article>
          ))}
        </div>
        <div className="bf-speed-callout">
          <div><span>Fast follow-up</span><strong>Contact new inquiries within minutes when possible.</strong></div>
          <p>Speed-to-contact is one of the few variables your team controls. Buyers should have clear ownership, dialing capacity, and outcome tracking before adding volume.</p>
        </div>
      </section>

      <section className="bf-section bf-qualify-section">
        <QualificationForm />
      </section>

      <section className="bf-section" id="faq">
        <div className="bf-section-head">
          <p className="bf-kicker">Before you request availability</p>
          <h2>Straight answers to the questions that matter.</h2>
        </div>
        <div className="bf-faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bf-final">
        <p className="bf-kicker">Start with fit, not a volume promise</p>
        <h2>Tell us what your team can fund. We’ll tell you what may be available.</h2>
        <a className="bf-button bf-button-light" href="#qualify">Qualify and book a call</a>
      </section>

      <footer className="bf-footer">
        <a className="bf-brand" href="/">Readi Leads</a>
        <p>Business funding lead availability varies by market, product, buyer criteria, and current supply.</p>
        <a href={CALENDLY_URL}>Book directly</a>
      </footer>
    </main>
  );
}
