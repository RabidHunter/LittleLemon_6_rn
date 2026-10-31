import { View, Text, StyleSheet } from 'react-native';
import type { Palette } from '../theme/palette';

type FooterProps = {
  colors: Palette;
};

export function LittleLemonFooter({ colors }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={[styles.text, { color: colors.muted }]}>
        © {year} Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});