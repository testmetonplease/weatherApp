import axios from 'axios';

import { AsyncStorage } from 'react-native';
import { Coordinate } from '../reducers/asyncActionStatusReducer';
import store from '../store';

export interface LoadingData {
  location: Coordinate;
}

class LoadingService {

  load = async () => {
    try {
      const { lat, lng } = store.getState().weatherState.location;
      const base = 'http://api.openweathermap.org/data/2.5/weather';
      const URL = `${base}?lat=${lat}&lon=${lng}&APPID=5c630aa5fd148dba7ae1e7fcba4f6501`;
      const respond = await axios.get(URL);
      const { main } = respond.data;
      if (!main)  {
        const weather = {
          temperature: 23,
          humidity: 33,
          timestamp: new Date(),
        };
        return weather;
      }
      const weather = {
        temperature: main.temp,
        humidity: main.humidity,
        timestamp: new Date(),
      };
      const loc = {
        lat,
        lng,
      };
      AsyncStorage.multiSet([['last', JSON.stringify(weather)],
                             ['location', JSON.stringify(loc)],
      ]);
      return weather;
    } catch (error) {
      console.error(error);
    }
  }
}

export const loadingService = new LoadingService();
