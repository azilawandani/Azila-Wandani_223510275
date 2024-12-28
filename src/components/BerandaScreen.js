import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

const destinasi = [
  { id: '1', tujuan: 'Pekanbaru - Duri', harga: 'Rp125.000' },
  { id: '2', tujuan: 'Duri - Pekanbaru', harga: 'Rp125.000' },
  { id: '3', tujuan: 'Duri - Bandara', harga: 'Rp140.000' },
];

const BerandaScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Text variant="titleLarge">{item.tujuan}</Text>
        <Text variant="bodyMedium">Harga: {item.harga}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => navigation.navigate('Pesan', { travel: item })}>Pesan Sekarang</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View>
      <FlatList data={destinasi} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default BerandaScreen;
