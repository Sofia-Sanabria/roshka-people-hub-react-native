import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RoshkaLogo from '../assets/roshka-logo.svg';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

const PRIMARY = "#26397E"; // AzulBarra
const BORDER = "#E5E7EB";   // gray-200
const PLACEHOLDER = "#9CA3AF"; // gray-400

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [emailText, setEmailText] = useState("");
  const [passText, setPassText] = useState("");
  const [passVisible, setPassVisible] = useState(false);

  const handleLogin = () => {
    // TODO: integrar con tu auth
    // navigation.navigate("Home");
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
          <View className="px-6 pt-8 pb-4">
            <RoshkaLogo width="100%" height={80} />
          </View>

          <View className="h-20" />

          {/* Inputs */}
          <View className="px-6 mt-8">
            {/* Correo */}
            <View
              className="w-full rounded-xl bg-white"
              style={{
                borderWidth: 1,
                borderColor: BORDER,
                shadowColor: "#000",
                shadowOpacity: 0.04,
                shadowRadius: 5,
                shadowOffset: { width: 0, height: 2 },
                elevation: 1,
              }}
            >

              <TextInput
                value={emailText}
                onChangeText={setEmailText}
                placeholder="Correo Electronico"
                placeholderTextColor={PLACEHOLDER}
                keyboardType="email-address"
                autoCapitalize="none"
                className="px-4 py-4 text-base text-black"
              />
            </View>

            {/* Espacio */}
            <View className="h-4" />

            {/* Contraseña con Icon */}
            <View
              className="w-full flex-row items-center rounded-xl bg-white"
              style={{
                borderWidth: 1,
                borderColor: BORDER,
                shadowColor: "#000",
                shadowOpacity: 0.04,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 2 },
                elevation: 1,
              }}
            >
              <TextInput
                value={passText}
                onChangeText={setPassText}
                placeholder="Contraseña"
                placeholderTextColor={PLACEHOLDER}
                secureTextEntry={!passVisible}
                autoCapitalize="none"
                className="flex-1 px-4 py-4 text-base text-black"
              />
              <Pressable
                onPress={() => setPassVisible(v => !v)}
                hitSlop={12}
                className="px-4 py-3"
                accessibilityRole="button"
                accessibilityLabel={passVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                  <FontAwesome6
                    name={passVisible ? 'eye-slash' : 'eye'}
                    size={24}
                    color={PRIMARY}
                  />
              </Pressable>
            </View>

            {/* Botón Iniciar Sesión */}
            <Pressable
              onPress={handleLogin}
              className="mt-6 w-full items-center justify-center rounded-xl"
              style={{ backgroundColor: PRIMARY, paddingVertical: 16 }}
            >
              <Text className="text-white text-lg font-semibold">Iniciar Sesión</Text>
            </Pressable>

            {/* ¿Olvidaste tu contraseña? */}
            <Pressable onPress={() => {}} className="mt-4">
              <Text style={{ color: PRIMARY }} className="text-base font-semibold underline text-center">
                ¿Olvidaste tu Contraseña?
              </Text>
            </Pressable>

            {/* Separador con punto */}
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
              <Text className="text-white text-lg font-semibold">Registrarse</Text>
            </Pressable>

            {/* Margen inferior para gesto de HomeBar */}
            <View className="h-8" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
