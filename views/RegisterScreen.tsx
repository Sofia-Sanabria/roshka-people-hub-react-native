import React, { useState } from "react";
import {
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
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const PRIMARY = "#26397E"
const BORDER  = "#E5E7EB";
const LABEL   = "#FF9800";
const PLACEH  = "#9CA3AF";

// Input simple reutilizable
const InputField = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
}: {
  value: string;
  onChangeText: (t: string) => void;
  placeholder: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}) => (
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
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={PLACEH}
      keyboardType={keyboardType}
      autoCapitalize="words"
      className="px-4 py-3.5 text-base text-black"
    />
  </View>
);

// Campo tipo “selector” con ícono a la derecha (chevron o calendario)
const RightIconField = ({
  label,
  onPress,
  iconName,
}: {
  label: string;
  onPress: () => void;
  iconName: "chevron-down" | "calendar-days";
}) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={label}
    className="w-full flex-row items-center justify-between rounded-xl bg-white"
    style={{
      borderWidth: 1,
      borderColor: BORDER,
      shadowColor: "#000",
      shadowOpacity: 0.04,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
      elevation: 1,
      paddingVertical: 12,
      paddingHorizontal: 16,
    }}
  >
    <Text className="text-base text-gray-400">{label}</Text>
    <FontAwesome6
      name={iconName}
      size={20}
      color={PRIMARY}
      // solid para el calendario; chevron no necesita
      solid={iconName === "calendar-days"}
    />
  </Pressable>
);

export const RegisterScreen = () => {
  const navigation = useNavigation<any>();

  // estado de todos los campos
  const [nameText, setNameText] = useState("");
  const [lastnameText, setLastnameText] = useState("");
  const [idNumberText, setIdNumberText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [jobText, setJobText] = useState("");
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
        {/* Header simple con back y título centrado */}
        <View className="px-4 py-3 flex-row items-center justify-between">
          <Pressable
            onPress={() => navigation.goBack()}
            accessibilityLabel="Volver"
            hitSlop={10}
            className="p-1"
          >
            <FontAwesome6 name="angle-left" size={22} color={LABEL} />
          </Pressable>
          <Text className="text-xl font-semibold text-[#26397E]">Registro</Text>

          <View style={{ width: 22 }} />
        </View>

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
