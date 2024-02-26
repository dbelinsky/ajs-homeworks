import Bowman from "../Magician";

test('create normal character' , () => {
    const char = new Magician('Gendalf');
    const result = {
      name: 'Gendalf',
      type: 'Magician',
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
    };
    expect(char).toEqual(result);
  });

  test('non-valid name', () => {
    expect(() => {
        const char = new Magician('zzzzzzzzzzzzzzzzzzzzzzzzzz');
      }).toThrow(error);
  });


  test('non-valid type', () => {
    const error = 'Character type must be a string';
    expect(() => {
      const char = new Magician('Someword', 888);
    }).toThrow(error);
  });