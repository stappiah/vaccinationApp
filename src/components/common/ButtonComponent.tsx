import {View, Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {Colors} from './Colors';

type propsType = {
  lable: string;
  onPress: any;
};

export default function ButtonComponent({lable, onPress}: propsType) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={{textAlign: 'center', color: Colors.white, fontWeight: '600'}}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
}

export function LoadingButtonComponent() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} color={Colors.white} />
      </View>
    )
  }
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
});
