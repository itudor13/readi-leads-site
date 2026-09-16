export const ROI_ASSUMPTIONS = {
  replyRate: 0.01,
  positiveRate: 0.05,
  bookingRate: 0.4,
  sendingDaysPerMonth: 22,
  meetingCostLow: 250,
  meetingCostHigh: 750,
};

export const ROI_SLIDER_RANGES = {
  emailsPerDay: { min: 1000, max: 10000, step: 100 },
  ltv: { min: 500, max: 50000, step: 250 },
  closeRate: { min: 5, max: 50, step: 1 },
};

export const ROI_DEFAULTS = {
  emailsPerDay: 1000,
  ltv: 7500,
  closeRate: 20,
};

export function computeRoi({ emailsPerDay, ltv, closeRate }) {
  const emailsPerMonth = emailsPerDay * ROI_ASSUMPTIONS.sendingDaysPerMonth;
  const totalReplies = emailsPerMonth * ROI_ASSUMPTIONS.replyRate;
  const positive = totalReplies * ROI_ASSUMPTIONS.positiveRate;
  const meetings = positive * ROI_ASSUMPTIONS.bookingRate;
  const deals = meetings * (closeRate / 100);
  const projectedRevenue = deals * ltv;
  const feeLow = meetings * ROI_ASSUMPTIONS.meetingCostLow;
  const feeHigh = meetings * ROI_ASSUMPTIONS.meetingCostHigh;

  return {
    emailsPerMonth,
    totalReplies,
    positive,
    meetings,
    deals,
    projectedRevenue,
    feeLow,
    feeHigh,
    display: {
      totalReplies: Math.round(totalReplies),
      positive: Math.round(positive),
      meetings: Math.round(meetings),
      deals: Math.round(deals),
      projectedRevenue: Math.round(projectedRevenue),
      feeLow: Math.round(feeLow),
      feeHigh: Math.round(feeHigh),
    },
  };
}
