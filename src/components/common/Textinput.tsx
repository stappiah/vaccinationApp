import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from './Colors';

type inputType = {
  placeholder: string;
  icon: string;
  value: string;
  onChange: (e: string) => void;
};

export default function Textinput({placeholder, icon, value, onChange}: inputType) {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={20} />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        style={{flex: 1,color: Colors.gray}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 2,
  },
});
