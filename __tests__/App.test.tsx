import React from 'react';
import { render } from '@testing-library/react-native';
import { App } from '../App';

describe('App', () => {
  it('renderiza el contenedor principal', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-container')).toBeVisible();
  });

  it('muestra el título de LoginScreen', () => {
    const { getByText } = render(<App />);
    expect(getByText('LOGIN')).toBeVisible();
  });
});
