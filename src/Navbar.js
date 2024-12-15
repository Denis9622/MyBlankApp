import { View, Text, StyleSheet } from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center", // Центрирует дочерние элементы по горизонтали
    justifyContent: "flex-end",
    backgroundColor: "#ddd", // Добавил фон для визуализации
  },
  text: {
    fontSize: 20,
    marginBottom: 10, // Немного отступа снизу для центрации
  },
});    where git
