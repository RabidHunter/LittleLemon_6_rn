import { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
  StyleSheet,
  Platform,
} from 'react-native';
import type { Palette } from '../theme/palette';

type LoginScreenProps = {
  colors: Palette;
  onContinue: (email: string) => void;
};

export default function LoginScreen({ colors, onContinue }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleContinue() {
    const normalizedEmail = email.trim();
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!emailLooksValid) {
      setError('Введіть email у форматі name@example.com.');
      return;
    }

    if (password.length === 0) {
      setError('Введіть навчальний пароль.');
      return;
    }

    setError(null);
    Keyboard.dismiss();
    setPassword('');
    onContinue(normalizedEmail);
  }

  return (
    <KeyboardAvoidingView
      style={[styles.screen, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <Text style={[styles.title, { color: colors.text }]}>
          Вхід до Little Lemon
        </Text>
        <Text style={[styles.description, { color: colors.muted }]}>
          Введіть свій email та пароль для авторизації.
        </Text>

        <View style={styles.fieldContainer}>
          <Text style={[styles.label, { color: colors.text }]}>Email</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.surface,
                color: colors.text,
                borderColor: colors.border,
              },
            ]}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="name@example.com"
            placeholderTextColor={colors.muted}
            accessibilityLabel="Поле введення email"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={[styles.label, { color: colors.text }]}>Пароль</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.surface,
                color: colors.text,
                borderColor: colors.border,
              },
            ]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            submitBehavior="blurAndSubmit"
            placeholder="Введіть пароль"
            placeholderTextColor={colors.muted}
            accessibilityLabel="Поле введення пароля"
          />
        </View>

        {error !== null && (
          <Text style={[styles.message, { color: colors.error }]}>
            {error}
          </Text>
        )}

        <Pressable
          accessibilityRole="button"
          onPress={handleContinue}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: colors.accent },
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={[styles.buttonText, { color: colors.onAccent }]}>
            Увійти (демо)
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  form: {
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    marginBottom: 25,
    textAlign: 'center',
    lineHeight: 22,
  },
  fieldContainer: {
    marginBottom: 16,
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
  },
  message: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 12,
  },
  button: {
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
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