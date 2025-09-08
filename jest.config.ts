import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.jest.js' }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native'
      + '|@react-native'
      + '|react-clone-referenced-element'
      + '|@react-navigation'
      + '|@gluestack-ui'
      + '|@react-native-aria'
      + '|react-native-aria'
      + '|nativewind'
      + '|react-native-css-interop'
      + '|react-native-reanimated'
      + '|react-native-svg'
      + ')/)'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
