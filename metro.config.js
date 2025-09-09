// metro.config.js
const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Componente vacío built-in para simular icon packs
const EMPTY_ICON = require.resolve(
  'react-native/Libraries/Components/UnimplementedViews/UnimplementedView'
);

const defaultConfig = getDefaultConfig(__dirname);

// Ruta al shim local
const VISUALLY_HIDDEN_SHIM = path.resolve(
  __dirname,
  'shims/react-aria/visually-hidden.native.tsx'
);

// Interceptamos las resoluciones de módulos
function resolveRequest(context, moduleName, platform) {
  // @react-aria/utils  ->  @react-native-aria/utils
  if (
    moduleName === '@react-aria/utils' ||
    moduleName.startsWith('@react-aria/utils/')
  ) {
    return context.resolveRequest(context, '@react-native-aria/utils', platform);
  }

  // ✅ ÚNICO alias: @react-aria/visually-hidden -> shim local
  if (
    moduleName === '@react-aria/visually-hidden' ||
    moduleName.startsWith('@react-aria/visually-hidden/')
  ) {
    return { type: 'sourceFile', filePath: VISUALLY_HIDDEN_SHIM };
  }

  // Alias para evitar icon packs que no tenés (tu regla original)
  if (
    moduleName === '@react-native-vector-icons/material-design-icons' ||
    moduleName === '@expo/vector-icons/MaterialCommunityIcons' ||
    moduleName === '@expo/vector-icons' ||
    moduleName === 'react-native-vector-icons'
  ) {
    return { type: 'sourceFile', filePath: EMPTY_ICON };
  }

  // fallback normal
  return context.resolveRequest(context, moduleName, platform);
}

module.exports = withNativeWind(
  mergeConfig(defaultConfig, {
    resolver: { resolveRequest },
  })
);
