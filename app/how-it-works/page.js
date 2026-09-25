"use client";

const CALENDLY_URL = "https://calendly.com/ian-readileads/30min";

const processSteps = [
  {
    number: "01",
    title: "Build the list",
    body: "We identify companies that look like your best customers and agree on the target list before anything is sent.",
  },
  {
    number: "02",
    title: "Test the message",
    body: "We write personalized outreach and test 10 message variations in batches to find what resonates with your market.",
  },
  {
    number: "03",
    title: "Work the replies",
    body: "We respond, qualify interest, and keep the conversation moving while you stay focused on your team.",
  },
  {
    number: "04",
    title: "Book qualified meetings",
    body: "Qualified prospects go straight onto your calendar. You pay per qualified meeting, and no-show meetings are free.",
  },
];


const faqItems = [
  [
    "Who is this best for?",
    "This works best for B2B teams with a clear offer, enough market to contact, and someone ready to take qualified sales calls.",
  ],
  [
    "Will you use our company domain?",
    "No. Outreach runs through a separate sending setup so your main company domain is protected. We monitor deliverability and bounce rates throughout the campaign.",
  ],
  [
    "Do we approve the companies and messaging?",
    "Yes. We agree on the target market and qualified-lead definition before sending. You approve the messaging before it goes live.",
  ],
  [
    "What happens when someone replies?",
    "We read and sort the replies, answer straightforward questions, identify real interest, and move qualified prospects toward a meeting.",
  ],
  [
    "What happens after a meeting is booked?",
    "The prospect receives the calendar invite and any agreed pre-call material. You receive the meeting with context on who they are and why they took the call.",
  ],
  [
    "What do we own?",
    "Your approved lists, messaging, domains, campaign history, and learnings stay with you. The work creates a useful outbound asset, not just a temporary campaign.",
  ],
  [
    "What if a qualified prospect does not show?",
    "No-show meetings are not charged. The goal is a meeting with a real person who fits the definition we agreed on.",
  ],
  [
    "Can we stop or change the campaign?",
    "Yes. We use the early weeks to learn what is working, then adjust the audience, offer, and messaging as the data gives us better direction.",
  ],
];

const timeline = [
  ["Week 1", "Agree on the market and the message."],
  ["Weeks 2-3", "Replies come in and conversations begin."],
  ["Week 4", "Keep what worked. Drop what did not. Continue testing."],
  ["Weeks 5-12", "Scale the messages and audiences that perform."],
];


function CalendlyEmbed() {
  return (
    <div className="lead-magnet-calendar">
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "1000px" }}
      />
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="lead-magnet-page">
      <header className="site-header lead-magnet-header">
        <a className="brand" href="/" aria-label="Readi Leads home">
          Readi Leads
        </a>
        <a className="lead-magnet-back" href="/">
          Back to site
        </a>
      </header>

      <section className="lead-magnet-hero">
        <p className="eyebrow">Pay per performance</p>
        <h1>How we run <em>outbound.</em></h1>
        <p className="lead-magnet-subtitle">Done-for-you outbound email marketing.</p>
        <p className="lead-magnet-intro">
          We find the right companies, start the conversations, and put qualified meetings on your calendar.
        </p>
      </section>

      <section className="lead-magnet-section">
        <div className="lead-magnet-section-heading">
          <p className="eyebrow">The process</p>
          <h2>How it <em>works.</em></h2>
        </div>
        <div className="lead-magnet-process">
          {processSteps.map((step) => (
            <article className="lead-magnet-step" key={step.number}>
              <span className="lead-magnet-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lead-magnet-section lead-magnet-qualification">
        <div className="lead-magnet-two-column">
          <div>
            <p className="eyebrow">Clear before we send</p>
            <h2>What a <em>qualified lead</em> means.</h2>
          </div>
          <div className="lead-magnet-copy">
            <p>
              We agree on the lead list before sending so you know exactly which companies we are reaching out to.
            </p>
            <p>
              We also define a qualified lead before the campaign begins. For example: dentists, dermatologists, and med spas with more than $2M in revenue.
            </p>
            <p>
              The definition is yours to approve, and it stays clear throughout the campaign.
            </p>
          </div>
        </div>
      </section>

      <section className="lead-magnet-section">
        <div className="lead-magnet-two-column email-example-layout">
          <div>
            <p className="eyebrow">Industry-specific outreach</p>
            <h2>What the email might <em>look like.</em></h2>
            <p className="lead-magnet-copy">
              Short, direct, and written for the person receiving it.
            </p>
          </div>
          <blockquote className="email-example">
            <p>Hi John,</p>
            <p>What are you currently paying per pallet? I&apos;m pretty sure we could beat the pricing.</p>
            <p>Interested in a quote?</p>
            <footer>George</footer>
          </blockquote>
        </div>
      </section>

      <section className="lead-magnet-section lead-magnet-timeline">
        <div className="lead-magnet-section-heading">
          <p className="eyebrow">The first 12 weeks</p>
          <h2>A simple <em>timeline.</em></h2>
        </div>
        <div className="lead-magnet-timeline-list">
          {timeline.map(([label, body]) => (
            <div className="lead-magnet-timeline-row" key={label}>
              <strong>{label}</strong>
              <span>{body}</span>
            </div>
          ))}
        </div>
      </section>


      <section className="lead-magnet-section lead-magnet-faq">
        <div className="lead-magnet-section-heading">
          <p className="eyebrow">Before you book</p>
          <h2>The questions people usually <em>ask.</em></h2>
        </div>
        <div className="lead-magnet-faq-grid">
          {faqItems.map(([question, answer]) => (
            <article className="lead-magnet-faq-item" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="lead-magnet-calendar-section">
        <p className="eyebrow">Choose a time</p>
        <h2>Book a conversation with <em>Ian.</em></h2>
        <p className="lead-magnet-calendar-intro">
          Bring your market, offer, and questions. We&apos;ll map out what a qualified meeting could look like for you.
        </p>
        <CalendlyEmbed />
      </section>

      <section className="lead-magnet-cta">
        <p className="eyebrow">See what this could look like for you</p>
        <h2>Curious what outbound could produce for your business?</h2>
        <a className="primary-button light" href={CALENDLY_URL}>
          Call with Ian
        </a>
      </section>
    </main>
  );
}
