const ANIMALS = [
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🐻',
  '🐼',
  '🐨',
  '🐯',
  '🦁',
  '🐮'
]

const RANDOM_ANIMALS = () => {
  const ANIMAL = ANIMALS[Math.floor(Math.random() * ANIMALS.length)]

  return ANIMAL
}

module.exports = RANDOM_ANIMALS
