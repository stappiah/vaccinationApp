import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import BottomNavigation from './src/components/navigation/BottomNavigation';
import DiseaseDetails from './src/screens/DiseaseDetails';
import {RootStackParamList} from './src/components/navigation/RootStackParamList';
import HospitalDetails from './src/screens/HospitalDetails';
import {Provider} from 'react-redux';
import Store from './src/feature/Store';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import {PaperProvider} from 'react-native-paper';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const persistor = persistStore(Store);

  return (
    <PaperProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor} />

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="home" component={BottomNavigation} />
            <Stack.Screen name="disease_details" component={DiseaseDetails} />
            <Stack.Screen name="hospital_details" component={HospitalDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}
