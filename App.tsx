import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from './views/LoginScreen';
import { RegisterScreen } from './views/RegisterScreen';

const Stack = createStackNavigator();
const isJest = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;

export const App = () => {
  return (
    <View testID="app-container" style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            animation: isJest ? 'none' : 'default',

          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Iniciar Sesión",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Registrarse"
            component={RegisterScreen}
            options={{
              title: "Registrarse",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
};
