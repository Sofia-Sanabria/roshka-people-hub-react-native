import { Platform, Pressable, StyleSheet, View } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { PRIMARY } from "../theme/colors";

const paddingTop = Platform.OS === "ios" ? 8 : 16;

const HeaderBar = ({
  onMenu,
  onLogout,
}: {
  onMenu: () => void;
  onLogout: () => void;
}) => (
  <View style={{ paddingTop }} className="px-5 pb-1 flex-row items-center justify-between">

    <Pressable accessibilityLabel="Menú" className="p-1" onPress={onMenu}>
      <FontAwesome6 name="bars-staggered" size={28} color={PRIMARY} solid />
    </Pressable>

    <Pressable
      accessibilityLabel="Cerrar sesión"
      hitSlop={10}
      className="p-1"
      onPress={onLogout}
    >
      <FontAwesome6
        name="arrow-right-from-bracket"
        size={24}
        color={PRIMARY}
        solid
      />
    </Pressable>
  </View>
);

export default HeaderBar;
