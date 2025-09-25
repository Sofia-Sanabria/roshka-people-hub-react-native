import { Pressable, Text } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { BORDER, PLACEH, PRIMARY } from "../theme/colors";

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

export default RightIconField;