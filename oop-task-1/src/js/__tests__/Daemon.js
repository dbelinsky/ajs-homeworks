import Bowman from "../Daemon";

test('create normal character' , () => {
    const char = new Daemon('Barlog');
    const result = {
      name: 'Barlog',
      type: 'Daemon',
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
    };
    expect(char).toEqual(result);
  });

  test('non-valid name', () => {
    expect(() => {
        const char = new Daemon('zzzzzzzzzzzzzzzzzzzzzzzzzz');
      }).toThrow(error);
  });


  test('non-valid type', () => {
    const error = 'Character type must be a string';
    expect(() => {
      const char = new Daemon('Someword', 888);
    }).toThrow(error);
  });