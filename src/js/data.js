const cashback = {
  regular: {
    bound: 1000,
    percent: 1,
  },
  silver: {
    bound: 10000,
    percent: 2,
  },
  gold: {
    bound: 100000,
    percent: 5,
  },
};

export default function calculateCashback(amount) {
  const amount1percent = amount / 100;

  const card = ['gold', 'silver', 'regular'].find(
    (field) => amount >= cashback[field].bound,
  );

  if (!card) return 0;

  return amount1percent * cashback[card].percent;
}
