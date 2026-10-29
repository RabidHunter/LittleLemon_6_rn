import { View, Text, StyleSheet } from 'react-native';

export function LittleLemonFooter() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>© {year} Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    padding: 15,
    alignItems: 'center',
  },
  text: {
    color: '#EDEFEE',
    fontSize: 14,
  },
});