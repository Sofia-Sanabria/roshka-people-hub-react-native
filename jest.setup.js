import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock de Gluestack Overlay/Toast para evitar dependencia en react-dom
jest.mock('@gluestack-ui/overlay', () => {
  const React = require('react');
  return {
    OverlayProvider: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});

jest.mock('@gluestack-ui/toast', () => {
  const React = require('react');
  return {
    ToastProvider: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});