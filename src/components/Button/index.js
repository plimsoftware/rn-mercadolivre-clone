import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Button({ onPress, style, children }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style === 'outline' ? styles.btn_outline_primary : styles.btn_primary}>
      {children}
    </TouchableOpacity>
  );
}
