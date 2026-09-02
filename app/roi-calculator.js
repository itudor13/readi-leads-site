"use client";

import { useMemo, useState } from "react";
import { computeRoi, ROI_DEFAULTS } from "./lib/roi";

const SLIDERS = [
  {
    key: "emails",
    label: "Emails sent",
    min: 5000,
    max: 100000,
    step: 1000,
    kind: "int",
  },
  {
    key: "replyRate",
    label: "Reply rate",
    min: 0.5,
    max: 8,
    step: 0.1,
    kind: "pct1",
  },
  {
    key: "positiveRate",
    label: "Positive replies",
    min: 1,
    max: 40,
    step: 1,
    kind: "pct0",
  },
  {
    key: "showRate",
    label: "Show-up rate",
    min: 20,
    max: 100,
    step: 1,
    kind: "pct0",
  },
  {
    key: "closeRate",
    label: "Close rate",
    min: 5,
    max: 50,
    step: 1,
    kind: "pct0",
  },
  {
    key: "ltv",
    label: "Customer LTV",
    min: 2000,
    max: 100000,
    step: 500,
    kind: "money",
  },
  {
    key: "costPerShowed",
    label: "Cost per showed call",
    min: 50,
    max: 1000,
    step: 25,
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

function parseInput(kind, raw) {
  const cleaned = String(raw).replace(/[^0-9.]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function barWidth(value, emails) {
  if (value <= 0) return 8;
  const max = Math.log10(Math.max(emails, 1));
  const width = (Math.log10(value) / max) * 100;
  return Math.min(100, Math.max(8, width));
}

export default function RoiCalculator() {
  const [values, setValues] = useState(ROI_DEFAULTS);
  const stats = useMemo(() => computeRoi(values), [values]);

  function update(key, next, min, max) {
    const clamped = Math.min(max, Math.max(min, next));
    setValues((current) => ({ ...current, [key]: clamped }));
  }

  const funnel = [
    { label: "Emails", value: values.emails, tone: "green" },
    { label: "Replies", value: stats.replies, tone: "green" },
    { label: "Positive", value: stats.positive, tone: "green" },
    { label: "Showed", value: stats.showed, tone: "green" },
    { label: "Closed deals", value: stats.closed, tone: "rust" },
  ];

  const roiLabel = stats.spend > 0 ? `${stats.roi.toFixed(1)}x` : "-";
  const coverLine =
    stats.closed > 0
      ? `One client at ${money(values.ltv)} covers the ${money(stats.spend)} spend.`
      : "Move the sliders to see a month of outbound.";

  return (
    <section className="section roi-section" id="roi">
      <div className="section-inner roi-wrap">
        <div className="roi-toolbar">
          <button
            type="button"
            className="reset-button"
            onClick={() => setValues(ROI_DEFAULTS)}
          >
            Reset example
          </button>
        </div>
        <div className="roi-heading">
          <p className="kicker">Pay for qualified meetings</p>
          <h2>
            What is a month of outbound <em>worth?</em>
          </h2>
          <p className="roi-subhead">Slide their numbers. Watch the ROI.</p>
          <p className="section-intro">
            Same math we use on the call. Closes round to a whole deal. Spend is
            showed-up meetings × your cost per meeting.
          </p>
        </div>

        <div className="roi-grid">
          <div className="roi-sliders">
            <p className="roi-sliders-label">Their numbers</p>
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
                          parseInput(slider.kind, event.target.value),
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
              </label>
            ))}
          </div>

          <div className="roi-panel">
            <p className="roi-panel-kicker">Return on spend · one month</p>
            <p className="roi-multiple">{roiLabel}</p>
            <p className="roi-cover">{coverLine}</p>

            <div className="roi-metrics">
              <div>
                <span>Revenue</span>
                <strong>{money(stats.revenue)}</strong>
              </div>
              <div>
                <span>Investment</span>
                <strong>{money(stats.spend)}</strong>
              </div>
              <div>
                <span>Net</span>
                <strong>{money(stats.net)}</strong>
              </div>
            </div>

            <div className="funnel">
              <p>Monthly funnel</p>
              {funnel.map((row) => (
                <div className="funnel-row" key={row.label}>
                  <span>{row.label}</span>
                  <div className="funnel-track">
                    <span
                      className={`funnel-bar ${row.tone}`}
                      style={{ width: `${barWidth(row.value, values.emails)}%` }}
                    />
                  </div>
                  <b>{commas(row.value)}</b>
                </div>
              ))}
            </div>

            <p className="roi-formula">
              {commas(stats.closed)} closed deals × {money(values.ltv)} LTV ={" "}
              {money(stats.revenue)}. {commas(stats.closed)} ×{" "}
              {Number(stats.callsToClose.toFixed(1))} calls to close ={" "}
              {commas(stats.showedForSpend)} showed meetings ×{" "}
              {money(values.costPerShowed)} = {money(stats.spend)}.{" "}
              {money(stats.revenue)} ÷ {money(stats.spend)} ={" "}
              {stats.spend > 0 ? `${stats.roi.toFixed(2)}x` : "-"}.
            </p>
          </div>
        </div>

        <p className="roi-footnote">
          {commas(stats.closed)} closed deals × {money(values.ltv)} LTV ={" "}
          {money(stats.revenue)}. {stats.closed === 1 ? "One deal takes" : `${commas(stats.closed)} deals take`}{" "}
          {commas(stats.showedForSpend)} showed calls at a {values.closeRate}% close
          rate. {commas(stats.showedForSpend)} × {money(values.costPerShowed)} ={" "}
          {money(stats.spend)} invested. {money(stats.revenue)} ÷ {money(stats.spend)} ={" "}
          {stats.spend > 0 ? `${stats.roi.toFixed(0)}x` : "-"}. Change any slider and
          it recalculates.
        </p>
      </div>
    </section>
  );
}
