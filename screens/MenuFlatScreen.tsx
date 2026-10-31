import { FlatList, Text, View, StyleSheet } from 'react-native';
import type { MenuItem } from '../types/menu';
import { menuItems } from '../data/menu';
import MenuItemRow from '../components/MenuItemRow';

export default function MenuFlatScreen() {
  return (
    <FlatList<MenuItem>
      style={styles.list}
      contentContainerStyle={styles.content}
      data={menuItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MenuItemRow item={item} />}
      ListHeaderComponent={<Text style={styles.header}>Меню Little Lemon</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={<Text style={styles.emptyText}>Меню поки порожнє.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EDEFEE',
    marginBottom: 15,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 6,
  },
  emptyText: {
    color: '#EDEFEE',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});