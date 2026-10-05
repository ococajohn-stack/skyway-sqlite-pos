import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import Header from '../components/Header';
import FlightCard from '../components/FlightCard';

export const FLIGHTS = [
  { no: 'IT 201', dep: '06:35', arr: '10:35', price: '7,249' },
  { no: 'IT 202', dep: '13:30', arr: '17:30', price: '8,799' },
  { no: 'IT 203', dep: '15:30', arr: '19:30', price: '8,889' },
];

export default function SelectScreen({ navigation }) {
  return (
    <SafeAreaView style={s.screen}>
      <ScrollView contentContainerStyle={{ padding: 22 }}>
        <Header title="Select Your Flight" onBack={() => navigation.goBack()} />
        <View style={s.globe}>
          <Text style={s.pill}>TPE</Text><Text style={{ fontSize: 28, color: colors.white }}>✈</Text><Text style={s.pill}>HND</Text>
        </View>
        {FLIGHTS.map((f, i) => (
          <FlightCard key={f.no} flight={f} best={i === 0} onPress={() => navigation.navigate('BoardingPass', { flight: f })} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surface },
  globe: { height: 110, borderRadius: 22, backgroundColor: colors.blue, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 16 },
  pill: { backgroundColor: colors.surface, color: colors.blue, fontWeight: '700', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 99, overflow: 'hidden' },
});
