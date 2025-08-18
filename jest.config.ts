import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
  },
  transformIgnorePatterns: [
      "node_modules/(?!((@)?react-native|react-navigation|react-clone-referenced-element|react-native-community)/)"
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
