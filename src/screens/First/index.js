import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const First = ({navigation}) => {
  const [name, setName] = useState('');
  const [polindrome, setPolindrome] = useState('');

  const polindromeChecker = string => {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        return alert('It is not a palindrome');
      }
    }
    return alert('It is a palindrome');
  };

  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.ImageBackground}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
          barStyle={'light-content'}
        />
        <Input placeholder={'Name'} onChangeText={val => setName(val)} />
        <Input
          placeholder={'Polindrome'}
          onChangeText={val => setPolindrome(val)}
        />
        <Button
          caption={'CHECK'}
          onPress={() => polindromeChecker(polindrome)}
        />
        <Button
          caption={'NEXT'}
          onPress={() => navigation.navigate('Second', {name: name})}
        />
      </ImageBackground>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
