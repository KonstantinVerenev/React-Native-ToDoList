import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import List from '../List/List';

export default function TasksBlock({ title, data, changeTask, deleteTask, categories }) {
  return (
    <View style={styles.taskBlockContainer}>
      <Text style={{ padding: 10, fontSize: 18, fontWeight: '700' }}>{title}</Text>
      <List
        data={data}
        changeTask={changeTask}
        deleteTask={deleteTask}
        categories={categories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskBlockContainer: {
    flex: 0.5,
    paddingBottom: 30
  }
});