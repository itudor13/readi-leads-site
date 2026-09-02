import RoiCalculator from "./roi-calculator";

const CALENDLY_URL =
  "https://calendly.com/iantudor/readileads?hide_event_type_details=1&hide_gdpr_banner=1";

const whyCards = [
  {
    label: "Sending check",
    rows: [
      ["company domain", "Tired"],
      ["fresh domains", "None"],
      ["bounce watch", "Off"],
    ],
    title: "No sending setup",
    body: "You cannot send a pile of generic notes from the company domain and expect it to convert. Inboxes, bounce rates, and domain health have to stay current.",
  },
  {
    label: "Market coverage",
    rows: [
      ["people you already know", "~40"],
      ["companies you could email", "8,000-10,000"],
      ["coverage", "Tiny"],
    ],
    title: "Most companies never hear from you",
    body: "Referrals only hit people who already know you. The rest of a real market sits untouched.",
  },
  {
    label: "Replies",
    rows: [
      ["“Interested”", "No follow-up"],
      ["price pushback", "Lost"],
      ["no-show", "Gone stale"],
    ],
    title: "Good replies go cold",
    body: "Slow replies lose people who were ready to talk. Someone has to own the inbox the same day.",
  },
];

const steps = [
  {
    icon: "clock",
    title: "Strategy call",
    body: "In 30 minutes we lock who to go after, whether a $5,000 offer and 8,000 to 10,000 companies makes this worth it, and what a qualified meeting means. You get that read either way.",
    meta: "before you commit",
  },
  {
    icon: "clipboard",
    title: "Campaign setup",
    body: "We stand up fresh domains and inboxes, build the list, and write messaging by group. You approve the words before anything sends.",
    meta: "weeks 1 to 3",
  },
  {
    icon: "calendar",
    title: "Campaigns launch",
    body: "We send, watch bounces, work replies, and put sales and trust assets in the pre-call sequence so more people actually show.",
    meta: "week 4 onward",
  },
];

const handles = [
  {
    icon: "fleet",
    title: "Dedicated sending fleet",
    body: "Fresh domains and inboxes, warmed before they send. Your company domain never sends the outbound email.",
  },
  {
    icon: "list",
    title: "Lists built and checked",
    body: "We build the list for your market and check addresses before they go into a campaign.",
  },
  {
    icon: "pen",
    title: "Copy, written and approved",
    body: "Campaign copy drafted for your offer and signed off by you before anything sends. Messaging changes by group.",
  },
  {
    icon: "chat",
    title: "Reply handling",
    body: "Replies get read, sorted, and answered. Interested people get a time proposed. We do not promise a set reply clock.",
  },
  {
    icon: "doc",
    title: "Pre-call sequence",
    body: "We add sales and trust assets into the sequence before the call so more booked meetings actually show.",
  },
  {
    icon: "person",
    title: "Sales calls with context",
    body: "Qualified calls land on your calendar with a short brief on who they are and why they took the meeting.",
  },
  {
    icon: "building",
    title: "Assets stay yours",
    body: "Domains, lists, copy, and campaign history transfer to you if you ever leave.",
  },
];

const clients = [
  {
    name: "Beyond The Books",
    href: "https://beyondthebooksco.com/",
    body: "Fractional CFO services for professional services firms.",
  },
  {
    name: "Native Gains",
    href: "https://nativegains.com/",
    body: "SEO services for the medical industry.",
  },
  {
    name: "Vakerus",
    href: "https://vakerus.com/",
    body: "Strategic sourcing partner for manufacturing.",
  },
];

const skipCards = [
  {
    title: "You do not sell at about $5,000",
    body: "The meeting cost will not pay off.",
  },
  {
    title: "You do not have 8,000 to 10,000 companies to email",
    body: "The group is too small to learn from.",
  },
  {
    title: "Your offer looks like everyone else's",
    body: "Email will not save it.",
  },
];

const faqs = [
  {
    question: "What counts as a qualified sales call?",
    answer:
      "A 30-minute call with the owner, or the person who can buy, at a company we both agreed to go after. They have to show up. Not a random reply. Not a no-show. Not someone who cannot buy.",
  },
  {
    question: "Will this put my domain at risk?",
    answer:
      "No. Your company domain does not send the campaign. We use separate, warmed domains and watch bounce rates so your main domain stays clean.",
  },
  {
    question: "How long does a campaign take to get up and started?",
    answer:
      "Setup is weeks 1 to 3: domains, inboxes, list, and copy you approve. Sending starts around week 4.",
  },
  {
    question: "What makes Readi Leads different from others?",
    answer:
      "We pick who to email, set up sending, write the notes, work replies, and book the meetings that show up. You bring the offer and take the sales calls. You pay for qualified meetings. Sending setup and meeting value get worked out on a call.",
  },
  {
    question: "Who is this best for?",
    answer:
      "B2B teams with about a $5,000 offer, 8,000 to 10,000 companies to email, and an offer that does not look like everyone else's. You take the sales calls. We run the work that creates them.",
  },
];

