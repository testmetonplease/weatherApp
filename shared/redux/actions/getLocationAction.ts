import { LoadingData, locationService  } from '../services/locationService';
import { async, AsyncAction } from './asyncAction';

export const LOAD = 'LOCATION';
export type getLocationAction = AsyncAction<typeof LOAD, LoadingData>;

export function getLocationAction() {
  return async(LOAD, locationService.getLocationAsync);
}
