import { Pressable, Text, StyleSheet } from "react-native";

export const FokusButton = ({ onPress, title, icon }) => {
  return (
    <Pressable style={styles.button}>
      {icon}
      <Text style={styles.buttonText} onPress={onPress}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  buttonText: {
    color: "#021123",
    textAlign: 'center',
    fontSize: 20
  }
}) 