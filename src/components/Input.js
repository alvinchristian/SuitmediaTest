import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = ({placeholder, onChangeText}) => {
  return (
    <TextInput
      style={styles.Container}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    width: '80%',
    height: 40,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 25,
  },
});
