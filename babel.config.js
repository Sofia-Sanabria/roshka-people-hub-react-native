module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    'nativewind/babel', // para NativeWind
  ],
  plugins: [
    ['module-resolver', {
      root: ['./'],
      alias: { '@': './' },  // <- alias para Metro
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }],
    'react-native-worklets/plugin', // para Reanimated / Worklets
  ],
};
