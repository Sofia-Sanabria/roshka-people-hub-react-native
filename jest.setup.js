import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

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

jest.mock('@gluestack-ui/toast', () => {
  const React = require('react');

  // Hook no-op
  const useToast = () => ({ show: () => {}, close: () => {} });

  // Themed puede pedir ambos:
  const createToastHook = () => useToast;

  // Componentes no-op
  const ToastProvider = ({ children }) =>
    React.createElement(React.Fragment, null, children);
  const Toast = ({ children }) =>
    React.createElement(React.Fragment, null, children);
  const ToastTitle = ({ children }) =>
    React.createElement(React.Fragment, null, children);
  const ToastDescription = ({ children }) =>
    React.createElement(React.Fragment, null, children);

  // Themed suele hacer createToast({...}) y leer estos del resultado
  const createToast = () => ({
    ToastProvider,
    useToast,
    createToastHook,
    Toast,
    ToastTitle,
    ToastDescription,
  });

  return {
    // export directo por si los importa nombrados
    ToastProvider,
    useToast,
    createToastHook,
    createToast,
    Toast,
    ToastTitle,
    ToastDescription,
  };
});
