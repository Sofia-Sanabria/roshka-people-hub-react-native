import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { InputField, RightIconField } from "../../utils/components";
import { PRIMARY, } from "../../utils/theme/colors";
import { BackHeader } from "../../utils/components";


export const RegisterScreen = () => {
  const navigation = useNavigation<any>();

  // estado de todos los campos
  const [nameText, setNameText] = useState("");
  const [lastnameText, setLastnameText] = useState("");
  const [idNumberText, setIdNumberText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [salaryText, setSalaryText] = useState("");
  const [teamText, setTeamText] = useState("");

  const handleSubmit = () => {
    // TODO: enviar al backend
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View className="h-12" />
        
        <BackHeader title="Registro" />

        <View className="flex-row items-center justify-center px-2">
          <View className="h-px flex-1 bg-gray-200" />
        </View>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
        >

          <View className="px-6 mt-8">
            <InputField
              value={nameText}
              onChangeText={setNameText}
              placeholder="Nombres del Funcionario"
            />
            <View className="h-4" />
            <InputField
              value={lastnameText}
              onChangeText={setLastnameText}
              placeholder="Apellidos del Funcionario"
            />
            <View className="h-4" />
            <InputField
              value={idNumberText}
              onChangeText={setIdNumberText}
              placeholder="Número de Cédula"
              keyboardType="numeric"
            />
            <View className="h-4" />
            <InputField
              value={phoneText}
              onChangeText={setPhoneText}
              placeholder="Número de Teléfono"
              keyboardType="phone-pad"
            />
            <View className="h-4" />
            <InputField
              value={emailText}
              onChangeText={setEmailText}
              placeholder="Correo Electronico"
              keyboardType="email-address"
            />
            <View className="h-4" />
            <RightIconField
              label="Fecha de Ingreso"
              iconName="calendar-days"
              onPress={() => {
                // abrir DatePicker
              }}
            />
            <View className="h-4" />
            {/* Puesto (selector), Salario, Equipo */}
            <RightIconField
              label="Puesto de Trabajo"
              iconName="chevron-down"
              onPress={() => {
                // abrir selector de puestos
              }}
            />
            <View className="h-4" />
            <InputField
              value={salaryText}
              onChangeText={setSalaryText}
              placeholder="Salario"
              keyboardType="numeric"
            />
            <View className="h-4" />
            <InputField
              value={teamText}
              onChangeText={setTeamText}
              placeholder="Equipo"
            />
          

            {/* Botón registrar */}
            <Pressable
              onPress={handleSubmit}
              className="mt-6 w-full items-center justify-center rounded-xl"
              style={{ backgroundColor: PRIMARY, paddingVertical: 16 }}
            >
              <Text className="text-white text-lg font-semibold">
                Registrar Funcionario
              </Text>
            </Pressable>
            <View className="h-6" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
