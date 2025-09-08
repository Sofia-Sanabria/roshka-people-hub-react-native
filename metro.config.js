// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Componente vacío built-in para simular icon packs
const EMPTY_ICON = require.resolve(
  'react-native/Libraries/Components/UnimplementedViews/UnimplementedView'
);

const defaultConfig = getDefaultConfig(__dirname);

// Interceptamos las resoluciones de módulos
function resolveRequest(context, moduleName, platform) {
  // 🔑 Redirige cualquier pedido de @react-aria/utils (incluye subpaths)
  if (
    moduleName === '@react-aria/utils' ||
    moduleName.startsWith('@react-aria/utils/')
  ) {
    return context.resolveRequest(context, '@react-native-aria/utils', platform);
  }

  // Alias para evitar que Paper/otras libs pidan icon packs que no tienes
  if (
    moduleName === '@react-native-vector-icons/material-design-icons' ||
    moduleName === '@expo/vector-icons/MaterialCommunityIcons' ||
    moduleName === '@expo/vector-icons' ||
    moduleName === 'react-native-vector-icons'
  ) {
    return {
      type: 'sourceFile',
      filePath: EMPTY_ICON,
    };
  }

  // fallback normal
  return context.resolveRequest(context, moduleName, platform);
}

module.exports = withNativeWind(
  mergeConfig(defaultConfig, {
    resolver: { resolveRequest },
  })
);
