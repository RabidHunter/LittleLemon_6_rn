import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TextInput, View, StyleSheet, Platform } from 'react-native';

function isEmailFormatValid(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = isEmailFormatValid(email);

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <Text style={styles.title}>Вхід до Little Lemon</Text>
        <Text style={styles.description}>
          Введіть свій email та пароль для авторизації.
        </Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="example@mail.com"
            placeholderTextColor="#777777"
          />
          {email.length > 0 && !isEmailValid && (
            <Text style={styles.errorText}>Некоректний формат email</Text>
          )}
          {email.length > 0 && isEmailValid && (
            <Text style={styles.successText}>Email має коректний формат</Text>
          )}
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Пароль</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            submitBehavior="blurAndSubmit"
            placeholder="Введіть пароль"
            placeholderTextColor="#777777"
          />
          {password.length > 0 && (
            <Text style={styles.successText}>Пароль введено</Text>
          )}
        </View>
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
    color: '#EDEFEE',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#EDEFEE',
    marginBottom: 25,
    textAlign: 'center',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EDEFEE',
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: '#EDEFEE',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333333',
  },
  errorText: {
    color: '#EE9972',
    fontSize: 14,
    marginTop: 6,
  },
  successText: {
    color: '#F4CE14',
    fontSize: 14,
    marginTop: 6,
  },
});