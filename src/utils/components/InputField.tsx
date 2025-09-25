import { TextInput, View } from "react-native";
import { BORDER, PLACEH } from "../theme/colors";

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

export default InputField;