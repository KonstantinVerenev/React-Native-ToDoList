import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CircleButton from '../../components/CircleButton/CircleButton';
import { getRandomNum } from '../../components/services/getRandomNum';
import TasksBlock from '../../components/TasksBlock/TasksBlock';
import { initialData, categoriesData, testTask } from '../../constants/toDoStructure';

export default function Main() {
  const [data, setData] = useState(initialData);

  const addNewTask = () => {
    setData([...data, { ...testTask, id: getRandomNum() }]);
  };

  const deleteTask = (id) => {
    const dataAfterDelete = data.filter(item => {
      if (item.id !== id) {
        return item;
      };
    });

    setData(dataAfterDelete);
  };

  const notCompletedTasks = data.filter(item => item.isComplete === false);
  const completedTasks = data.filter(item => item.isComplete === true);

  const changeTask = ({ id, key, value }) => {
    const changeData = data.map(item => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }
      return item;
    });

    setData(changeData);
  };

  return (
    <View style={styles.mainContainer}>
      <TasksBlock
        title={'Новые'}
        data={notCompletedTasks}
        changeTask={changeTask}
        deleteTask={deleteTask}
        categories={categoriesData}
      />
      <TasksBlock
        title={'Выполненные'}
        data={completedTasks}
        changeTask={changeTask}
        deleteTask={deleteTask}
        categories={categoriesData}
      />
      <CircleButton addNewTask={addNewTask}></CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10
  }
});