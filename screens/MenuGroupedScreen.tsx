import { SectionList, Text, View, StyleSheet } from 'react-native';
import type { SectionListData } from 'react-native';
import type { CategoryInfo, MenuItem } from '../types/menu';
import { categories, menuItems } from '../data/menu';
import MenuItemRow from '../components/MenuItemRow';

const sections: SectionListData<MenuItem, CategoryInfo>[] = categories.map(
  (category) => ({
    ...category,
    data: menuItems.filter((item) => item.category === category.key),
  }),
);

export default function MenuGroupedScreen() {
  return (
    <SectionList<MenuItem, CategoryInfo>
      style={styles.list}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MenuItemRow item={item} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionTitle}>{section.title}</Text>
      )}
      ListHeaderComponent={<Text style={styles.header}>Меню Little Lemon</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      stickySectionHeadersEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EDEFEE',
    marginBottom: 15,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F4CE14',
    backgroundColor: '#495E57',
    paddingVertical: 10,
    paddingTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 4,
  },
});