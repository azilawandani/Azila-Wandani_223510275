import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import BerandaScreen from './src/components/BerandaScreen';
import PesanScreen from './src/components/PesanScreen';
import KonfirmasiScreen from './src/components/KonfirmasiScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Beranda">
          <Stack.Screen name="Beranda" component={BerandaScreen} options={{ title: 'Pemesanan Travel' }} />
          <Stack.Screen name="Pesan" component={PesanScreen} options={{ title: 'Pesan Travel' }} />
          <Stack.Screen name="Konfirmasi" component={KonfirmasiScreen} options={{ title: 'Konfirmasi' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}