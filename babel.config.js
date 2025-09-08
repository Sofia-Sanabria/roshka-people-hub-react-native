module.exports = {
  presets: [
    'module:@react-native/babel-preset',
  ],
  plugins: [
    'nativewind/babel', // para NativeWind
    'react-native-worklets/plugin', // para Reanimated / Worklets
  ],
};
