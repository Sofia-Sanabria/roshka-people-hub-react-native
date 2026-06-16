import type { Config } from 'jest';

const esModules = [
  'react-native',
  '@react-native',
  'react-clone-referenced-element',
  '@react-navigation',
  'react-native-drawer-layout',
  '@react-native-aria',
  'react-native-aria',
  'nativewind',
  'react-native-css-interop',
  'react-native-gesture-handler',
  '@react-native-vector-icons',
  'react-native-vector-icons',
  'react-native-reanimated',
  'react-native-worklets',
  'react-native-svg',
  '@expo/html-elements',
].join('|');

const config: Config = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.jest.js' }],
  },
  transformIgnorePatterns: [`node_modules/(?!(${esModules})/)`],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(svg)$': '<rootDir>/__mocks__/svgMock.js',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
