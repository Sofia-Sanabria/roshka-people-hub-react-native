import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { BORDER, PLACEH, PRIMARY } from "../theme/colors";

const PasswordField = ({
  value,
  onChangeText,
  placeholder = "Contraseña",
}: {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
}) => {
  const [visible, setVisible] = useState(false);

  return (
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
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={PLACEH}
        secureTextEntry={!visible}
        autoCapitalize="none"
        className="flex-1 px-4 py-4 text-base text-black"
      />
      <Pressable
        onPress={() => setVisible((v) => !v)}
        hitSlop={12}
        className="px-4 py-3"
        accessibilityRole="button"
        accessibilityLabel={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
      >
        <FontAwesome6
          name={visible ? "eye-slash" : "eye"}
          size={20}
          color={PRIMARY}
        />
      </Pressable>
    </View>
  );
};

export default PasswordField;
