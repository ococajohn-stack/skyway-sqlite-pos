import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default function FlightCard({ flight, best, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={s.card}>
      <View style={s.row}>
        <View><Text style={s.time}>{flight.dep}</Text><Text style={s.code}>TPE</Text></View>
        <View style={{ alignItems: 'center' }}><Text style={s.plane}>✈</Text><Text style={s.code}>3h</Text></View>
        <View style={{ alignItems: 'flex-end' }}><Text style={s.time}>{flight.arr}</Text><Text style={s.code}>HND</Text></View>
      </View>
      <View style={[s.row, { marginTop: 10 }]}>
        <Text style={s.code}>{flight.no}</Text>
        <Text style={[s.price, best && { color: colors.accent }]}>NTD {flight.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
const s = StyleSheet.create({
  card: { backgroundColor: colors.blueSoft, borderRadius: 18, padding: 16, marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  time: { fontSize: 19, fontWeight: '600', color: colors.text },
  code: { fontSize: 11, color: colors.muted },
  plane: { fontSize: 18, color: colors.blue },
  price: { fontSize: 15, fontWeight: '700', color: colors.blue },
});
