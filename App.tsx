import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { LoginScreen } from './src/presentation/screens/LoginScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />,
      }}>
      <SafeAreaView testID="app-container" style={{ flex: 1 }}>
        <LoginScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
