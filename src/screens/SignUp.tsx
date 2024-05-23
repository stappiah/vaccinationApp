import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../components/common/Colors';
import Textinput from '../components/common/Textinput';
import PasswordInput from '../components/common/PasswordInput';
import ButtonComponent, {
  LoadingButtonComponent,
} from '../components/common/ButtonComponent';
import {RootStackParamList} from '../components/navigation/RootStackParamList';
import axios from 'axios';
import {BASEURL} from '../components/common/BASEURL';

type screenType = NativeStackNavigationProp<RootStackParamList>;

export default function SignUp() {
  const navigation = useNavigation<screenType>();
  const [first_name, setfirst_name] = React.useState('');
  const [last_name, setlast_name] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [confirm_password, setconfirm_password] = React.useState('');
  const [message, setmessage] = React.useState('');
  const [openSnack, setopenSnack] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [active, setactive] = React.useState(0);
  const [user_type, setuser_type] = React.useState('mother');

  const userSignupFunction = () => {
    const body = {
      first_name,
      last_name,
      email,
      password,
      password2: confirm_password,
      user_type,
    };
    axios
      .post(`${BASEURL}/account/register`, body)
      .then(response => {
        console.log(response.data);
        // dispatch(
        //   GetAuth({
        //     token: response.data.token,
        //   }),
        // );
        navigation.navigate('home');
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      });
  };

  const UserType = [
    {label: 'Mother', value: 'mother'},
    {label: 'Admin', value: 'admin'},
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color={Colors.black} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
                fontSize: 24,
                paddingVertical: 10,
              }}>
              Create Account
            </Text>
          </View>
        </View>
        <View style={styles.user_type}>
          {UserType.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.user_typeBtn,
                active === index && styles.activeBtn,
              ]}
              onPress={() => {
                setactive(index);
                setuser_type(item.value);
              }}>
              <Text
                style={
                  active === index
                    ? {color: Colors.white}
                    : {color: Colors.gray}
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{paddingVertical: 10}}>
          <Textinput
            placeholder="First name"
            icon="account"
            value={first_name}
            onChange={e => setfirst_name(e)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Textinput
            placeholder="Last name"
            icon="account"
            value={last_name}
            onChange={e => setlast_name(e)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Textinput
            placeholder="Email address"
            icon="account"
            value={email}
            onChange={e => setemail(e)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={e => setpassword(e)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <PasswordInput
            placeholder="Confirm Password"
            value={confirm_password}
            onChange={e => setconfirm_password(e)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          {loading ? (
            <LoadingButtonComponent />
          ) : (
            <ButtonComponent lable="Sign up" onPress={userSignupFunction} />
          )}
        </View>

        <TouchableOpacity
          style={styles.accountCheck}
          onPress={() => navigation.navigate('login')}>
          <Text style={{color: Colors.black}}>Already have an account?</Text>
          <Text style={{color: Colors.primary, fontWeight: '600'}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{paddingTop: 80}}>
        {/* <SnackbarComponent
          message={message}
          onDismiss={() => setopenSnack(false)}
          onPress={() => setopenSnack(false)}
          visible={openSnack}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  user: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  user_type: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 50,
    marginVertical: 10,
  },
  user_typeBtn: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },
  activeBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  accountCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingTop: 10,
  },
});
