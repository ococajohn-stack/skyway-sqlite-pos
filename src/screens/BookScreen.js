import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import Header from '../components/Header';
import Field from '../components/Field';
import Button from '../components/Button';

export default function BookScreen({ navigation, route }) {
  const [trip, setTrip] = useState('Round Trip');
  const [from, setFrom] = useState('Taipei, Taiwan');
  const [to, setTo] = useState('Tokyo, Japan');
  const [dep, setDep] = useState('Feb 5th, 2024');
  const [ret, setRet] = useState('Feb 9th, 2024');
  const [adult, setAdult] = useState('2');
  const [child, setChild] = useState('0');
  useEffect(() => { if (route.params?.to) setTo(route.params.to); }, [route.params?.to]);

  return (
    <SafeAreaView style={s.screen}>
      <ScrollView contentContainerStyle={{ padding: 22 }}>
        <Header title="Book Your Flight" onBack={() => navigation.goBack()} />
        <View style={s.globe}><Text style={{ fontSize: 40, color: colors.white }}>✈</Text></View>
        <View style={s.tabs}>
          {['Round Trip', 'One Way', 'Multi-City'].map(t => (
            <TouchableOpacity key={t} onPress={() => setTrip(t)} style={[s.tab, trip === t && s.tabOn]}>
              <Text style={[s.tabT, trip === t && { color: colors.white, fontWeight: '600' }]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={s.form}>
          <Field label="Location" value={from} onChangeText={setFrom} />
          <Field label="Destination" value={to} onChangeText={setTo} />
          <View style={s.row}><Field label="Departure" value={dep} onChangeText={setDep} />
            {trip === 'Round Trip' && <Field label="Return" value={ret} onChangeText={setRet} />}</View>
          <View style={s.row}><Field label="Adult" value={adult} onChangeText={setAdult} /><Field label="Child" value={child} onChangeText={setChild} /></View>
        </View>
        <Button label="SEARCH FLIGHTS" style={{ marginTop: 18 }} onPress={() => navigation.navigate('Select', { from, to })} />
      </ScrollView>
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surface },
  globe: { height: 110, borderRadius: 22, backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  tabs: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  tab: { flex: 1, paddingVertical: 9, borderRadius: 99, backgroundColor: colors.blueSoft, alignItems: 'center' },
  tabOn: { backgroundColor: colors.blue },
  tabT: { fontSize: 12, color: colors.muted },
  form: { backgroundColor: colors.blueSoft, borderRadius: 22, padding: 14, gap: 10 },
  row: { flexDirection: 'row', gap: 10 },
});
