import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import type { Palette } from '../theme/palette';

type WelcomeScreenProps = {
  colors: Palette;
  email: string;
  onExit: () => void;
};

export default function WelcomeScreen({
  colors,
  email,
  onExit,
}: WelcomeScreenProps) {
  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="Логотип Little Lemon"
        />

        <Text style={[styles.heading, { color: colors.text }]}>
          Ласкаво просимо до Little Lemon
        </Text>

        <Text style={[styles.notice, { color: colors.muted }]}>
          Дані перевірено локально. Відкрито навчальний екран для {email}
        </Text>

        <Text style={[styles.paragraph, { color: colors.text }]}>
          Little Lemon — це затишне сімейне бістро, де ви зможете скуштувати
          автентичні страви італійської та середземноморської кухні.
        </Text>

        <View
          style={[styles.inputContainer, { borderTopColor: colors.border }]}
        >
          <Text style={[styles.label, { color: colors.text }]}>
            Ваше ім’я
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.surface,
                color: colors.text,
                borderColor: colors.border,
              },
            ]}
            value={name}
            onChangeText={setName}
            placeholder="Введіть ваше ім’я"
            placeholderTextColor={colors.muted}
            accessibilityLabel="Поле введення імені"
          />
          <Text style={[styles.greeting, { color: colors.accent }]}>
            {name.trim() ? `Вітаємо, ${name.trim()}!` : 'Введіть ім’я.'}
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={onExit}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: colors.accent },
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={[styles.buttonText, { color: colors.onAccent }]}>
            Повернутися до форми
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  logo: {
    width: 120,
    height: 140,
    alignSelf: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  notice: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  inputContainer: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});