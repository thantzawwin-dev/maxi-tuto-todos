import GoalInput, { AddGoalHandlerProps, SetGoalHandlerProps } from '@/components/Goal/GoalInput'
import GoalItem, { DeleteGoalHandlerProps } from '@/components/Goal/GoalItem'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Goal = {
  text: string
  // key?: string
  id: string
}

export default function Index() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([])
  const [visible, setVisible] = useState<boolean>(false)

  const addGoalHandler: AddGoalHandlerProps = (enteredGoalText: string) => {
    setCourseGoals((currentCourseGoals: Goal[]) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endModalHandler()
  }

  const deleteGoalHandler: DeleteGoalHandlerProps = (id: string) =>
    setCourseGoals((currentCourseGoals: Goal[]) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    )

  const startModalHandler = () => setVisible(true)
  const endModalHandler = () => setVisible(false)

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          onAdd={addGoalHandler}
          onCancel={endModalHandler}
          visible={visible}
        />
        <Button
          title="Add New Goal"
          color={'#9d53ff'}
          onPress={startModalHandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData?.item?.text}
                id={itemData?.item?.id}
                deleteGoalHandler={deleteGoalHandler}
              />
            )}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 4,
    marginTop: 8,
  },
})
