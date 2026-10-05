import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';

const cats = [['✈', 'Flight'], ['🛏', 'Hotel'], ['🚗', 'Car'], ['🚆', 'Train']];
const places = [['Tokyo', 'Japan', '4.8', 'Tokyo, Japan'], ['Seoul', 'Korea', '4.5', 'Seoul, Korea']];

export default function HomeScreen({ navigation }) {
  const [cat, setCat] = useState('Flight');

  const pickCat = (name) => {
    setCat(name);
    if (name === 'Flight') navigation.navigate('Book');
    else Alert.alert(name, `${name} booking is not part of this prototype. Only Flight is available.`);
  };

  return (
    <SafeAreaView style={s.screen}>
      <ScrollView contentContainerStyle={{ padding: 22, paddingBottom: 120 }}>
        <TouchableOpacity style={s.hi} onPress={() => Alert.alert('Profile', 'Signed in as John')}>
          <View style={s.avatar} /><Text style={s.hiText}>Hi, John!</Text>
        </TouchableOpacity>
        <View style={s.hero}><Text style={s.heroText}>Let's Discover{'\n'}a New Adventure!</Text></View>
        <View style={s.cats}>
          {cats.map(([i, n]) => (
            <TouchableOpacity key={n} style={{ alignItems: 'center' }} onPress={() => pickCat(n)}>
              <View style={[s.cat, cat === n && { backgroundColor: colors.blue }]}><Text style={{ fontSize: 20 }}>{i}</Text></View>
              <Text style={s.muted}>{n}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={s.sec}>
          <Text style={s.secTitle}>Explore Destination</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Book')}><Text style={s.muted}>View all</Text></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {places.map(([n, c, r, dest]) => (
            <TouchableOpacity key={n} style={s.dest} onPress={() => navigation.navigate('Book', { to: dest })}>
              <View style={s.img} /><Text style={s.dName}>{n}</Text><Text style={s.muted}>{c} · ★ {r}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={s.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Book')}><Text style={s.navI}>✈</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BoardingPass')}><Text style={s.navI}>🎫</Text></TouchableOpacity>
        <View style={{ width: 60 }} />
        <TouchableOpacity onPress={() => Alert.alert('Notifications', 'Your flight IT 216 boards at 00:10.')}><Text style={s.navI}>🔔</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Profile', 'Signed in as John')}><Text style={s.navI}>👤</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={s.fab} onPress={() => navigation.navigate('Book')}><Text style={{ fontSize: 26, color: colors.white }}>⌕</Text></TouchableOpacity>
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  hi: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.blueSoft },
  hiText: { color: colors.blue, fontWeight: '600', fontSize: 16 },
  hero: { backgroundColor: colors.blue, borderRadius: 20, height: 150, padding: 18, marginTop: 16, justifyContent: 'center' },
  heroText: { color: colors.white, fontSize: 24, fontWeight: '700' },
  cats: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 22 },
  cat: { width: 54, height: 54, borderRadius: 27, backgroundColor: colors.blueSoft, alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  muted: { fontSize: 11, color: colors.muted },
  sec: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  secTitle: { color: colors.blue, fontWeight: '600', fontSize: 14 },
  dest: { flex: 1, backgroundColor: colors.blueSoft, borderRadius: 18, padding: 10 },
  img: { height: 100, borderRadius: 14, backgroundColor: '#9DB8EF', marginBottom: 8 },
  dName: { fontWeight: '600', fontSize: 14, color: colors.text },
  nav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, backgroundColor: colors.blue, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 },
  navI: { fontSize: 22, color: colors.white },
  fab: { position: 'absolute', bottom: 50, alignSelf: 'center', width: 60, height: 60, borderRadius: 30, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center', elevation: 8 },
});
