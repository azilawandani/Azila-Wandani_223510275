import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const PesanScreen = ({ route, navigation }) => {
  const { travel } = route.params;
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');

  const handlePesan = () => {
    navigation.navigate('Konfirmasi', { travel, nama, email });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text variant="headlineMedium">Pesan untuk {travel.tujuan}</Text>
      <TextInput
        label="Nama Lengkap"
        value={nama}
        onChangeText={(text) => setNama(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        style={{ marginBottom: 10 }}
      />
      <Button mode="contained" onPress={handlePesan}>
        Konfirmasi Pesanan
      </Button>
    </View>
  );
};

export default PesanScreen;
