import * as React from 'react';

export const VisuallyHidden: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

export default VisuallyHidden;
