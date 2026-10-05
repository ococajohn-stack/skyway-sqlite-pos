import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import Header from '../components/Header';

// Decorative QR-style grid
const Qr = () => (
  <View style={s.qr}>
    {Array.from({ length: 13 }).map((_, i) => (
      <View key={i} style={{ flexDirection: 'row' }}>
        {Array.from({ length: 13 }).map((__, j) => {
          const corner = (i < 3 && j < 3) || (i < 3 && j > 9) || (i > 9 && j < 3);
          const on = corner || (i * 7 + j * 13 + i * j) % 3 !== 0;
          return <View key={j} style={{ width: 11, height: 11, margin: 0.5, backgroundColor: on ? colors.text : 'transparent', borderRadius: 1.5 }} />;
        })}
      </View>
    ))}
  </View>
);

export default function BoardingPassScreen({ navigation, route }) {
  const f = route.params?.flight ?? { no: 'IT 216', dep: '00:10', arr: '04:00' };
  return (
    <SafeAreaView style={s.screen}>
      <View style={{ padding: 22 }}>
        <Header title="Boarding Pass" onBack={() => navigation.goBack()} />
        <View style={s.ticket}>
          <View style={s.row}><Text style={s.airline}>CHINA AIRLINES</Text><Text style={s.muted}>Feb 9th, 2024</Text></View>
          <View style={s.row}>
            <View><Text style={s.big}>{f.dep}</Text><Text style={s.muted}>TPE</Text></View>
            <Text style={s.flightNo}>{f.no}</Text>
            <View style={{ alignItems: 'flex-end' }}><Text style={s.big}>{f.arr}</Text><Text style={s.muted}>HND</Text></View>
          </View>
          <View style={s.row}>
            {[['Economy', 'Class'], ['13', 'Gate'], ['1', 'Terminal'], ['TBWHHN', 'Flight']].map(([v, l]) => (
              <View key={l}><Text style={s.val}>{v}</Text><Text style={s.muted}>{l}</Text></View>
            ))}
          </View>
          <View style={s.dash} />
          <View style={s.row}>
            <View><Text style={s.name}>John</Text><Text style={s.muted}>20kg checked · carry-on</Text></View>
            <Text style={s.seat}>25F</Text>
          </View>
          <Qr />
        </View>
        <TouchableOpacity style={s.print} onPress={() => Alert.alert('Print', 'Boarding pass sent to printer (demo).')}>
          <Text style={{ color: colors.white, fontWeight: '600' }}>🖨  Print</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surface },
  ticket: { backgroundColor: colors.blueSoft, borderRadius: 22, padding: 18, gap: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  airline: { color: colors.blue, fontWeight: '700', fontSize: 12 },
  muted: { fontSize: 10, color: colors.muted },
  big: { fontSize: 24, fontWeight: '700', color: colors.text },
  flightNo: { color: colors.blue, fontWeight: '700', fontSize: 16 },
  val: { fontSize: 13, fontWeight: '600', color: colors.text },
  dash: { borderTopWidth: 2, borderStyle: 'dashed', borderColor: colors.blue, opacity: 0.5 },
  name: { fontSize: 16, fontWeight: '600', color: colors.text },
  seat: { fontSize: 22, fontWeight: '700', color: colors.accent },
  qr: { alignSelf: 'center', backgroundColor: colors.surface, padding: 12, borderRadius: 12 },
  print: { alignSelf: 'center', marginTop: 22, backgroundColor: colors.blue, paddingHorizontal: 28, paddingVertical: 11, borderRadius: 99 },
});
