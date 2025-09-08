import * as React from 'react';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { LoginScreen } from './src/presentation/screens/LoginScreen';

// import { NavigationContainer } from '@react-navigation/native';
// import { } from '@react-navigation/stack';


export const App = () => {
  return (
    <GluestackUIProvider mode="system">
      <PaperProvider>
        <SafeAreaView testID="app-container" style={{ flex: 1 }}>
          <LoginScreen />
        </SafeAreaView>
      </PaperProvider>
    </GluestackUIProvider>
  );
};
