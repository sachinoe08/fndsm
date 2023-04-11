import React from 'react';

import type { RadioProps } from './Radio';

export interface RadioGroupContextProps {
  onChange?: (e: RadioChangeEvent) => void;
  value?: any;
  disabled?: boolean;
  name?: string;
}

export interface RadioChangeEvent {
  target: RadioProps & { checked: boolean };
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

const RadioContext = React.createContext<RadioGroupContextProps | null>(null);

export const RadioGroupProvider = RadioContext.Provider;

export default RadioContext;
