import Bowman from "../Zombie";

test('create normal character' , () => {
    const char = new Zombie('Ork');
    const result = {
      name: 'Ork',
      type: 'Zombie',
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
    };
    expect(char).toEqual(result);
  });

  test('non-valid name', () => {
    expect(() => {
        const char = new Zombie('zzzzzzzzzzzzzzzzzzzzzzzzzz');
      }).toThrow(error);
  });


  test('non-valid type', () => {
    const error = 'Character type must be a string';
    expect(() => {
      const char = new Zombie('Someword', 888);
    }).toThrow(error);
  });