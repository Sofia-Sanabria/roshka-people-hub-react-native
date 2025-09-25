import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
} from "react-native";
import { PRIMARY, BORDER, AMARILLO } from "../../utils/theme/colors";
import { HeaderBar, StatRow, TileButton } from "../../utils/components";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* HEADER */}
      <HeaderBar 
        onMenu={() => navigation.openDrawer()} 
        onLogout={() => navigation.navigate("Login")} 
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 40, paddingTop: 10 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <View className="px-10 pt-4 pb-4">
          <Image
            source={require("../../../assets/roshka-logo.png")}
            style={{ width: "100%", height: 75 }}
            resizeMode="contain"
          />
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
            borderColor: BORDER,
            shadowColor: "#000",
            shadowOpacity: 0.12,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 8 },
            elevation: 8,
          }}
        >
          <Text style={{ color: PRIMARY }} className="text-2xl font-bold mb-3">
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
          <TileButton icon="calendar-days" onPress={() => {}} />
          <TileButton icon="bell" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
