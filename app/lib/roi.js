export const ROI_DEFAULTS = {
  emails: 30000,
  replyRate: 1.5,
  positiveRate: 10,
  showRate: 60,
  closeRate: 20,
  ltv: 10000,
  costPerShowed: 250,
};

export function computeRoi({
  emails,
  replyRate,
  positiveRate,
  showRate,
  closeRate,
  ltv,
  costPerShowed,
}) {
  const replies = emails * (replyRate / 100);
  const positive = replies * (positiveRate / 100);
  const showed = positive * (showRate / 100);
  const closed = Math.round(showed * (closeRate / 100));
  const revenue = closed * ltv;
  const callsToClose = closeRate > 0 ? 100 / closeRate : 0;
  const showedForSpend = closed * callsToClose;
  const spend = showedForSpend * costPerShowed;
  const net = revenue - spend;
  const roi = spend > 0 ? revenue / spend : 0;

  return {
    replies: Math.round(replies),
    positive: Math.round(positive),
    showed: Math.round(showed),
    closed,
    revenue,
    spend,
    net,
    roi,
    callsToClose,
    showedForSpend,
  };
}
