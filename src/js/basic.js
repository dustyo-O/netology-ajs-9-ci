// [], [1], [1, 4, 5, 6]
export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}
