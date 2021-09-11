const RANDOM_ANIMALS = require('../index')


describe('Probar funcionalidades', () => {
  test('Probar la funcionalidad', () => expect(typeof (RANDOM_ANIMALS())).toBe('string'))
  test('Comprobar que no existe un animal', () => expect(RANDOM_ANIMALS()).not.toMatch(/🐷/))
})
