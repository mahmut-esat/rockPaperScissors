import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyButton = ({onPress, title, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={50} color={"white"}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6a1b9a',
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    marginTop:7
  },
});
