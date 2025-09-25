import "./global.css";
import * as React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator} from "./src/navigation/StackNavigator";
// Detecta Jest
const isJest =
  typeof process !== "undefined" && process.env.JEST_WORKER_ID !== undefined;

// Stubs mínimos para Jest
let AppNavigator: any;

if (!isJest) {
  require("react-native-gesture-handler");
  AppNavigator = StackNavigator;
} else {
  // En tests, devolvemos un stub plano para evitar dependencias nativas
  AppNavigator = () => null;
}

export const App = () => {
  return (
    <View testID="app-container" style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
};
