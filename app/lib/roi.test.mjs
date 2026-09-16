import assert from "node:assert/strict";
import { test } from "node:test";
import { computeRoi, ROI_DEFAULTS } from "./roi.js";

test("defaults use rounded closed deals for revenue", () => {
  const result = computeRoi(ROI_DEFAULTS);

  assert.equal(result.emailsPerMonth, 22000);
  assert.equal(result.totalReplies, 220);
  assert.equal(result.positive, 22);
  assert.equal(result.meetings, 11);
  assert.ok(Math.abs(result.expectedDeals - 2.2) < 1e-10);
  assert.equal(result.deals, 2);
  assert.equal(result.projectedRevenue, 15000);
  assert.equal(result.infrastructureCost, 1000);
  assert.equal(result.meetingFees, 2750);
  assert.equal(result.totalSpend, 3750);
  assert.equal(result.netRevenue, 11250);
  assert.equal(result.roiMultiple, 4);
  assert.deepEqual(result.display, {
    totalReplies: 220,
    positive: 22,
    meetings: 11,
    deals: 2,
    projectedRevenue: 15000,
    infrastructureCost: 1000,
    meetingFees: 2750,
    totalSpend: 3750,
    netRevenue: 11250,
    roiMultiple: 4,
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
  assert.equal(result.display.deals, 4);
  assert.equal(result.display.projectedRevenue, 30000);
  assert.equal(result.display.infrastructureCost, 2000);
  assert.equal(result.display.meetingFees, 5500);
  assert.equal(result.display.totalSpend, 7500);
  assert.equal(result.display.roiMultiple, 4);
});

test("rounds closed deals before calculating revenue", () => {
  const result = computeRoi({
    emailsPerDay: 1500,
    ltv: 7500,
    closeRate: 50,
  });

  assert.equal(result.totalReplies, 330);
  assert.equal(result.positive, 33);
  assert.equal(result.meetings, 16.5);
  assert.equal(result.expectedDeals, 8.25);
  assert.equal(result.deals, 8);
  assert.equal(result.projectedRevenue, 60000);
  assert.equal(result.infrastructureCost, 1500);
  assert.equal(result.meetingFees, 4125);
  assert.equal(result.totalSpend, 5625);
  assert.equal(result.netRevenue, 54375);
  assert.equal(result.display.meetings, 17);
  assert.equal(result.display.deals, 8);
  assert.equal(result.display.projectedRevenue, 60000);
  assert.equal(result.display.roiMultiple, 10.7);
});
