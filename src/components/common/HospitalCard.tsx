import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ReadRating} from './Rating';
import {Colors} from './Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

type dataType = {
    data: {
        image: any;
        name: string;
        address: string;
        start_time: string;
        end_time: string;
        rating: number;
    }
}
type screenType = NativeStackNavigationProp<RootStackParamList>

export default function HospitalCard({data}:dataType) {
    const navigation = useNavigation<screenType>();
    
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("hospital_details")}>
      <View style={{height: 150}}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={data?.image}
        />
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text style={{color: Colors.black, fontWeight: '600', fontSize: 16}}>
            {data?.name}
          </Text>
          <ReadRating ratingValue={data?.rating} size={18} />
        </View>
        <View style={{flexDirection: 'row', gap: 5, paddingTop: 5}}>
          <Icon name="location-outline" size={20} color={Colors.primary} />
          <Text style={{color: Colors.primary}}>{data?.address}</Text>
        </View>

        <View style={{justifyContent: "flex-end",alignItems:"flex-end"}}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Icon name="time-outline" size={20} color={Colors.black} />
            <Text style={{color: Colors.black, fontWeight: '600',fontSize: 16}}>
              {data?.start_time} - {data?.end_time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: Colors.white,
    elevation: 5,
    borderRadius: 10,
  },
});
