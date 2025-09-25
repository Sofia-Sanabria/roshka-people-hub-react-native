import { Text, View } from "react-native";
import Dot from "./Dot";

const StatRow = ({
  color,
  label,
  count,
}: {
  color: string;
  label: string;
  count: number;
}) => (
  <View className="flex-row items-center justify-between py-1.5">
    <View className="flex-row items-center gap-3">
      <Dot color={color} />
      <Text className="text-base text-black">{label}</Text>
    </View>
    <Text className="text-base text-black">{count}</Text>
  </View>
);

export default StatRow;
