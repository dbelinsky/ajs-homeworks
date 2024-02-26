import Bowman from "../Swordsman";

test('create normal character' , () => {
    const char = new Swordsman('Aragorn');
    const result = {
      name: 'Aragorn',
      type: 'Swordsman',
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
    };
    expect(char).toEqual(result);
  });

  test('non-valid name', () => {
    expect(() => {
        const char = new Swordsman('zzzzzzzzzzzzzzzzzzzzzzzzzz');
      }).toThrow(error);
  });


  test('non-valid type', () => {
    const error = 'Character type must be a string';
    expect(() => {
      const char = new Swordsman('Someword', 888);
    }).toThrow(error);
  });