import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from './Colors';

type inputType = {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
};

export default function PasswordInput({placeholder, value, onChange}: inputType) {
  const [visible, setvisible] = useState(false);

  return (
    <View style={styles.container}>
      <Icon name="lock" size={20} color={Colors.gray} />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        style={{flex: 1,color: Colors.gray}}
        secureTextEntry={visible ? false : true}
      />
      {!visible?
      <TouchableOpacity onPress={() => setvisible(true)}>
        <Icon name="eye" size={20} color={Colors.gray} />
      </TouchableOpacity>:
      <TouchableOpacity onPress={() => setvisible(false)}>
        <Icon name="eye-off" size={20} color={Colors.gray} />
      </TouchableOpacity>
      }
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
