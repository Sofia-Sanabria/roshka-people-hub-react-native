import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/global.styles';
import { PrimaryButton } from '../../components';

export const LoginScreen = () => {
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>LOGIN</Text>
      <PrimaryButton
        label="Iniciar Sesión"
        onPress={() => console.log('Solicitud creada')}
      />
    </View>
  );
};
