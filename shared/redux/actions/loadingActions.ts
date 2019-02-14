import { LoadingData, loadingService } from '../services/loadingService';
import { async, AsyncAction } from './asyncAction';
import { Coordinate } from '../reducers/asyncActionStatusReducer';

export const LOAD = 'LOAD WEATHER';
export type LoadAction = AsyncAction<typeof LOAD, LoadingData>;

export function loadAction(coordinates:Coordinate) {
  return async(LOAD, loadingService.load);
}
