import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerNavigator } from "./DrawerNavigator";

import { LoginScreen } from "../features/login/LoginScreen";
import { RegisterScreen } from "../features/register/RegisterScreen";

export type RootStackParamList = {
  Login: undefined;
  Registrarse: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Iniciar Sesión" }}
      />

      <Stack.Screen
        name="Registrarse"
        component={RegisterScreen}
        options={{ title: "Registrarse" }}
      />

      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};
