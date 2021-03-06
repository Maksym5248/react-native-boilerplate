//@flow
import * as React from 'react';
import { type TextStyle } from '~/types';

export type TextProps = {
  /**
   * The text to display if not using `translate` or nested components.
   */
  text?: string,

  /**
   * Children components.
   */
  children?: React.Node,

  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[],

  /**
   * Color of text.
   */
  color?: string,

  /**
   * Size of text.
   */
  size?: number,

  /**
   * Text which is looked up via i18n.
   */
  onPress?: () => void,
};
