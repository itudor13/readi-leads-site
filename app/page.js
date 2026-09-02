const process = [
  {
    step: "01",
    title: "Who to email",
    body: "We pick the people and companies worth talking to.",
  },
  {
    step: "02",
    title: "The inboxes",
    body: "We set up sending so mail actually lands.",
  },
  {
    step: "03",
    title: "The words",
    body: "We write the notes and change them by group.",
  },
  {
    step: "04",
    title: "The send and the replies",
    body: "We send, we watch what comes back, and we change it based on what people actually say.",
  },
];

const notFor = [
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
    question: "Why does this fail for most people?",
    answer:
      "They send a lot of generic email from the company domain and hope. They do not keep inboxes healthy, keep domains fresh, watch bounces, reply fast, or change the message by group.",
  },
  {
    question: "I already tried this and it was bad. Why would this be different?",
    answer:
      "Most of those sends were generic, from a tired domain, with nobody watching replies. We agree who we are going after and what a real meeting is before we start. You do not pay the meeting fee unless that person shows up.",
  },
  {
    question: "Is cold email legal?",
    answer:
      "Yes, when you are a real company emailing other businesses, you say who you are, and people can tell you to stop. Fake-name spam is the illegal version. We do not do that.",
  },
  {
    question: "I do not get how this works.",
    answer:
      "You are not buying a list. We pick who to email, set up the inboxes, write the notes, send them, and handle replies. You get the calls.",
  },
  {
    question: "What actually goes into it?",
    answer:
      "New inboxes, fresh domains, bounce rates, fast replies, and different messages for different groups. If one of those is off, the rest looks broken.",
  },
  {
    question: "What if I do not have 8,000 to 10,000 companies or a $5,000 offer?",
    answer:
      "Then wait. You need a $5,000 offer, 8,000 to 10,000 companies to email, and something that does not look like everyone else's.",
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
          <a href="#why-email">Why email</a>
          <a href="#what-goes-wrong">What goes wrong</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Book a call</a>
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
            <a className="primary-button" href="#contact">
              Message me to book a call
            </a>
            <a className="secondary-link" href="#right-way">
              See how it works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="why-email">
        <div className="section-inner">
          <div className="section-heading">
            <span>Why add email</span>
            <h2>Ads still work. They just keep getting more expensive.</h2>
          </div>
          <div className="split">
            <p>
              The feed gets noisier. Email is a strong tool to add on top. You
              can test an offer with a specific list, hear back in days, and
              reach the owner without waiting on an algorithm.
            </p>
            <p>
              It is not a replacement for ads. It is another channel you
              control when paid is eating budget.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="what-goes-wrong">
        <div className="section-inner">
          <div className="section-heading">
            <span>What people get wrong</span>
            <h2>The landscape changed.</h2>
          </div>
          <div className="split">
            <p>
              You cannot send a pile of generic emails from your company domain
              and expect it to convert.
            </p>
            <p>
              You have to stay current on inbox changes, keep domains fresh,
              watch bounce rates, reply fast, and write messaging by segment.
              Miss any of those and the channel looks dead.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="right-way">
        <div className="section-inner">
          <div className="section-heading">
            <span>The right way</span>
            <h2>We run the whole thing as one job.</h2>
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

      <section className="section" id="what-we-bring">
        <div className="section-inner">
          <div className="section-heading">
            <span>What Readi Leads brings</span>
            <h2>We run it for you. You pay when a qualified meeting shows up.</h2>
          </div>
          <div className="stack">
            <p>
              That is pay for performance. What a meeting is worth, and how we
              set up the sending, we work out on a call.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="qualified">
        <div className="section-inner">
          <div className="section-heading">
            <span>What qualified means</span>
            <h2>A 30-minute call with the person who can buy.</h2>
          </div>
          <div className="stack">
            <p>
              The owner, or the person who can buy, at a company we both agreed
              to go after. They have to show up.
            </p>
            <p>
              Not a random reply. Not a no-show. Not someone who cannot buy.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="not-for">
        <div className="section-inner">
          <div className="section-heading">
            <span>Who this is not for</span>
            <h2>Skip this if any of these are true.</h2>
          </div>
          <div className="skip-list">
            {notFor.map((item) => (
              <article className="skip-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="faq">
        <div className="section-inner narrow">
          <div className="section-heading">
            <span>FAQ</span>
            <h2>The questions people actually have.</h2>
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
          <h2>Want Readi Leads to run this for you?</h2>
          <p>
            Watch the overview above, then send a quick message and we can talk
            through whether this makes sense for your offer.
          </p>
          <a
            className="primary-button"
            href="mailto:hello@readileads.com?subject=Readi%20Leads%20call"
          >
            Message me to book a call
          </a>
        </div>
      </section>
    </main>
  );
}
