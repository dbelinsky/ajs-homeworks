import checkHealthBar from '../health';

test.each(
  [
    { name: 'Маг', health: 99, expected: 'healthy' },
    { name: 'Маг', health: 45, expected: 'wounded' },
    { name: 'Маг', health: 7, expected: 'critical' },
  ],
)('testing character $name, with $health health', ({ name, health, expected }) => {
  const result = checkHealthBar({ name, health });
  expect(result).toBe(expected);
});
