const services = [
  "ICP and account targeting",
  "Domain and inbox infrastructure",
  "Offer and cold email copy",
  "Campaign sequencing",
  "Reply monitoring",
  "Qualified handoff",
];

const process = [
  {
    step: "01",
    title: "Map the market",
    body: "We define the buying audience, filter accounts, and turn the target market into a working prospect list.",
  },
  {
    step: "02",
    title: "Build the system",
    body: "We set up the sending foundation, write the campaign, and keep the operation organized behind the scenes.",
  },
  {
    step: "03",
    title: "Run outbound",
    body: "We launch controlled campaigns, monitor replies, and adjust targeting and messaging based on real market feedback.",
  },
  {
    step: "04",
    title: "Hand off opportunities",
    body: "Your team focuses on qualified conversations instead of list building, tooling, deliverability, and inbox management.",
  },
];

const faqs = [
  {
    question: "Is this a lead list?",
    answer:
      "No. Readi Leads is an operated outbound system. Targeting, infrastructure, writing, sending, replies, and qualification all work together.",
  },
  {
    question: "Do you need case studies or existing sales assets?",
    answer:
      "No. If you have them, we can use them. If not, we build from your offer, audience, and current proof points without inventing claims.",
  },
  {
    question: "Who is this best for?",
    answer:
      "B2B services, agencies, consultants, and operators with a clear offer who want more qualified opportunities without building the outbound machine internally.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Readi Leads home">
          Readi Leads
        </a>
        <nav aria-label="Main navigation">
          <a href="#system">System</a>
          <a href="#process">Process</a>
          <a href="#contact">Book a call</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <h1>
            <span>Done for you targeted email outbound.</span>
            <em>Pay for performance qualified meetings.</em>
          </h1>

          <div className="hero-video" aria-label="Readi Leads overview video">
            <video
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload"
              src="/lower-cost-qualified-meetings-via-cold-email.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Message me to book a call
            </a>
            <a className="secondary-link" href="#system">
              See how it works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="system">
        <div className="section-inner">
          <div className="section-heading">
            <span>Why outbound stalls</span>
            <h2>Most teams do not have a lead problem. They have an operating problem.</h2>
          </div>
          <div className="split">
            <p>
              Cold email breaks when targeting, deliverability, copy, sending,
              and replies are treated like separate projects. Readi Leads turns
              those pieces into one working system.
            </p>
            <p>
              The result is a cleaner path from market selection to qualified
              conversations, without asking your internal team to become outbound
              technicians.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <span>What we handle</span>
            <h2>The outbound engine, operated for you.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service}>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="process">
        <div className="section-inner">
          <div className="section-heading">
            <span>Process</span>
            <h2>A straightforward path from targeting to booked calls.</h2>
          </div>
          <div className="process-list">
            {process.map((item) => (
              <article className="process-item" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner narrow">
          <div className="section-heading centered">
            <span>FAQ</span>
            <h2>Simple answers before we talk.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="closing-inner">
          <h2>Want Readi Leads to build your outbound system?</h2>
          <p>
            Watch the overview above, then send a quick message and we can talk
            through whether this makes sense for your offer.
          </p>
          <a className="primary-button" href="mailto:hello@readileads.com?subject=Readi%20Leads%20call">
            Message me to book a call
          </a>
        </div>
      </section>
    </main>
  );
}
