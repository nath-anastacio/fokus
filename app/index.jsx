import {useState} from 'react'
import { Pressable, Text, Image, StyleSheet, View } from "react-native";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./pomodoro.png')
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./short.png')
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./long.png')
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image source={timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.context}>
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>
              Foco
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>
              Pausa curta
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>
              Pausa longa
            </Text>
          </Pressable>
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    alignItems: 'center',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#fff',
    padding: 8
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
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
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
}) 