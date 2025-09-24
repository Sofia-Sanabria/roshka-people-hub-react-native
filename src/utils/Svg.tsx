import * as React from 'react';
import { SvgUri } from 'react-native-svg';

type SvgComponentsProps = {
  uri: string;
  width: string;
  height: number;
}

const SvgComponent = (props: SvgComponentsProps) => {
  
  return (
    <SvgUri {...props}/>
  );
};

export default SvgComponent