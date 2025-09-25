import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { InputField, PasswordField } from "../../utils/components";
import { PRIMARY } from "../../utils/theme/colors";

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [emailText, setEmailText] = useState("");
  const [passText, setPassText] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="h-36" />

          {/* Logo */}
          <View className="px-10 pt-8 pb-4">
            <Image
              source={require("../../../assets/roshka-logo.png")}
              style={{ width: "100%", height: 75 }}
              resizeMode="contain"
            />
          </View>

          <View className="h-20" />

          {/* Inputs */}
          <View className="px-6 mt-8">
            <InputField
              value={emailText}
              onChangeText={setEmailText}
              placeholder="Correo Electrónico"
              keyboardType="email-address"
            />

            <View className="h-4" />

            <PasswordField
              value={passText}
              onChangeText={setPassText}
              placeholder="Contraseña"
            />

            {/* Botón Iniciar Sesión */}
            <Pressable
              onPress={handleLogin}
              className="mt-6 w-full items-center justify-center rounded-xl"
              style={{ backgroundColor: PRIMARY, paddingVertical: 16 }}
            >
              <Text className="text-white text-lg font-semibold">
                Iniciar Sesión
              </Text>
            </Pressable>

            {/* ¿Olvidaste tu contraseña? */}
            <Pressable onPress={() => {}} className="mt-4">
              <Text
                style={{ color: PRIMARY }}
                className="text-base font-semibold underline text-center"
              >
                ¿Olvidaste tu Contraseña?
              </Text>
            </Pressable>

            {/* Separador */}
            <View className="mt-6 flex-row items-center justify-center px-2">
              <View className="h-px flex-1 bg-gray-300" />
              <Text className="mx-3 text-base text-gray-500">o</Text>
              <View className="h-px flex-1 bg-gray-300" />
            </View>

            {/* Botón Registrarse */}
            <Pressable
              onPress={() => navigation.navigate("Registrarse")}
              className="mt-6 w-full items-center justify-center rounded-xl"
              style={{ backgroundColor: PRIMARY, paddingVertical: 16 }}
            >
              <Text className="text-white text-lg font-semibold">
                Registrarse
              </Text>
            </Pressable>

            <View className="h-8" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
