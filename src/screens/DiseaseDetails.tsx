import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';
import Fo from 'react-native-vector-icons/Fontisto';
import FA from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../components/common/Colors';
import HospitalCard from '../components/common/HospitalCard';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/navigation/RootStackParamList';
import DatePicker from 'react-native-date-picker';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {formatDate} from '../components/common/FormatDate';

type screenType = NativeStackNavigationProp<RootStackParamList>;
import {ProgressChart} from 'react-native-chart-kit';

export default function DiseaseDetails() {
  const navigation = useNavigation<screenType>();
  const {height, width} = Dimensions.get('window');



  const [selectedYear, setselectedYear] = React.useState<number>();
  const [selectedMonth, setselectedMonth] = React.useState<number>();
  const [openDate, setopenDate] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const [openTime, setopenTime] = React.useState(false);
  const [time, settime] = React.useState(new Date());

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    setopenDate(false);
    setDate(selectedDate || new Date());
  };
  const onTimeChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    setopenTime(false);
    settime(selectedDate || new Date());
  };

  console.log(time.toLocaleTimeString());

  const HospitalData = [
    {
      image: require('../assets/images/national-cancer.jpg'),
      name: 'Achimota Hospital',
      address: 'Sowutuom',
      rating: 4,
      start_time: '6am',
      end_time: '6pm',
    },
    {
      image: require('../assets/images/national-cancer.jpg'),
      name: "St. John's Hospital",
      address: 'Madina',
      rating: 3.5,
      start_time: '6am',
      end_time: '6pm',
    },
    {
      image: require('../assets/images/national-cancer.jpg'),
      name: "St. John's Hospital",
      address: 'Madina',
      rating: 3.5,
      start_time: '6am',
      end_time: '6pm',
    },
    {
      image: require('../assets/images/national-cancer.jpg'),
      name: "St. John's Hospital",
      address: 'Madina',
      rating: 3.5,
      start_time: '6am',
      end_time: '6pm',
    },
    {
      image: require('../assets/images/national-cancer.jpg'),
      name: "St. John's Hospital",
      address: 'Madina',
      rating: 3.5,
      start_time: '6am',
      end_time: '6pm',
    },
    {
      image: require('../assets/images/national-cancer.jpg'),
      name: "St. John's Hospital",
      address: 'Madina',
      rating: 3.5,
      start_time: '6am',
      end_time: '6pm',
    },
  ];

  return (
    // <View style={{paddingBottom: 250, flex: 1}}>
    //   <View
    //     style={{
    //       padding: 10,
    //       backgroundColor: '#6C70C9',
    //       borderBottomLeftRadius: 20,
    //     }}>
    //     <TouchableOpacity onPress={() => navigation.goBack()}>
    //       <Icon name="keyboard-backspace" size={30} color={Colors.white} />
    //     </TouchableOpacity>
    //     <View>
    //       <Text
    //         style={{
    //           color: Colors.white,
    //           fontWeight: 'bold',
    //           fontSize: 20,
    //           paddingTop: 10,
    //         }}>
    //         Hospital
    //       </Text>
    //       <Text style={{color: Colors.white, paddingVertical: 10}}>
    //         You're not assigned to an hospital
    //       </Text>
    //     </View>
    //   </View>

    //   <View>
    //     <Text
    //       style={{
    //         color: Colors.black,
    //         paddingVertical: 20,
    //         paddingLeft: 10,
    //         fontSize: 16,
    //       }}>
    //       Hospitals in Greater Accra Region
    //     </Text>

    //     <View>
    //       <FlatList
    //         data={HospitalData}
    //         renderItem={({item}) => <HospitalCard data={item} />}
    //       />
    //     </View>
    //   </View>
    // </View>

    <View style={{padding: 10, flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingVertical: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MI name="arrow-back-ios" size={25} color={Colors.gray} />
        </TouchableOpacity>
        <Text style={{color: Colors.black, fontSize: 17}}>Polio</Text>
        <View />
      </View>
      <View style={{padding: 10, backgroundColor: Colors.white, height: '25%',borderRadius: 8}}>
        <Text style={{textAlign: 'center'}}>Graphs</Text>
        {/* <ProgressChart  /> */}
      </View>

      <ScrollView style={{flex: 1}}>
        <View>
          <Text
            style={{
              color: Colors.black,
              fontWeight: '600',
              fontSize: 16,
              paddingTop: 10,
            }}>
            Hospital Details
          </Text>
          <View style={{paddingVertical: 10}}>
            <TouchableOpacity style={styles.info}>
              <FA name="hospital" color={Colors.gray} size={20} />
              <Text style={{color: Colors.black}}>Achimota Hospital</Text>
            </TouchableOpacity>
            <View style={styles.info}>
              <Icon name="phone" color={Colors.gray} size={20} />
              <Text style={{color: Colors.black}}>0551878799</Text>
            </View>
            <View style={styles.info}>
              <Icon name="email-outline" color={Colors.gray} size={20} />
              <Text style={{color: Colors.black}}>stephenappiaa@gmail.com</Text>
            </View>
            <View style={styles.info}>
              <MI name="location-pin" color={Colors.gray} size={20} />
              <Text style={{color: Colors.black}}>Location, Accra</Text>
            </View>
          </View>

          <View style={{paddingTop: 10}}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 16,
                fontWeight: '600',
                paddingBottom: 10,
              }}>
              Appointment
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={styles.selectYearBtn}
                onPress={() => setopenDate(true)}>
                <Fo name="date" color={Colors.gray} size={20} />
                <Text style={styles.yearBtnText}>Select Date</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.selectYearBtn}
                onPress={() => setopenTime(true)}>
                <Fo name="clock" color={Colors.gray} size={20} />
                <Text style={styles.yearBtnText}>Select Time</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.yearBtnText}>{formatDate(date)}</Text>
              <Text style={styles.yearBtnText}>
                {time?.toLocaleTimeString()}
              </Text>
            </View>

            {openDate && (
              <DateTimePicker
                value={date}
                mode={'date'}
                display="inline"
                onChange={onChange}
              />
            )}
            {openTime && (
              <DateTimePicker
                value={time}
                mode={'time'}
                display="clock"
                onChange={onTimeChange}
              />
            )}
          </View>
        </View>

      </ScrollView>
        <View>
          <TouchableOpacity style={styles.appointmentBtn}>
            <Text style={{color: Colors.white}}>Make Appointment</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appointmentBtn: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    right: 0,left:0,
    alignItems: "center"
  },
  info: {flexDirection: 'row', alignItems: 'center', gap: 10, paddingBottom: 5},
  yearBtn: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4,
    padding: 10,
    width: Dimensions.get('window').width / 2,
    marginRight: 10,
  },
  yearBtnText: {
    color: Colors.gray,
  },
  selectYearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
    width: Dimensions.get('window').width / 3,
    padding: 10,
    borderRadius: 4,
  },
});
