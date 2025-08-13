import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { PrimaryButton } from '../src/components/shared/PrimaryButton';

describe('PrimaryButton', () => {
  it('muestra el label correctamente', () => {
    const { getByText } = render(<PrimaryButton label="Iniciar Sesión" />);
    expect(getByText('Iniciar Sesión')).toBeVisible();
  });

  it('ejecuta onPress al presionar', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <PrimaryButton label="Enviar" onPress={mockOnPress} />,
    );
    fireEvent.press(getByText('Enviar'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
