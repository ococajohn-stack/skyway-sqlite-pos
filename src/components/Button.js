import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme';

// Primary action = the 10% accent color
export default function Button({ label, onPress, style }) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={[s.btn, style]}>
      <Text style={s.text}>{label}</Text>
    </TouchableOpacity>
  );
}
const s = StyleSheet.create({
  btn: { backgroundColor: colors.accent, borderRadius: 16, paddingVertical: 15, alignItems: 'center',
    shadowColor: colors.accent, shadowOpacity: 0.5, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 6 },
  text: { color: colors.white, fontWeight: '700', fontSize: 14, letterSpacing: 0.5 },
});
