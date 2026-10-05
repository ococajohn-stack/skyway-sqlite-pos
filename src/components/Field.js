import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default function Field({ label, value, onChangeText, style }) {
  return (
    <View style={[{ flex: 1 }, style]}>
      <Text style={s.label}>{label}</Text>
      <TextInput style={s.input} value={value} onChangeText={onChangeText} placeholderTextColor={colors.muted} />
    </View>
  );
}
const s = StyleSheet.create({
  label: { fontSize: 11, fontWeight: '600', color: colors.blue, marginBottom: 4 },
  input: { backgroundColor: colors.surface, borderRadius: 12, padding: 11, fontSize: 13, color: colors.text },
});
