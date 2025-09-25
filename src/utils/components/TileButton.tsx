import { Pressable } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { BORDER, PRIMARY } from "../theme/colors";

const TileButton = ({
  icon,
  onPress,
}: {
  icon: React.ComponentProps<typeof FontAwesome6>["name"];
  onPress: () => void;
}) => (
  <Pressable
    onPress={onPress}
    className="flex-1 items-center justify-center rounded-2xl bg-white p-6"
    style={{
      borderWidth: 1,
      borderColor: BORDER,
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
      elevation: 6,
    }}
    accessibilityRole="button"
  >
    <FontAwesome6 name={icon} size={40} color={PRIMARY} solid />
  </Pressable>
);

export default TileButton;
