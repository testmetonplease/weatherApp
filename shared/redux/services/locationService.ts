
import { Coordinate } from '../reducers/asyncActionStatusReducer';

export interface LoadingData {
  loc:Coordinate ;
}

class LocationService {

  getCurrentLocation(options: object) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, ({ code, message }) =>
        reject(Object.assign(new Error(message), { code, name: 'PositionError' })),
                                               options);
    });
  }

  getLocationAsync = async () => {
    try {
      const location = await this.getCurrentLocation({
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
      if (!location && !location.coords) {
        const loc = {
          lat: 41.8962667,
          lng: 11.3340056,
        };
        return loc;
      }
      console.log(location);
      const loc = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      };
      return loc;
    } catch (error) {
      if (error.name === 'PositionError') {
        console.log(`${error.message}. code = ${error.code}`);
      }
    }
  }

}

export const locationService = new LocationService();
