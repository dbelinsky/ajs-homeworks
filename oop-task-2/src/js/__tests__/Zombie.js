import Zombie from '../Characters/Zombie';


test('should execute lvlUp ', () => {
  const char = new Zombie('Ork');
  char.levelUp();
  const result = {
    name: 'Ork',
    type: 'Zombie',
    attack: 12,
    defence: 48,
    health: 100,
    level: 2,
  };
  expect(char).toEqual(result);
});

test('testing invalid levelUp for dead char', () => {
  const error = 'нельзя повысить левел умершего';
  const char = new Zombie('Ork');
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrow(error);
});

test.each([
  {
    health: 100, points: 20, defence: 40, expected: 88,
  },
  {
    health: 0, points: 10, defence: 40, expected: 0,
  },
  {
    health: 50, points: 30, defence: 45, expected: 33.5,
  },
])(
  ('testing different damage with health: $health, defence: $defence and damage: $points'),
  ({
    health, points, defence, expected,
  }) => {
    const char = new Zombie('Ork');
    char.health = health;
    char.defence = defence;
    char.damage(points);
    const result = char.health;
    expect(result).toBe(expected);
  },
);