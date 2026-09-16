export const ROI_ASSUMPTIONS = {
  replyRate: 0.01,
  positiveRate: 0.1,
  bookingRate: 0.5,
  sendingDaysPerMonth: 22,
  infrastructureCostPerThousandDailySends: 1000,
  meetingCost: 250,
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

function expectedCount(n) {
  return Number(n.toFixed(1));
}

export function computeRoi({ emailsPerDay, ltv, closeRate }) {
  const emailsPerMonth = emailsPerDay * ROI_ASSUMPTIONS.sendingDaysPerMonth;
  const totalReplies = emailsPerMonth * ROI_ASSUMPTIONS.replyRate;
  const positive = totalReplies * ROI_ASSUMPTIONS.positiveRate;
  const meetings = positive * ROI_ASSUMPTIONS.bookingRate;
  const deals = meetings * (closeRate / 100);
  const projectedRevenue = deals * ltv;
  const infrastructureCost =
    (emailsPerDay / 1000) * ROI_ASSUMPTIONS.infrastructureCostPerThousandDailySends;
  const meetingFees = meetings * ROI_ASSUMPTIONS.meetingCost;
  const totalSpend = infrastructureCost + meetingFees;
  const netRevenue = projectedRevenue - totalSpend;

  return {
    emailsPerMonth,
    totalReplies,
    positive,
    meetings,
    deals,
    projectedRevenue,
    infrastructureCost,
    meetingFees,
    totalSpend,
    netRevenue,
    display: {
      totalReplies: Math.round(totalReplies),
      positive: Math.round(positive),
      meetings: expectedCount(meetings),
      deals: expectedCount(deals),
      projectedRevenue: Math.round(projectedRevenue),
      infrastructureCost: Math.round(infrastructureCost),
      meetingFees: Math.round(meetingFees),
      totalSpend: Math.round(totalSpend),
      netRevenue: Math.round(netRevenue),
    },
  };
}
