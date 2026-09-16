import assert from "node:assert/strict";
import { test } from "node:test";
import { computeRoi, ROI_DEFAULTS } from "./roi.js";

test("defaults use the updated reply, booking, and cost assumptions", () => {
  const result = computeRoi(ROI_DEFAULTS);

  assert.equal(result.emailsPerMonth, 22000);
  assert.equal(result.totalReplies, 220);
  assert.equal(result.positive, 22);
  assert.equal(result.meetings, 11);
  assert.ok(Math.abs(result.deals - 2.2) < 1e-10);
  assert.ok(Math.abs(result.projectedRevenue - 16500) < 1e-8);
  assert.equal(result.infrastructureCost, 1000);
  assert.equal(result.meetingFees, 2750);
  assert.equal(result.totalSpend, 3750);
  assert.equal(result.netRevenue, 12750);
  assert.deepEqual(result.display, {
    totalReplies: 220,
    positive: 22,
    meetings: 11,
    deals: 2.2,
    projectedRevenue: 16500,
    infrastructureCost: 1000,
    meetingFees: 2750,
    totalSpend: 3750,
    netRevenue: 12750,
  });
});

test("scales volume-based replies and infrastructure linearly", () => {
  const result = computeRoi({
    emailsPerDay: 2000,
    ltv: 7500,
    closeRate: 20,
  });

  assert.equal(result.display.totalReplies, 440);
  assert.equal(result.display.positive, 44);
  assert.equal(result.display.meetings, 22);
  assert.equal(result.display.deals, 4.4);
  assert.equal(result.display.projectedRevenue, 33000);
  assert.equal(result.display.infrastructureCost, 2000);
  assert.equal(result.display.meetingFees, 5500);
  assert.equal(result.display.totalSpend, 7500);
});

test("uses unrounded deals and meetings for revenue and cost", () => {
  const result = computeRoi({
    emailsPerDay: 1500,
    ltv: 7500,
    closeRate: 50,
  });

  assert.equal(result.totalReplies, 330);
  assert.equal(result.positive, 33);
  assert.equal(result.meetings, 16.5);
  assert.equal(result.deals, 8.25);
  assert.equal(result.projectedRevenue, 61875);
  assert.equal(result.infrastructureCost, 1500);
  assert.equal(result.meetingFees, 4125);
  assert.equal(result.totalSpend, 5625);
  assert.equal(result.netRevenue, 56250);
  assert.equal(result.display.meetings, 16.5);
  assert.equal(result.display.deals, 8.3);
  assert.equal(result.display.projectedRevenue, 61875);
});
