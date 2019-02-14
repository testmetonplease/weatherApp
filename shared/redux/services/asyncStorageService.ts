
import { AsyncStorage } from 'react-native';
import { Weather, initialState } from '../reducers/asyncActionStatusReducer';

export interface LoadingData {
  weather:Weather;
}

class AsyncStorageService {

  init = async () => {
    try {
      const weatherStorage = await AsyncStorage.getItem('last');
      const locationStorage = await AsyncStorage.getItem('location');

      if (weatherStorage && locationStorage)  {
        return {
          ...initialState,
          weather:JSON.parse(weatherStorage),
          location:JSON.parse(locationStorage),
        };
      }
      if (!weatherStorage && locationStorage)  {
        return {
          ...initialState,
          location:JSON.parse(locationStorage),
        };
      }
      if (weatherStorage && !locationStorage)  {
        return {
          ...initialState,
          weather:JSON.parse(weatherStorage),
        };
        return {
          ...initialState,
        };
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const asyncStorageService = new AsyncStorageService();
