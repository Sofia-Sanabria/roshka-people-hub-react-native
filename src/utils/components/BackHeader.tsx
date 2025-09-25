import { Pressable, Text, View } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { LABEL, PRIMARY } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

const BackHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation<any>();

  return (
    <View className="px-4 py-3 flex-row items-center justify-between">
      <Pressable
        onPress={() => navigation.goBack()}
        accessibilityLabel="Volver"
        hitSlop={10}
        className="p-1"
      >
        <FontAwesome6 name="angle-left" size={22} color={LABEL} />
      </Pressable>

      <Text className="text-xl font-semibold" style={{ color: PRIMARY }}>
        {title}
      </Text>

      {/* Spacer para balancear el ícono */}
      <View style={{ width: 22 }} />
    </View>
  );
};

export default BackHeader;
