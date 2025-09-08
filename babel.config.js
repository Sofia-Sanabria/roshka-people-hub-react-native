module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    'nativewind/babel', // para NativeWind
  ],
  plugins: [
    'react-native-worklets/plugin', // para Reanimated / Worklets
  ],
};
