import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { LoginScreen } from './src/presentation/screens/LoginScreen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView testID="app-container" style={{ flex: 1 }}>
        <LoginScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
