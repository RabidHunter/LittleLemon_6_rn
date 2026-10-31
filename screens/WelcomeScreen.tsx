import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function WelcomeScreen() {
  const [name, setName] = useState('');

  return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        indicatorStyle="white"
      >
        <Text style={styles.heading}>Ласкаво просимо до Little Lemon</Text>

        <Text style={styles.paragraph}>
          Little Lemon — це затишне сімейне бістро, де ви зможете скуштувати автентичні страви італійської та середземноморської кухні.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ваше ім’я</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Введіть ваше ім’я"
            placeholderTextColor="#777777"
          />
          <Text style={styles.greeting}>
            {name.trim() ? `Вітаємо, ${name.trim()}!` : 'Введіть ім’я.'}
          </Text>
        </View>
      </ScrollView>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EDEFEE',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#EDEFEE',
    lineHeight: 24,
    marginBottom: 15,
  },
  inputContainer: {
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  label: {
    fontSize: 18,
    color: '#EDEFEE',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    height: 48,
    backgroundColor: '#EDEFEE',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333333',
    marginBottom: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4CE14',
    textAlign: 'center',
    marginTop: 5,
  },
});