function Icon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4.5l2.5 1.5" />
      </>
    ),
    clipboard: (
      <>
        <rect x="6" y="5" width="12" height="15" rx="2" />
        <path d="M9 5.5V4h6v1.5" />
        <path d="M9 10h6M9 14h4" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3.5V7M16 3.5V7M4 10h16" />
      </>
    ),
    fleet: (
      <>
        <path d="M4 18h16" />
        <path d="M5 18l7-13 7 13" />
      </>
    ),
    list: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    pen: (
      <>
        <path d="M5 19l1.2-4.2L16.5 4.5a2 2 0 0 1 2.8 2.8L9 17.8 5 19z" />
        <path d="M14.2 6.8l3 3" />
      </>
    ),
    chat: (
      <>
        <path d="M5 16.5V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H9l-4 3v-2.5z" />
      </>
    ),
    doc: (
      <>
        <path d="M7 4h7l5 5v11H7z" />
        <path d="M14 4v5h5M9 13h6M9 16h4" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
      </>
    ),
    building: (
      <>
        <path d="M5 20V6h9v14" />
        <path d="M14 10h5v10" />
        <path d="M8 9h3M8 13h3M8 17h3M16 13h1.5M16 17h1.5M4 20h16" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function CalendlyEmbed({ id }) {
  return (
    <div className="calendly-card" id={id}>
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Readi Leads home">
          Readi Leads
        </a>
        <nav aria-label="Main navigation">
          <a href="#why">Why</a>
          <a href="#how">How</a>
          <a href="#roi">ROI</a>
          <a href="#faq">FAQ</a>
          <a href="#book">Book a call</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <h1>
            <span>Done for you targeted email outbound.</span>
            <em>Pay for Qualified Meetings</em>
          </h1>

          <div className="hero-video" aria-label="Readi Leads overview video">
            <video
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload"
              poster="/readi-leads-video-poster.png"
              src="/lower-cost-qualified-meetings-via-cold-email.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#book">
              Book a call
            </a>
          </div>

          <CalendlyEmbed id="book" />
        </div>
      </section>

      <section className="section" id="why">
        <div className="section-inner">
          <div className="section-heading">
            <h2>
              Why outbound has not worked <em>yet.</em>
            </h2>
            <p className="section-intro">
              Most teams do not have the sending setup, the market coverage, or
              anyone on replies. So the channel looks dead.
            </p>
          </div>
          <div className="card-grid three">
            {whyCards.map((card) => (
              <article className="why-card" key={card.title}>
                <p className="stat-label">{card.label}</p>
                <dl className="stat-box">
                  {card.rows.map(([left, right]) => (
                    <div key={left}>
                      <dt>{left}</dt>
                      <dd>{right}</dd>
                    </div>
                  ))}
                </dl>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="section-inner">
          <div className="section-heading">
            <h2>
              What happens after the first <em>call.</em>
            </h2>
            <p className="section-intro">
              You do not buy a list. We pick who to email, set up sending, write
              the notes, and book the meetings that show up.
            </p>
          </div>
          <div className="card-grid three">
            {steps.map((step) => (
              <article className="step-card" key={step.title}>
                <Icon name={step.icon} />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <span>{step.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="handles">
        <div className="section-inner">
          <div className="section-heading">
            <h2>
              What Readi Leads <em>handles.</em>
            </h2>
            <p className="section-intro">
              You bring the offer and take the sales calls. We run the work that
              creates them.
            </p>
          </div>
          <div className="handles-grid">
            {handles.map((item) => (
              <article className="handle-row" key={item.title}>
                <Icon name={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RoiCalculator />

      <section className="section" id="who">
        <div className="section-inner narrow">
          <div className="section-heading left">
            <h2>
              Who is running <em>this.</em>
            </h2>
            <p className="section-intro">Short version. No long story.</p>
          </div>
          <p className="who-copy">
            Ian Tudor built an 8-figure real estate portfolio through cold
            outreach. Readi Leads is that same discipline, run for B2B teams who
            need qualified meetings without building the machine in-house.
          </p>
        </div>
      </section>

      <section className="section" id="clients">
        <div className="section-inner">
          <div className="section-heading left">
            <h2>
              Teams we work <em>with.</em>
            </h2>
            <p className="section-intro">
              A few current clients. Same motion, different markets.
            </p>
          </div>
          <div className="card-grid three">
            {clients.map((client) => (
              <a
                className="client-card"
                href={client.href}
                key={client.name}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{client.name}</h3>
                <p>{client.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skip">
        <div className="section-inner">
          <div className="section-heading">
            <h2>
              Skip this if any of these are <em>true.</em>
            </h2>
          </div>
          <div className="card-grid three">
            {skipCards.map((card) => (
              <article className="skip-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-inner">
          <div className="section-heading">
            <h2>
              Frequently asked <em>questions.</em>
            </h2>
            <p className="section-intro">Straight answers before you book.</p>
          </div>
          <div className="card-grid three">
            {faqs.map((item) => (
              <article className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="closing-inner">
          <h2>
            Want Readi Leads to run this for <em>you?</em>
          </h2>
          <a className="primary-button light" href="#book-footer">
            Book a call
          </a>
          <CalendlyEmbed id="book-footer" />
        </div>
      </section>
    </main>
  );
}
