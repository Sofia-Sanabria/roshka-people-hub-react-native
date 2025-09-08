import React, { useEffect } from 'react';
import { config } from './config';
import { View, ViewProps } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { useColorScheme } from 'nativewind';

export type ModeType = 'light' | 'dark' | 'system';

type Props = {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
};

export function GluestackUIProvider({ mode = 'system', ...props }: Props) {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    // No forzar nada si usamos el esquema del sistema
    if (mode === 'system') return;

    // En algunos casos (p. ej. darkMode !== 'class') setColorScheme no existe
    if (typeof setColorScheme !== 'function') return;

    // Sólo aquí forzamos explícitamente 'light' o 'dark'
    setColorScheme(mode);
  }, [mode, setColorScheme]);

  const scheme = colorScheme ?? 'light';

  return (
    <View
      style={[
        config[scheme],
        { flex: 1, height: '100%', width: '100%' },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
