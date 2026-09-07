"use client";

import { useMemo, useState } from "react";
import { computeRoi, ROI_DEFAULTS } from "./lib/roi";

const SLIDERS = [
  {
    key: "emails",
    label: "Emails sent",
    helper: "Most campaigns need 8,000-30,000 targeted sends to learn anything useful.",
    min: 5000,
    max: 60000,
    step: 1000,
    kind: "int",
  },
  {
    key: "replyRate",
    label: "Reply rate",
    helper: "A normal cold email range is roughly 1-3% depending on market and offer.",
    min: 0.5,
    max: 5,
    step: 0.1,
    kind: "pct1",
  },
  {
    key: "positiveRate",
    label: "Meeting rate from replies",
    helper: "A practical planning range is 5-15% of replies turning into real meetings.",
    min: 2,
    max: 25,
    step: 1,
    kind: "pct0",
  },
  {
    key: "ltv",
    label: "Customer value",
    helper: "Use the first-year value of a customer, not a best-case lifetime number.",
    min: 2000,
    max: 50000,
    step: 500,
    kind: "money",
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
  if (kind === "pct1") return Number(value).toFixed(1);
  if (kind === "money") return commas(value);
  if (kind === "pct0") return String(Math.round(value));
  return commas(value);
}

function parseInput(raw) {
  const cleaned = String(raw).replace(/[^0-9.]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

export default function RoiCalculator() {
  const [values, setValues] = useState(ROI_DEFAULTS);
  const stats = useMemo(() => computeRoi(values), [values]);

  function update(key, next, min, max) {
    const clamped = Math.min(max, Math.max(min, next));
    setValues((current) => ({ ...current, [key]: clamped }));
  }

  const roiLabel = stats.spend > 0 ? `${stats.roi.toFixed(1)}x` : "-";

  return (
    <section className="section roi-section" id="roi">
      <div className="section-inner roi-wrap">
        <div className="roi-heading">
          <p className="kicker">Pay for qualified meetings</p>
          <h2>
            What is a month of outbound <em>worth?</em>
          </h2>
          <p className="section-intro">
            Use a few realistic planning numbers. We keep show rate, close rate,
            and meeting cost fixed to simple industry benchmarks.
          </p>
        </div>

        <div className="roi-grid simplified">
          <div className="roi-sliders">
            <div className="roi-benchmarks">
              <span>Benchmarks used</span>
              <b>60% show rate</b>
              <b>20% close rate</b>
              <b>$250 per showed meeting</b>
            </div>

            {SLIDERS.map((slider) => (
              <label className="slider-row" key={slider.key}>
                <span className="slider-top">
                  <span>{slider.label}</span>
                  <span className="slider-value">
                    {slider.kind === "money" ? <span className="prefix">$</span> : null}
                    <input
                      type="text"
                      inputMode="decimal"
                      value={displayValue(slider.kind, values[slider.key])}
                      onChange={(event) =>
                        update(
                          slider.key,
                          parseInput(event.target.value),
                          slider.min,
                          slider.max
                        )
                      }
                      aria-label={slider.label}
                    />
                    {slider.kind === "pct0" || slider.kind === "pct1" ? (
                      <span className="suffix">%</span>
                    ) : null}
                  </span>
                </span>
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={values[slider.key]}
                  onChange={(event) =>
                    update(slider.key, Number(event.target.value), slider.min, slider.max)
                  }
                />
                <span className="slider-helper">{slider.helper}</span>
              </label>
            ))}
          </div>

          <div className="roi-panel simplified">
            <p className="roi-panel-kicker">One month estimate</p>
            <p className="roi-multiple">{roiLabel}</p>
            <p className="roi-cover">
              {commas(stats.showed)} qualified meetings could create {commas(stats.closed)} new customers.
            </p>

            <div className="roi-metrics simplified">
              <div>
                <span>Qualified meetings</span>
                <strong>{commas(stats.showed)}</strong>
              </div>
              <div>
                <span>New customers</span>
                <strong>{commas(stats.closed)}</strong>
              </div>
              <div>
                <span>Revenue</span>
                <strong>{money(stats.revenue)}</strong>
              </div>
              <div>
                <span>Meeting spend</span>
                <strong>{money(stats.spend)}</strong>
              </div>
            </div>

            <div className="roi-net">
              <span>Estimated net</span>
              <strong>{money(stats.net)}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
