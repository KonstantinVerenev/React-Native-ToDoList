import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Item from '../Item/Item';

export default function List({ data, changeTask, deleteTask, categories }) {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      name={item.name}
      category={item.category}
      isComplete={item.isComplete}
      changeTask={changeTask}
      deleteTask={deleteTask}
      categories={categories}
    />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
