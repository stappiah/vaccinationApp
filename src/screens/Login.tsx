import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from '../components/common/Colors';
import ButtonComponent, {
  LoadingButtonComponent,
} from '../components/common/ButtonComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Textinput from '../components/common/Textinput';
import PasswordInput from '../components/common/PasswordInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../components/navigation/RootStackParamList';
import axios from 'axios';
import {BASEURL} from '../components/common/BASEURL';
import {useDispatch} from 'react-redux';
import {GetAuth} from '../feature/slices/AuthSlice';
import SnackbarComponent from '../components/common/SnackbarComponent';

type navType = NativeStackNavigationProp<RootStackParamList>;

export default function Login() {
  const navigation = useNavigation<navType>();
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [loading, setloading] = React.useState(false);
  const [openSnack, setopenSnack] = React.useState(false);
  const [message, setmessage] = React.useState('');
  const dispatch = useDispatch();

  const userLoginFunction = () => {
    if (!email) {
      setopenSnack(true);
      setmessage("Error! You forgot to enter email");
      return;
    }
    else if (!password) {
      setopenSnack(true);
      setmessage("Error! You forgot to enter password");
      return;
    }
    const body = {
      username: email,
      password,
    };
    axios
    .post(`${BASEURL}/account/login`, body)
    .then(response => {
      console.log(response.data);
      dispatch(
        GetAuth({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          phone_number: response.data.phone_number,
          token: response.data.token,
        }),
      );
      setopenSnack(true);
      setmessage('Login success');
      navigation.navigate('home');
    })
    .catch(error => {
      if (error.response) {
          setopenSnack(true);
          setmessage(error.response.data.non_field_errors[0]);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.user}>
          <Icon name="account-circle" size={80} color={Colors.gray} />
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.black,
              fontSize: 25,
              paddingTop: 10,
            }}>
            Welcome Back
          </Text>
          <Text style={{color: Colors.black}}>Sign in to continue</Text>
        </View>
        <View style={{paddingVertical: 10}}>
          <Textinput
            placeholder="Email address"
            icon="email"
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
          {loading ? (
            <LoadingButtonComponent />
          ) : (
            <ButtonComponent lable="Login" onPress={userLoginFunction} />
          )}
        </View>

        <TouchableOpacity
          style={styles.accountCheck}
          onPress={() => navigation.navigate('signup')}>
          <Text style={{color: Colors.black}}>Don't have an account?</Text>
          <Text style={{color: Colors.primary, fontWeight: '600'}}>
            Create account
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 200}}>
        <SnackbarComponent
          message={message}
          onDismiss={() => setopenSnack(false)}
          onPress={() => setopenSnack(false)}
          visible={openSnack}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  user: {
    alignItems: 'center',
    paddingBottom: 30,
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
