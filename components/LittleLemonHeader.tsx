import { View, Text, StyleSheet } from 'react-native';

export function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
      <Text style={styles.subtitle}>Смак справжньої Італії</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitle: {
    fontSize: 16,
    color: '#333333',
    marginTop: 5,
  },
});