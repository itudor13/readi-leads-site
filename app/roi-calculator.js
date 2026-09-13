"use client";

import { useMemo, useState } from "react";
import {
  computeRoi,
  ROI_ASSUMPTIONS,
  ROI_DEFAULTS,
  ROI_SLIDER_RANGES,
} from "./lib/roi";

const SLIDERS = [
  {
    key: "emailsPerDay",
    label: "Emails per day",
    kind: "emails",
    minLabel: "1k",
    maxLabel: "10k",
    ...ROI_SLIDER_RANGES.emailsPerDay,
  },
  {
    key: "ltv",
    label: "Average client LTV",
    kind: "money",
    minLabel: "$500",
    maxLabel: "$50,000",
    ...ROI_SLIDER_RANGES.ltv,
  },
  {
    key: "closeRate",
    label: "Close rate from meetings",
    kind: "pct",
    minLabel: "5%",
    maxLabel: "50%",
    ...ROI_SLIDER_RANGES.closeRate,
  },
];

function money(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function commas(n) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

function displayValue(kind, value) {
  if (kind === "pct") return String(Math.round(value));
  return commas(value);
}

function parseInput(raw) {
  const cleaned = String(raw).replace(/[^0-9.]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function fillPercent(value, min, max) {
  if (max === min) return 0;
  return ((value - min) / (max - min)) * 100;
}

const ASSUMPTION_COPY = [
  `${ROI_ASSUMPTIONS.replyRate * 100}% reply rate`,
  `${ROI_ASSUMPTIONS.positiveRate * 100}% of replies are positive`,
  `${ROI_ASSUMPTIONS.bookingRate * 100}% of positive replies book a meeting`,
  `${ROI_ASSUMPTIONS.sendingDaysPerMonth} sending days per month`,
];

export default function RoiCalculator() {
  const [values, setValues] = useState(ROI_DEFAULTS);
  const [focusedKey, setFocusedKey] = useState(null);
  const [drafts, setDrafts] = useState({});
  const stats = useMemo(() => computeRoi(values), [values]);

  function update(key, next, min, max) {
    const clamped = Math.min(max, Math.max(min, next));
    setValues((current) => ({ ...current, [key]: clamped }));
  }

  function commitInput(key, raw, min, max) {
    update(key, parseInput(raw), min, max);
    setFocusedKey(null);
    setDrafts((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  const resultCards = [
    {
      key: "replies",
      label: "Total replies",
      value: commas(stats.display.totalReplies),
    },
    {
      key: "positive",
      label: "Positive replies (leads)",
      value: commas(stats.display.positive),
      accent: true,
    },
    {
      key: "meetings",
      label: "Meetings booked",
      value: commas(stats.display.meetings),
    },
    {
      key: "deals",
      label: "Deals closed",
      value: commas(stats.display.deals),
    },
  ];

  return (
    <section className="section roi-section" id="roi">
      <div className="section-inner roi-wrap">
        <div className="roi-heading">
          <p className="kicker">Monthly projection</p>
          <h2>
            What could a month of outbound <em>produce?</em>
          </h2>
          <p className="section-intro">
            Set your daily volume, client value, and close rate. Reply rate and
            booking assumptions stay fixed so the estimate stays conservative.
          </p>
        </div>

        <div className="roi-card">
          <div className="roi-inputs">
            <h3 className="roi-col-title">Your numbers</h3>

            {SLIDERS.map((slider) => (
              <label className="slider-row" key={slider.key}>
                <span className="slider-top">
                  <span>{slider.label}</span>
                  <span className="slider-value">
                    {slider.kind === "money" ? <span className="prefix">$</span> : null}
                    <input
                      type="text"
                      inputMode="numeric"
                      value={
                        focusedKey === slider.key && drafts[slider.key] != null
                          ? drafts[slider.key]
                          : displayValue(slider.kind, values[slider.key])
                      }
                      onFocus={(event) => {
                        setFocusedKey(slider.key);
                        setDrafts((current) => ({
                          ...current,
                          [slider.key]: String(values[slider.key]),
                        }));
                        event.target.select();
                      }}
                      onChange={(event) => {
                        const raw = event.target.value;
                        setDrafts((current) => ({ ...current, [slider.key]: raw }));
                        const parsed = parseInput(raw);
                        if (parsed >= slider.min && parsed <= slider.max) {
                          setValues((current) => ({ ...current, [slider.key]: parsed }));
                        }
                      }}
                      onBlur={(event) =>
                        commitInput(slider.key, event.target.value, slider.min, slider.max)
                      }
                      aria-label={slider.label}
                    />
                    {slider.kind === "emails" ? <span className="suffix">/day</span> : null}
                    {slider.kind === "pct" ? <span className="suffix">%</span> : null}
                  </span>
                </span>
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={values[slider.key]}
                  style={{
                    background: `linear-gradient(to right, var(--ink) ${fillPercent(
                      values[slider.key],
                      slider.min,
                      slider.max
                    )}%, #e6dfd2 ${fillPercent(
                      values[slider.key],
                      slider.min,
                      slider.max
                    )}%)`,
                  }}
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    update(slider.key, next, slider.min, slider.max);
                    if (focusedKey === slider.key) {
                      setDrafts((current) => ({ ...current, [slider.key]: String(next) }));
                    }
                  }}
                />
                <span className="slider-scale">
                  <span>{slider.minLabel}</span>
                  <span>{slider.maxLabel}</span>
                </span>
              </label>
            ))}

            <div className="roi-assumptions">
              <p>Conservative assumptions</p>
              <p>{ASSUMPTION_COPY.join(" · ")}</p>
            </div>
          </div>

          <div className="roi-results" aria-live="polite">
            <h3 className="roi-col-title">Projected monthly results</h3>

            <div className="roi-metrics">
              {resultCards.map((card) => (
                <div key={card.key} className={card.accent ? "accent" : undefined}>
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                </div>
              ))}
            </div>

            <div className="roi-revenue">
              <span>Projected revenue</span>
              <strong>{money(stats.display.projectedRevenue)}</strong>
            </div>
            <p className="roi-revenue-note">Gross projected revenue. Fees are set on the call.</p>

            <a className="primary-button" href="#book">
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
