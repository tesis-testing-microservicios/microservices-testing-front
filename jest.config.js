/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/test/setup.ts'],
  moduleNameMapper: {
    '^test$': '<rootDir>/test',
    '^test/(.*)$': '<rootDir>/test/$1',
    '^mocks$': '<rootDir>/mocks',
    '^mocks/(.*)$': '<rootDir>/mocks/$1',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^util/(.*)$': '<rootDir>/util/$1',
  },
};
