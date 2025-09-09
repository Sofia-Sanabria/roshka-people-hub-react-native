import React from 'react';
import { View } from 'react-native';
import {
  Box,
  Heading,
  Input,
  InputField,
} from '@gluestack-ui/themed';

export const LoginScreen = () => {
  return (
    <Box>
      <View>
        <Heading>LOGIN</Heading>
        <Input>
          <InputField placeholder="AtomCore" />
        </Input>
      </View>
    </Box>
  );
};
