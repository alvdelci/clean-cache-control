module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest', // converte todos os test de typescript para javascript
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1' // para o jest entender os imports com @
  }
}