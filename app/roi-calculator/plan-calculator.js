"use client";

import { useState } from "react";
import { ROI_ASSUMPTIONS } from "../lib/roi";

const EMAIL_OPTIONS = [500, 1000, 2000, 3000, 4000, 5000];
const LTV_OPTIONS = Array.from({ length: 10 }, (_, index) => 5000 + index * 5000);
const CLOSE_OPTIONS = Array.from({ length: 9 }, (_, index) => 10 + index * 5);
const INFRA_OPTIONS = Array.from({ length: 18 }, (_, index) => 750 + index * 250);
const CALL_OPTIONS = Array.from({ length: 8 }, (_, index) => 150 + index * 50);

const number = (value) => new Intl.NumberFormat("en-US").format(value);
const money = (value) => new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 0,
}).format(value);

function Slider({ label, options, value, onChange, format = number, suffix = "" }) {
  const index = options.indexOf(value);
  return (
    <div className="plan-slider">
      <div className="plan-slider-head">
        <label htmlFor={`plan-${label.replace(/\W+/g, "-").toLowerCase()}`}>{label}</label>
        <strong>{format(value)}{suffix}</strong>
      </div>
      <input
        id={`plan-${label.replace(/\W+/g, "-").toLowerCase()}`}
        type="range"
        min="0"
        max={options.length - 1}
        step="1"
        value={index}
        onChange={(event) => onChange(options[Number(event.target.value)])}
        style={{ "--progress": `${index / (options.length - 1) * 100}%` }}
      />
      <div className="plan-slider-ends">
        <span>{format(options[0])}{suffix}</span>
        <span>{format(options[options.length - 1])}{suffix}</span>
      </div>
    </div>
  );
}

export default function PlanCalculator() {
  const [emailsPerDay, setEmailsPerDay] = useState(1000);
  const [ltv, setLtv] = useState(10000);
  const [closeRate, setCloseRate] = useState(20);
  const [infrastructureFee, setInfrastructureFee] = useState(1000);
  const [costPerCall, setCostPerCall] = useState(250);

  const totalReplies = Math.round(emailsPerDay * ROI_ASSUMPTIONS.sendingDaysPerMonth * ROI_ASSUMPTIONS.replyRate);
  const positiveReplies = Math.round(totalReplies * ROI_ASSUMPTIONS.positiveRate);
  const meetings = Math.round(
    emailsPerDay * ROI_ASSUMPTIONS.sendingDaysPerMonth *
    ROI_ASSUMPTIONS.replyRate * ROI_ASSUMPTIONS.positiveRate * ROI_ASSUMPTIONS.bookingRate
  );
  const deals = Math.round(meetings * closeRate / 100);
  const revenue = deals * ltv;
  const callFees = meetings * costPerCall;
  const totalCost = infrastructureFee + callFees;
  const net = revenue - totalCost;
  const returnOnSpend = revenue / totalCost;

  return (
    <section className="section roi-section plan-section">
      <div className="section-inner roi-wrap">
        <div className="roi-heading">
          <p className="kicker">ROI calculator</p>
          <h1>What could a month of outbound <em>produce?</em></h1>
          <p className="section-intro">Set your volume, client value, close rate, and plan costs to see a monthly projection.</p>
        </div>

        <div className="roi-card plan-card">
          <div className="roi-inputs">
            <h2 className="roi-col-title">Your numbers</h2>
            <Slider label="Emails per day" options={EMAIL_OPTIONS} value={emailsPerDay} onChange={setEmailsPerDay} suffix=" / day" />
            <Slider label="Average client LTV" options={LTV_OPTIONS} value={ltv} onChange={setLtv} format={money} />
            <Slider label="Close rate from meetings" options={CLOSE_OPTIONS} value={closeRate} onChange={setCloseRate} suffix="%" />

            <h2 className="roi-col-title plan-cost-heading">Plan costs</h2>
            <Slider label="Monthly infrastructure fee" options={INFRA_OPTIONS} value={infrastructureFee} onChange={setInfrastructureFee} format={money} />
            <Slider label="Cost per qualified call" options={CALL_OPTIONS} value={costPerCall} onChange={setCostPerCall} format={money} />

            <div className="roi-assumptions">
              <p>Projection assumptions</p>
              <p>{ROI_ASSUMPTIONS.sendingDaysPerMonth} sending days per month · {ROI_ASSUMPTIONS.replyRate * 100}% total reply rate · {ROI_ASSUMPTIONS.positiveRate * 100}% of replies are positive · {ROI_ASSUMPTIONS.bookingRate * 100}% of positive replies book a meeting</p>
            </div>
          </div>

          <div className="roi-results" aria-live="polite">
            <h2 className="roi-col-title">Potential monthly results</h2>
            <div className="roi-metrics">
              <div><span>Total replies</span><strong>{number(totalReplies)}</strong></div>
              <div className="accent"><span>Positive replies</span><strong>{number(positiveReplies)}</strong></div>
              <div><span>Meetings booked</span><strong>{number(meetings)}</strong></div>
              <div><span>Deals closed</span><strong>{number(deals)}</strong></div>
            </div>

            <div className="plan-totals">
              <div className="roi-revenue plan-revenue"><span>Potential monthly revenue</span><strong>{money(revenue)}</strong></div>
              <div className="plan-total-row"><span>Infrastructure</span><strong>{money(infrastructureFee)}</strong></div>
              <div className="plan-total-row"><span>Qualified calls ({number(meetings)} × {money(costPerCall)})</span><strong>{money(callFees)}</strong></div>
              <div className="plan-total-row plan-total-emphasis"><span>Estimated monthly cost</span><strong>{money(totalCost)}</strong></div>
              <div className="plan-total-row plan-total-emphasis"><span>Potential net after costs</span><strong>{money(net)}</strong></div>
              <div className="plan-total-row"><span>Revenue per $1 spent</span><strong>{returnOnSpend.toFixed(1)}×</strong></div>
            </div>

            <p className="roi-revenue-note">Illustrative estimate, not a guarantee. Costs assume every projected booked meeting attends. You only pay the per-call fee for qualified meetings that show up; actual results and charges may vary.</p>
            <a className="primary-button" href="https://calendly.com/ian-readileads/30min">Book a call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
