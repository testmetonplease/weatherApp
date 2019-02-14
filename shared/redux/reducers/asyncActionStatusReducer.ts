import { AsyncAction, AsyncActionStatus } from '../actions/asyncAction';

const italyCenterLatitude = 41.8962667;
const italyCenterLongitude = 11.3340056;

export interface Weather {
  temperature:number;
  humidity:number;
  timestamp: Date;
}
export interface Coordinate {
  lat:number;
  lng:number;
}

export interface ReduxState {
  loadStatus:AsyncActionStatus;
  location: Coordinate;
  weather: Weather;
  error: string;
  locationError: boolean;
}

export const initialState = {
  loadStatus: AsyncActionStatus.UNSTARTED,
  location: { lat:italyCenterLatitude, lng:italyCenterLongitude },
  weather: { temperature:33, humidity:34, timestamp: new Date() },
  error: '',
  locationError: false,
};

export function reduceAsyncActionStatusOf<T extends string>(type: T) {
  return (state: ReduxState = initialState, action: AsyncAction<T>): ReduxState => {
    if (action.type === 'LOAD WEATHER') {
      switch (action.status) {
        case AsyncActionStatus.SUCCEEDED:
          return {
            ...state,
            error: '',
            loadStatus:action.status,
            weather: action.payload,
          };
        case AsyncActionStatus.FAILED:
          return {
            ...state,
            loadStatus:action.status,
            error: 'action.payload.error',
          };
        default:
          return {
            ...state, loadStatus:action.status,
          };
      }
    }
    if (action.type === 'INIT') {
      switch (action.status) {
        case AsyncActionStatus.SUCCEEDED:
          return {
            ...state,
            ...action.payload,
            error: '',
            loadStatus:action.status,
          };
        case AsyncActionStatus.FAILED:
          return {
            ...state,
            loadStatus:action.status,
            error: 'action.payload.error',
          };
        default:
          return {
            ...state, loadStatus:action.status,
          };
      }
    }
    if (action.type === 'LOCATION') {
      switch (action.status) {
        case AsyncActionStatus.SUCCEEDED:
          return {
            ...state,
            error: '',
            loadStatus:action.status,
            location: action.payload,
          };
        case AsyncActionStatus.FAILED:
          return {
            ...state,
            loadStatus:action.status,
            error: 'action.payload.error',
          };
        default:
          return {
            ...state, loadStatus:action.status,
          };
      }
    }
    return state;
  };
}
