import React, { useState } from 'react'

import { View, StyleSheet, Button, TextInput, Modal } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export type GoalInputHandlerProps = (enteredText: string) => void
export type SetGoalHandlerProps = () => void
export type AddGoalHandlerProps = (enteredText: string) => void

type Props = {
  onAdd: AddGoalHandlerProps
  onCancel: () => void
  visible: boolean
}

const GoalInput = ({ onAdd, visible, onCancel }: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('')

  const goalInputHandler: GoalInputHandlerProps = (enteredText: string) =>
    setEnteredGoalText(enteredText)

  const setGoalHandler: SetGoalHandlerProps = () => {
    onAdd(enteredGoalText)
    setEnteredGoalText('')
    onCancel()
  }

  const endModelHandler: any = () => endModelHandler()

  return (
    <Modal
      visible={visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          style={styles.image}
          name="target"
          size={100}
          color="#fff"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color={'#5e0acc'}
              onPress={setGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={'#f31282'}
              onPress={onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#1e085a',
  },
  image: {
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})

export default GoalInput
