import { View } from "react-native";

const Dot = ({ color }: { color: string }) => (
  <View className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
);

export default Dot;
