import sortCharactersByHealth from '../index';

test('sort characters by health', () => {
      const characters = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
      const result = sortCharactersByHealth(characters);
      const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];
    
      expect(result).toEqual(expected);
  });