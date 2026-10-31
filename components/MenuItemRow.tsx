import { View, Text, StyleSheet } from 'react-native';
import type { MenuItem } from '../types/menu';

type MenuItemRowProps = {
  item: MenuItem;
};

export default function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price.toFixed(2)} грн</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: '#EDEFEE',
    marginRight: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4CE14',
  },
});