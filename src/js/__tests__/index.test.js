import sortHeroesByHealth from '../../index';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('should handle empty array', () => {
    const heroes = [];
    const expected = [];
    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('should handle single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    const expected = [{ name: 'маг', health: 100 }];
    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });
});