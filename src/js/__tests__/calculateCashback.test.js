import calculateCashback from '../data';

test('calculateCashback: Нет кешбека до 1000', () => {
  const result = calculateCashback(500);

  expect(result).toBe(0);
});

test('calculateCashback: кешбек 0% на 999.99', () => {
  const result = calculateCashback(999.99);

  expect(result).toBe(0);
});

test('calculateCashback: кешбек 1% на 1000', () => {
  const result = calculateCashback(1000);

  expect(result).toBe(10);
});

test('calculateCashback: кешбек 1% от 1000 до 10000', () => {
  const result = calculateCashback(1500);

  expect(result).toBe(15);
});

test('calculateCashback: кешбек 2% от 10000 до 100000', () => {
  const result = calculateCashback(15000);

  expect(result).toBe(300);
});

test('calculateCashback: кешбек 5% от 100000 и выше', () => {
  const result = calculateCashback(1000000);

  expect(result).toBe(50000);
});
