import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

const KonfirmasiScreen = ({ route, navigation }) => {
  const { travel, nama, email } = route.params;

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text variant="headlineMedium">Pesanan Terkonfirmasi!</Text>
      <Text variant="bodyMedium">Terima kasih, {nama}.</Text>
      <Text variant="bodyMedium">Pesanan Anda ke {travel.tujuan} telah berhasil.</Text>
      <Text variant="bodyMedium">Konfirmasi akan dikirimkan ke email: {email}.</Text>
      <Button mode="contained" onPress={() => navigation.popToTop()} style={{ marginTop: 20 }}>
        Kembali ke Beranda
      </Button>
    </View>
  );
};

export default KonfirmasiScreen;
