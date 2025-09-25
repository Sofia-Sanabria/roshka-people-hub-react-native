import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Text, Image, Pressable } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { HomeScreen } from "../features/home/HomeScreen";
import { BLANCO, PRIMARY } from "../utils/theme/colors";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const navigation = useNavigation();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, backgroundColor: PRIMARY }}
    >
      {/* Logo y header */}
      <View style={{ padding: 30, borderBottomWidth: 1, borderBottomColor: "#3E54A3" }}>
        <Image source={require("../../assets/roshka-logo-blanco.png")} style={{ width: 220, height: 70, resizeMode: "contain" }} />
      </View>

      {/* Items */}
      <DrawerItem
        label="Ver Perfil"
        labelStyle={{ color: BLANCO }}
        onPress={() => {}}
        icon={() => <FontAwesome6 name="user" size={18} color={BLANCO} />}
      />
      <DrawerItem
        label="Solicitar Vacaciones"
        labelStyle={{ color: BLANCO }}
        onPress={() => {}}
        icon={() => <FontAwesome6 name="umbrella-beach" size={18} color={BLANCO} />}
      />
      <DrawerItem
        label="Solicitar Reposo"
        labelStyle={{ color: BLANCO }}
        onPress={() => {}}
        icon={() => <FontAwesome6 name="bed" size={18} color={BLANCO} />}
      />
      <DrawerItem
        label="Solicitar Licencias"
        labelStyle={{ color: BLANCO }}
        onPress={() => {}}
        icon={() => <FontAwesome6 name="id-card" size={18} color={BLANCO} />}
      />
      <DrawerItem
        label="Solicitar Beneficios"
        labelStyle={{ color: BLANCO }}
        onPress={() => {}}
        icon={() => <FontAwesome6 name="gift" size={18} color={BLANCO} />}
      />
      <DrawerItem
        label="Solicitar Préstamos"
        labelStyle={{ color: BLANCO }}
        onPress={() => {}}
        icon={() => <FontAwesome6 name="hand-holding-dollar" size={18} color={BLANCO} />}
      />

      {/* Separador */}
      <View style={{ flex: 1 }} />

      {/* Logout */}
      <DrawerItem
        label="Cerrar Sesión"
        labelStyle={{ color: BLANCO }}
        onPress={() =>
            navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }], // 👈 vuelve directo al Login
            })
            )
        }
        icon={() => <FontAwesome6 name="arrow-right-from-bracket" size={18} color={BLANCO} />}
      />
    </DrawerContentScrollView>
  );
}

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
