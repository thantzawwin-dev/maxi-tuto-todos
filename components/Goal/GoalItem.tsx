import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export type DeleteGoalHandlerProps = (id: string) => void

interface Props {
  text: string
  id: string
  deleteGoalHandler: DeleteGoalHandlerProps
}

const GoalItem = ({ text, id, deleteGoalHandler }: Props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  pressedItem: { opacity: 0.5 },
  goalText: {
    color: '#fff',
    padding: 8,
  },
})

export default GoalItem
