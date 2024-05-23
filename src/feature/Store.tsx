import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AuthReducer from './slices/AuthSlice';

interface userType {
  first_name: string;
  last_name: string;
  token: string;
  email: string;
  user_type: string;
}

export interface RootState {
  auth: {
    user: userType;
  };
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);
