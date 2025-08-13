/* eslint-disable no-undef */
import '@testing-library/jest-native/extend-expect';

// Mock de iconos para que no intente cargar archivos reales
jest.mock('react-native-vector-icons/Ionicons', () => 'IconMock');
