import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../components/common/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation/RootStackParamList';

type screenType = NativeStackNavigationProp<RootStackParamList>;

export default function Appointment() {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation<screenType>();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 15
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" color={Colors.gray} size={20} />
        </TouchableOpacity>
        <Text style={{color: Colors.black, fontWeight: '600', fontSize: 17}}>
          Appointments
        </Text>
        <View />
      </View>

      <View>
        <TouchableOpacity style={styles.container}>
          <Image
            style={{height: 60, width: 60}}
            source={require('../assets/images/virus.png')}
          />
          <View style={{width: '80%'}}>
            <Text
              style={{color: Colors.black, fontWeight: '600', fontSize: 17}}>
              Polio
            </Text>
            <Text style={{color: Colors.gray, fontSize: 15}}>
              Achimotal Hospital
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: Colors.gray, fontSize: 15}}>
                Wednesday, 20th May, 1889
              </Text>
              <Text style={{color: Colors.gray, fontSize: 15}}>10:00AM</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Image
            style={{height: 60, width: 60}}
            source={require('../assets/images/virus.png')}
          />
          <View style={{width: '80%'}}>
            <Text
              style={{color: Colors.black, fontWeight: '600', fontSize: 17}}>
              Polio
            </Text>
            <Text style={{color: Colors.gray, fontSize: 15}}>
              Achimotal Hospital
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: Colors.gray, fontSize: 15}}>
                Wednesday, 20th May, 1889
              </Text>
              <Text style={{color: Colors.gray, fontSize: 15}}>10:00AM</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    padding: 10,
    gap: 15,
  },
});
