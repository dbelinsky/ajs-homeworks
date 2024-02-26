import Bowman from "../Undead";

test('create normal character' , () => {
    const char = new Undead('Nazgul');
    const result = {
      name: 'Nazgul',
      type: 'Undead',
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
    };
    expect(char).toEqual(result);
  });

  test('non-valid name', () => {
    expect(() => {
        const char = new Undead('zzzzzzzzzzzzzzzzzzzzzzzzzz');
      }).toThrow(error);
  });


  test('non-valid type', () => {
    const error = 'Character type must be a string';
    expect(() => {
      const char = new Undead('Someword', 888);
    }).toThrow(error);
  });