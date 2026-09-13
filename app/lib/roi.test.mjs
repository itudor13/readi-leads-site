import assert from "node:assert/strict";
import { test } from "node:test";
import { computeRoi, ROI_DEFAULTS } from "./roi.js";

test("defaults match the ListKit-style reference", () => {
  const result = computeRoi(ROI_DEFAULTS);

  assert.equal(result.emailsPerMonth, 22000);
  assert.equal(result.totalReplies, 220);
  assert.equal(result.positive, 11);
  assert.equal(result.meetings, 4.4);
  assert.ok(Math.abs(result.deals - 0.88) < 1e-10);
  assert.ok(Math.abs(result.projectedRevenue - 6600) < 1e-8);
  assert.deepEqual(result.display, {
    totalReplies: 220,
    positive: 11,
    meetings: 4,
    deals: 1,
    projectedRevenue: 6600,
  });
});

test("scales linearly with daily volume", () => {
  const result = computeRoi({
    emailsPerDay: 2000,
    ltv: 7500,
    closeRate: 20,
  });

  assert.equal(result.display.totalReplies, 440);
  assert.equal(result.display.positive, 22);
  assert.equal(result.display.meetings, 9);
  assert.equal(result.display.deals, 2);
  assert.equal(result.display.projectedRevenue, 13200);
});

test("uses unrounded deals for gross revenue", () => {
  const result = computeRoi({
    emailsPerDay: 1000,
    ltv: 7500,
    closeRate: 50,
  });

  assert.equal(result.meetings, 4.4);
  assert.equal(result.deals, 2.2);
  assert.equal(result.projectedRevenue, 16500);
  assert.equal(result.display.deals, 2);
  assert.equal(result.display.projectedRevenue, 16500);
});

test("does not apply fees, cost, or ROI multiples", () => {
  const result = computeRoi(ROI_DEFAULTS);
  assert.equal("spend" in result, false);
  assert.equal("net" in result, false);
  assert.equal("roi" in result, false);
});
