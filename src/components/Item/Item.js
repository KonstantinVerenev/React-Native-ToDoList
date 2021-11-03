import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { getRandomNum } from '../services/getRandomNum';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Item({
  id, name, category,
  isComplete, changeTask,
  deleteTask, categories }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(isComplete);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category);


  const pickerItems = Object.keys(categories).map(key => {
    return <Picker.Item label={categories[key]} value={categories[key]} />;
  });

  const categoryItem = () => {
    if (isEditable) {
      return (
        <Picker
          key={getRandomNum()}
          selectedValue={selectedCategory}
          onValueChange={value => {
            setSelectedCategory(value);
            changeTask({ id, key: 'category', value: value });
          }}
        >
          {pickerItems}
        </Picker>
      );
    } else {
      return (
        <Text style={styles.category}>{category}</Text>
      );
    }
  };

  return (
    <View style={styles.taskItem}>
      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => {
            setToggleCheckBox(newValue);
            changeTask({ id, key: 'isComplete', value: newValue });
          }}
        />
        <View style={styles.textContainer}>
          {isEditable ?
            <TextInput
              style={[styles.taskTitle, { borderWidth: 1, padding: 0 }]}
              onChangeText={(text) => changeTask({ id, key: 'name', value: text })}
              defaultValue={name}
            />
            :
            <Text style={[styles.taskTitle, isComplete ? { opacity: 0.4 } : null]}>{name}</Text>
          }
          {isComplete ? null : categoryItem()}
        </View>
      </View>
      <TouchableOpacity onPress={() => setIsEditable(!isEditable)}>
        {isEditable ?
          <Icon name="save" size={35} color="black" solid />
          :
          <Icon name="edit" size={35} color="black" solid />
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(id)}>
        <Icon name="times-circle" size={35} color="black" />
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  textContainer: {
    marginLeft: 15,
    minWidth: 160
  },
  taskTitle: {
    fontSize: 18,
    color: 'black'
  },
  category: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5
  }
});