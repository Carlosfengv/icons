/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const Refresh: Icon;
export const Add: Icon;
export const Subtract: Icon;
export const Check: Icon;
export const Close: Icon;
export const Maximize: Icon;
export const Minimize: Icon;
export const Start: Icon;
export const Stop: Icon;
export const Pause: Icon;
export const ChevronDown: Icon;
export const CaretRight: Icon;
export const CaretUp: Icon;
export const CaretDown: Icon;
