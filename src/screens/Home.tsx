import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import FA from 'react-native-vector-icons/FontAwesome6';
import MC from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../components/common/Colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../components/navigation/RootStackParamList';
import {useSelector} from 'react-redux';
import {selectuser} from '../feature/slices/AuthSlice';

type navType = NativeStackNavigationProp<RootStackParamList>;

export default function Home() {
  const navigation = useNavigation<navType>();
  const {width, height} = Dimensions.get('screen');
  const user = useSelector(selectuser);
  console.log('token=', user.token);
  const DiseaseData = [
    {
      id: 1,
      name: 'Polio',
      icon: (
        <Image
          style={{height: 30, width: 30}}
          source={require('../assets/images/virus.png')}
        />
      ),
    },
    {
      id: 2,
      name: 'Measles',
      icon: (
        <Image
          style={{height: 30, width: 30}}
          source={require('../assets/images/measles.png')}
        />
      ),
    },
    {
      id: 3,
      name: 'Diphtheria',
      icon: (
        <Image
          style={{height: 30, width: 30}}
          source={require('../assets/images/bacteria.png')}
        />
      ),
    },
    {
      id: 4,
      name: 'Pertussis',
      icon: (
        <Image
          style={{height: 30, width: 30}}
          source={require('../assets/images/sneezing.png')}
        />
      ),
    },
    {
      id: 5,
      name: 'Tetanus',
      icon: (
        <Image
          style={{height: 30, width: 30}}
          source={require('../assets/images/tetanus.png')}
        />
      ),
    },
    {
      id: 6,
      name: 'Tuberculosis',
      icon: (
        <Image
          style={{height: 30, width: 30}}
          source={require('../assets/images/lung-cancer.png')}
        />
      ),
    },
  ];
  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={styles.header}>
        <View style={styles.location}>
          <Icon name="location" color={Colors.primary} size={25} />
          <Text style={{color: Colors.black}}>Sowutuom, Accra</Text>
        </View>

        <TouchableOpacity style={styles.bell}>
          <View style={{flexDirection: 'row', position: 'relative'}}>
            {/* <Icon name="bell" color={Colors.black} size={25} /> */}
            <Text>{user?.first_name[0]} {user?.last_name[0]}</Text>
            <View
              style={{
                backgroundColor: Colors.primary,
                padding: 4,
                borderRadius: 100,
                height: 2,
                width: 2,
                position: 'absolute',
                right: 3,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{backgroundColor: Colors.black, height: 200}}>
          <ImageBackground
            source={require('../assets/images/hero_section.jpg')}
            resizeMode="cover"
            style={{height: 200, width: width}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.39)',
              }}>
              <Text
                style={{color: Colors.white, fontSize: 20, fontWeight: 'bold'}}>
                Vaccination
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View>
          <Text
            style={{
              color: Colors.gray,
              paddingTop: 15,
              fontWeight: '600',
              fontSize: 16,
            }}>
            Diseases
          </Text>

          <FlatList
            data={DiseaseData}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('disease_details')}
                style={styles.diseaseCard}>
                <View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    {item.icon}
                  </View>
                  <Text
                    style={{
                      color: Colors.primary,
                      textAlign: 'center',
                      fontSize: 16,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bell: {
    backgroundColor: Colors.white,
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diseaseCard: {
    elevation: 5,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    width: '48%',
    height: 80,
    marginHorizontal: 4,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
