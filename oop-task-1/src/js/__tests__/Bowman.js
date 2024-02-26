import Bowman from "../Bowman";

test('create normal character' , () => {
    const char = new Bowman('Elf');
    const result = {
      name: 'Elf',
      type: 'Bowman',
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
    };
    expect(char).toEqual(result);
  });

  test('non-valid name', () => {
    expect(() => {
        const char = new Bowman('zzzzzzzzzzzzzzzzzzzzzzzzzz');
      }).toThrow(error);
  });


  test('non-valid type', () => {
    const error = 'Character type must be a string';
    expect(() => {
      const char = new Bowman('Someword', 888);
    }).toThrow(error);
  });