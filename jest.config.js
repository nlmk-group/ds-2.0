module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['lib'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  moduleNameMapper: {
    '\\.(sa|sc|le|c)ss$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@root/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '.test.[jt]sx?$': 'babel-jest',
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/?!(react-dnd)']
};
