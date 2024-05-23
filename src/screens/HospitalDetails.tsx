import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../components/common/Colors';
import {ReadRating} from '../components/common/Rating';
import Icon from 'react-native-vector-icons/EvilIcons';
import MC from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/navigation/RootStackParamList';

type screenType = NativeStackNavigationProp<RootStackParamList>;

export default function HospitalDetails() {
  const navigation = useNavigation<screenType>();

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <View style={{height: 250, width: '100%'}}>
        <Image
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          source={require('../assets/images/national-cancer.jpg')}
        />
        <TouchableOpacity
          style={{position: 'absolute', top: 30}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.detailsContainer}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Colors.black, fontSize: 16}}>
            Hospital Name Hospital Name
          </Text>
          <ReadRating ratingValue={3} size={15} />
        </View>

        <View style={{paddingVertical: 10}}>
          <Text
            style={{color: Colors.black, fontWeight: '600', paddingBottom: 5}}>
            About Hospital
          </Text>
          <Text style={{color: Colors.black}}>
            I am writing to express my keen interest in the Fashion Teacher
            position at your esteemed institution. With a robust background in
            fashion design training and clothing and textile education, I am
            eager to bring my expertise and passion for nurturing creativity to
            your dynamic team.
          </Text>
        </View>

        <View style={{paddingTop: 20}}>
          <Text style={{color: Colors.black}}>Contact Information</Text>
          <View style={{flexDirection: 'row', gap: 10, paddingVertical: 10}}>
            <View style={styles.location}>
              <MC name="phone" size={20} color={Colors.primary} />
            </View>
            <View>
              <Text style={{color: Colors.black, fontWeight: '600'}}>
                0551874500
              </Text>
              <Text style={{color: Colors.gray}}>hospital@mail.com</Text>
            </View>
          </View>
        </View>

        <View style={{paddingTop: 20}}>
          <Text style={{color: Colors.black}}>Location</Text>
          <View style={{flexDirection: 'row', gap: 10, paddingVertical: 10}}>
            <View style={styles.location}>
              <Icon name="location" size={20} color={Colors.primary} />
            </View>
            <View>
              <Text style={{color: Colors.black, fontWeight: '600'}}>
                Asofan, Accra
              </Text>
              <Text style={{color: Colors.gray}}>Greater Accra Region</Text>
            </View>
          </View>
        </View>

        <View style={{paddingTop: 20, paddingBottom: 80}}>
          <Text style={{color: Colors.black}}>Working Time</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View style={styles.location}>
              <Icon name="clock" size={20} color={Colors.primary} />
            </View>
            <View>
              <Text style={{color: Colors.black, fontWeight: '600'}}>
                8am - 9pm
              </Text>
              {/* <Text style={{color: Colors.gray}}>Greater Accra Region</Text> */}
            </View>
          </View>
        </View>

      </ScrollView>
        <View>
          <TouchableOpacity style={styles.selectBtn}>
            <Text style={{color: Colors.white, textAlign: 'center'}}>
              Select Hospital
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: -10,
    padding: 10,
  },
  location: {
    width: 40,
    height: 40,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  selectBtn: {backgroundColor: Colors.primary, paddingVertical: 15, borderRadius: 10,position: "absolute",right: 10,left: 10,bottom: 10},
});
