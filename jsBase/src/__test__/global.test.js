const TEXT = 'Hola Mundo'
const FRUITS = [
  'manzana',
  'pera',
  'sandía',
  'frutilla'
]
const NUMBER = 15
const BOOLEAN = true
const CALLBACK = (str, callback) => callback(str.split('').reverse().join(''))
const PROMISE = str => (
  new Promise((resolve, reject) => {
    if (!str) reject(Error('Error: No le pasaste un string'))

    resolve(str.split('').reverse().join(''))
  })
)

// ANTES DE TODAS LAS PRUEBAS
beforeAll(() => console.log('INICIO'))

// TEST STRING
test('Debe contener un texto', () => expect(TEXT).toMatch(/Mundo/))

// TEST ARRAY
test('Debe contener una fruta', () => expect(FRUITS).toContain('pera'))

// TEST NUMBER
test('Es mayor', () => expect(NUMBER).toBeGreaterThan(10))

// TEST BOOLEAN
test('Es verdadero', () => expect(BOOLEAN).toBeTruthy())

// TEST CALLBACK
test('Probar Callback', () => CALLBACK('Hola', str => expect(str).toBe('aloH')))

// TEST PROMISE
test('Probar Promise', () => PROMISE('HOLA').then(res => expect(res).toBe('ALOH')))
// TEST ASYNC / AWAIT
test('Probar async / await', async () => {
  const STRING = await PROMISE('HOLAA')

  expect(STRING).toBe('AALOH')
})

// DESPUES DE TODAS LAS PRUEBAS
afterAll(() => console.log('FIN'))
