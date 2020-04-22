import calculateCashback from '../data';

describe('calculateCashback', () => {
  test.each([
    ['Нет кешбека до 1000', 500, 0],
    ['кешбек 0% на 999.99', 999.99, 0],
    ['кешбек 1% на 1000', 1000, 10],
    ['кешбек 1% от 1000 до 10000', 1500, 15],
    ['кешбек 2% от 10000 до 100000', 15000, 300],
    ['кешбек 5% от 100000 и выше', 1000000, 50000],
  ])(
    ('%s'),
    (level, amount, expected) => {
      const result = calculateCashback(amount);
      expect(result).toBe(expected);
    },
  );
});
