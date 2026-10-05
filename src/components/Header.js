import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default function Header({ title, onBack }) {
  return (
    <View style={s.row}>
      <TouchableOpacity onPress={onBack} style={s.back}><Text style={s.arrow}>‹</Text></TouchableOpacity>
      <Text style={s.title}>{title}</Text>
    </View>
  );
}
const s = StyleSheet.create({
  row: { height: 56, justifyContent: 'center', alignItems: 'center' },
  back: { position: 'absolute', left: 0, padding: 8 },
  arrow: { fontSize: 32, color: colors.text },
  title: { fontSize: 17, fontWeight: '600', color: colors.text },
});
