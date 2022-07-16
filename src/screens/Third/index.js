import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Third = ({navigation}) => {
  const [users, setUsers] = useState(null);

  const getData = () => {
    axios({
      method: 'get',
      url: 'https://reqres.in/api/users',
    }).then(function (response) {
      setUsers(response.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Second', {user: item.first_name})}
      style={{
        flexDirection: 'row',
        width: 335,
        height: 80,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
      }}>
      <Image
        style={{width: 50, height: 50, borderRadius: 25, marginRight: 20}}
        source={{uri: item.avatar}}
      />
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#000',
          }}>{`${item.first_name} ${item.last_name}`}</Text>
        <Text style={{fontSize: 12, textTransform: 'uppercase', color: '#000'}}>
          {item.email}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Third;
