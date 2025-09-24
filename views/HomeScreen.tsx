import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const AZUL = "#26397E";
const AMARILLO = "#FFB300";
const GRIS_BORDE = "#E5E7EB";
const GRIS_TEXTO = "#111827";

// ——— elementos pequeños reutilizables ———
const Dot = ({ color }: { color: string }) => (
  <View
    className="w-3 h-3 rounded-full"
    style={{ backgroundColor: color }}
  />
);

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
      borderColor: GRIS_BORDE,
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
      elevation: 6,
    }}
    accessibilityRole="button"
  >
    <FontAwesome6 name={icon} size={40} color={AZUL} solid />
  </Pressable>
);

export const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* HEADER */}
      <View className="px-5 pt-16 pb-1 flex-row items-center justify-between">
        <Pressable
          accessibilityLabel="Menú"
          className="p-1"
          onPress={() => {}}
        >
          <FontAwesome6 name="bars-staggered" size={28} color={AZUL} solid />
        </Pressable>

        <Pressable
          accessibilityLabel="Cerrar sesión"
          hitSlop={10}
          className="p-1"
          onPress={() => {}}
        >
          <FontAwesome6
            name="arrow-right-from-bracket"
            size={24}
            color={AZUL}
            solid
          />
        </Pressable>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{padding: 30, paddingBottom: 30 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <View>
          <Image source={require('../assets/roshka-logo.png')} style={{ width: '100%', height: 85 }} />
        </View>
        
        <View className="h-8" />

        {/* SALUDO */}
        <View className="px-6 py-3">
          <Text
            className="text-2xl font-semibold text-[#26397E] text-center"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            ¡ Hola,<Text style={{ color: AMARILLO }}> Funcionario </Text>!
          </Text>
        </View>

        {/* CARD RESUMEN */}
        <View
          className="mt-6 rounded-2xl bg-white px-5 py-4"
          style={{
            borderWidth: 1,
            borderColor: GRIS_BORDE,
            shadowColor: "#000",
            shadowOpacity: 0.12,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 8 },
            elevation: 8,
          }}
        >
          <Text style={{ color: AZUL }} className="text-2xl font-bold mb-3">
            Resumen
          </Text>

          <View className="gap-2">
            <StatRow color="#22C55E" label="Vacaciones" count={1} />
            <StatRow color="#F59E0B" label="Reposos" count={5} />
            <StatRow color="#EF4444" label="Permisos" count={8} />
            <StatRow color="#F59E0B" label="Beneficios" count={2} />
            <StatRow color="#22C55E" label="Licencias" count={3} />
            <StatRow color="#EF4444" label="Préstamos" count={1} />
          </View>
        </View>

        {/* ACCESOS RÁPIDOS */}
        <View className="mt-8 flex-row items-center gap-6">
          <TileButton icon={'calendar-days'} onPress={() => {}} />
          <TileButton icon="bell" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
