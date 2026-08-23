const services = [
  {
    number: "01",
    title: "Market & account targeting",
    text: "We define the companies worth reaching, map the buying roles inside them, and build campaigns around a clear ideal customer profile."
  },
  {
    number: "02",
    title: "Prospect data & verification",
    text: "Lists are researched, cleaned, and verified before they enter a campaign. Better inputs make every part of outbound work better."
  },
  {
    number: "03",
    title: "Sending infrastructure",
    text: "Outbound runs on separate domains and inboxes so cold email does not rely on your primary company domain."
  },
  {
    number: "04",
    title: "Campaign copy",
    text: "Messaging is built around the prospect, the problem you solve, and a reason to respond — not generic volume-first templates."
  },
  {
    number: "05",
    title: "Campaign operation",
    text: "We manage sequencing, sending, testing, and day-to-day campaign execution instead of handing you another tool to operate."
  },
  {
    number: "06",
    title: "Reply handling & handoff",
    text: "Interested replies are identified and moved toward a real sales conversation. Your team focuses on the opportunities, not the inbox mechanics."
  }
];

const stages = [
  {
    number: "[01]",
    label: "TARGET",
    title: "Define the market",
    text: "We get specific about the companies, roles, buying situations, and economics that make an outbound campaign worth running."
  },
  {
    number: "[02]",
    label: "BUILD",
    title: "Build the system",
    text: "We prepare the data, domains, inboxes, verification workflow, messaging, and campaign logic required to reach the market."
  },
  {
    number: "[03]",
    label: "LAUNCH",
    title: "Run the campaigns",
    text: "Campaigns go live in controlled volumes. Messaging, segments, and sequences are tested against real market response."
  },
  {
    number: "[04]",
    label: "IMPROVE",
    title: "Learn and refine",
    text: "We use actual replies and campaign behavior to improve targeting, messaging, and where the next round of effort goes."
  }
];

const faqs = [
  {
    q: "What does Readi Leads actually do?",
    a: "Readi Leads builds and operates cold email outbound systems for B2B companies. That can include market targeting, prospect research, data verification, sending infrastructure, campaign copy, sequencing, campaign management, and reply handoff."
  },
  {
    q: "Do you use our main company domain to send cold email?",
    a: "No. Cold outbound should run on separate sending infrastructure rather than your primary company domain."
  },
  {
    q: "Who is this built for?",
    a: "The strongest fit is generally a B2B company with a valuable customer, a clear sales process, and enough contract value for targeted outbound to make economic sense."
  },
  {
    q: "Do you sell lead lists?",
    a: "The goal is not to hand over a spreadsheet and disappear. Readi Leads is designed around operating the outbound system that turns targeting and data into real conversations."
  },
  {
    q: "How do you decide who to contact?",
    a: "Campaigns start with the market. We define the ideal account profile, the relevant decision-makers, and the situations that make a prospect more likely to care about the offer."
  },
  {
    q: "How quickly can a campaign launch?",
    a: "Timing depends on the scope of the campaign and the sending infrastructure required. We would rather build the system correctly than manufacture an artificial launch-date promise."
  }
];

function Mark() {
  return (
    <div className="mark" aria-label="Readi Leads">
      <span className="mark-box">R</span>
      <span>READI LEADS</span>
    </div>
  );
}

