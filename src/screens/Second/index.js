import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../../components/Button';

const Second = ({route, navigation}) => {
  const name = route.params.name;
  const user = route.params.user;

  return (
    <View style={styles.Container}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 12, color: '#000'}}>Welcome</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          {name}
        </Text>
      </View>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
        {user ? user : 'Selected User Name'}
      </Text>
      <Button
        caption={'Choose a User'}
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
