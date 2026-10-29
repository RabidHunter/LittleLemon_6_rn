import { View, Text, StyleSheet } from 'react-native';

export function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ласкаво просимо до Little Lemon</Text>
      
      <Text style={styles.paragraph}>
        Little Lemon — це затишне сімейне бістро, де ви зможете скуштувати автентичні страви італійської та середземноморської кухні. Наш шеф-кухар використовує лише свіжі, локальні інгредієнти, щоб кожна страва дарувала вам незабутні враження.
      </Text>
      
      <Text style={styles.paragraph}>
        Ми пишаємося своєю домашньою пастою, яку готуємо щоранку за традиційними рецептами. У нашому меню ви також знайдете класичну неаполітанську піцу з пухкими бортиками, ніжні морепродукти та широкий вибір вегетаріанських позицій.
      </Text>
      
      <Text style={styles.paragraph}>
        Бістро ідеально підходить для романтичних вечерь, сімейних свят або просто спокійної зустрічі з друзями за келихом вина. Ми працюємо з вівторка по неділю, з 11:00 до 22:00. Завітайте до нас і відчуйте атмосферу сонячної Італії прямо у вашому місті!
      </Text>
      
      <Text style={styles.paragraph}>
        У вихідні дні ми також пропонуємо спеціальне меню сніданків. Бронюйте столики заздалегідь, адже кількість місць обмежена, а ми хочемо приділити увагу кожному гостю.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EDEFEE',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    color: '#EDEFEE',
    lineHeight: 28,
    marginBottom: 15,
  },
});