function SignalGraphic() {
  return (
    <svg className="signal-graphic" viewBox="0 0 640 260" role="img" aria-label="Outbound signal diagram">
      <defs>
        <pattern id="fineGrid" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M18 0H0V18" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth=".7"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="640" height="260" fill="url(#fineGrid)" />
      <path d="M30 185 C115 185, 125 74, 215 74 S315 196, 400 152 S500 63, 610 72"
            fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M30 201 C118 201, 131 93, 218 93 S318 214, 403 170 S507 81, 610 89"
            fill="none" stroke="currentColor" strokeWidth=".8" strokeOpacity=".45"/>
      <circle cx="215" cy="74" r="5" fill="currentColor"/>
      <circle cx="400" cy="152" r="5" fill="currentColor"/>
      <circle cx="610" cy="72" r="5" fill="currentColor"/>
      <text x="30" y="32" className="svg-label">MARKET SIGNAL</text>
      <text x="30" y="53" className="svg-small">target → message → reply → conversation</text>
      <text x="189" y="64" className="svg-small">FIT</text>
      <text x="373" y="143" className="svg-small">RESPONSE</text>
      <text x="520" y="62" className="svg-small">CONVERSATION</text>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="brand-link">
            <div className="brand-slate">
              <span className="brand-bars">
                <i></i><i></i><i></i><i></i>
              </span>
              <span className="brand-word">Readi</span>
              <span className="brand-small">LEADS</span>
            </div>
          </a>

          <nav>
            <a href="#system">How it works</a>
            <a href="#scope">What we handle</a>
            <a href="#faq">FAQ</a>
            <a className="nav-button" href="#system">See the process</a>
          </nav>
        </div>
      </header>

      <section className="hero-slate" id="top">
        <div className="contour-bg" aria-hidden="true"></div>
        <div className="hero-slate-inner">
          <h1>
            <span>Done-for-you outbound.</span>
            <em>Built to create qualified opportunities.</em>
          </h1>

          <p>
            Readi Leads handles targeting, infrastructure, copy, sending,
            and replies. Your team takes the qualified calls.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#system">See the system</a>
            <a className="secondary-link" href="#system">See how it works <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section problem">
        <div className="section-number">[ THE PROBLEM ]</div>
        <div className="section-heading-grid">
          <h2>Cold email is easy to send.<br/>Good outbound is harder to build.</h2>
          <p>
            Sending more messages is not a strategy. Reliable outbound depends on the market, the data, the infrastructure, the message, and what happens after somebody replies.
          </p>
        </div>

        <div className="diagnostic-grid">
          <article className="diagnostic">
            <div className="diag-top">
              <span>SYSTEM CHECK</span><span>01 / 03</span>
            </div>
            <div className="diag-lines">
              <div><span>target market</span><strong>UNCLEAR</strong></div>
              <div><span>prospect data</span><strong>INCOMPLETE</strong></div>
              <div><span>sending system</span><strong>FRAGILE</strong></div>
            </div>
            <h3>No repeatable system</h3>
            <p>Tools alone do not create pipeline. The targeting, data, infrastructure, copy, sequencing, and operating process have to work together.</p>
          </article>

          <article className="diagnostic">
            <div className="diag-top">
              <span>MARKET COVERAGE</span><span>02 / 03</span>
            </div>
            <div className="coverage">
              <span className="tiny-dot"></span>
              <span className="coverage-line"></span>
              <span className="big-dot"></span>
            </div>
            <div className="coverage-labels">
              <span>people already in your network</span>
              <span>the rest of the market</span>
            </div>
            <h3>Most of the market never hears from you</h3>
            <p>Referrals and existing relationships matter, but they only reach people already connected to you. Outbound is how you deliberately cover the market beyond them.</p>
          </article>

          <article className="diagnostic">
            <div className="diag-top">
              <span>REPLY MOTION</span><span>03 / 03</span>
            </div>
            <div className="reply-stack">
              <div><span>“send me more information”</span><b>→</b></div>
              <div><span>“circle back next month”</span><b>→</b></div>
              <div><span>“who do you work with?”</span><b>→</b></div>
            </div>
            <h3>Replies need somewhere to go</h3>
            <p>A positive or curious reply is not the finish line. The system needs a clear path from first response to an actual sales conversation.</p>
          </article>
        </div>
      </section>

      <section className="section system" id="system">
        <div className="section-number">[ HOW IT WORKS ]</div>
        <div className="section-heading-grid">
          <h2>Four stages from a market<br/>to a working outbound motion.</h2>
          <p>
            Start with who should hear the offer. Build the infrastructure around that market. Launch deliberately. Then use real responses to improve the next cycle.
          </p>
        </div>

        <div className="stage-rail">
          {stages.map((stage) => (
            <article className="stage" key={stage.number}>
              <div className="stage-index">
                <span>{stage.number}</span>
                <span>{stage.label}</span>
              </div>
              <div className="stage-node"></div>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section scope" id="scope">
        <div className="section-number">[ WHAT READI LEADS HANDLES ]</div>
        <div className="section-heading-grid">
          <h2>The operating layer behind<br/>a cold email campaign.</h2>
          <p>
            Your team owns the offer and the sales conversation. Readi Leads handles the work required to consistently put the right message in front of the right prospects.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <div className="service-num">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section engagement">
        <div className="section-number">[ THE ENGAGEMENT ]</div>
        <div className="engagement-grid">
          <div>
            <h2>Start with the economics,<br/>not the email copy.</h2>
          </div>
          <div className="engagement-steps">
            <article>
              <span className="micro">BEFORE CAMPAIGN BUILD</span>
              <h3>Market review</h3>
              <p>Define the offer, customer value, target market, account profile, and what a useful sales conversation actually looks like.</p>
            </article>
            <article>
              <span className="micro">SYSTEM BUILD</span>
              <h3>Campaign setup</h3>
              <p>Build the data workflow, sending infrastructure, campaign logic, and messaging required for the initial launch.</p>
            </article>
            <article>
              <span className="micro">LIVE CAMPAIGNS</span>
              <h3>Run, learn, refine</h3>
              <p>Operate the campaigns and let real market feedback determine which segments and messages deserve more attention.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section fit">
        <div className="section-number">[ WHO IT IS FOR ]</div>
        <div className="fit-grid">
          <h2>Built for B2B companies where one good customer matters.</h2>
          <div>
            <p>
              Cold outbound makes the most sense when the value of a new customer is meaningful enough to justify deliberate account research, careful infrastructure, and a targeted sales motion.
            </p>
            <div className="fit-tags">
              <span>B2B services</span>
              <span>High-value contracts</span>
              <span>Clear buyer</span>
              <span>Defined sales process</span>
              <span>Addressable market</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="section-number">[ READI LEADS ]</div>
        <div className="about-grid">
          <h2>Outbound without the theater.</h2>
          <div>
            <p className="about-lead">
              Readi Leads is building a straightforward way for B2B companies to reach markets they cannot cover through referrals, networking, and inbound alone.
            </p>
            <p>
              The focus is the operating system behind the campaign: who to reach, how to reach them, how to protect the sending infrastructure, what to say, and how to turn responses into useful sales conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-number">[ FAQ ]</div>
        <div className="faq-layout">
          <h2>Common questions<br/>about the system.</h2>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <details key={item.q}>
                <summary>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <strong>{item.q}</strong>
                  <b>+</b>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section closing">
        <div className="closing-kicker">READI LEADS / B2B OUTBOUND</div>
        <h2>Reach the part of your market that does not already know you.</h2>
        <p>
          Targeting, data, infrastructure, cold email campaigns, and reply handling — built as one outbound system.
        </p>
        <a className="closing-link" href="#top">Readi Leads <span>↗</span></a>
      </section>

      <footer>
        <Mark />
        <div className="footer-meta">
          <span>readileads.com</span>
          <span>© 2026 Readi Leads</span>
        </div>
      </footer>
    </main>
  );
}
