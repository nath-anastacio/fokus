import { Pressable, Text, StyleSheet } from "react-native";

export const FokusButton = ({onPress, title}) => {
    return (
        <Pressable style={styles.button}>
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
    padding: 8,
    width: 264,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#021123",
    textAlign: 'center',
    fontSize: 18
  }
}) 