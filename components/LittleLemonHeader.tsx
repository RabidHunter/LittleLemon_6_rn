import { View, Text, StyleSheet } from 'react-native';
import type { Palette } from '../theme/palette';

type HeaderProps = {
  colors: Palette;
};

export function LittleLemonHeader({ colors }: HeaderProps) {
  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={[styles.title, { color: colors.text }]}>Little Lemon</Text>
      <Text style={[styles.subtitle, { color: colors.muted }]}>
        Смак справжньої Італії
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
});