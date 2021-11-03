import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CircleButton({ addNewTask }) {
  return (
    <TouchableOpacity style={styles.addButton} onPress={addNewTask}>
      <Icon name="plus" size={30} color="white" solid />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#3f4ea0'
  },
  addButtonText: {
    color: 'white',
    fontSize: 32
  }
});