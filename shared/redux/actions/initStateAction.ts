import { LoadingData, asyncStorageService } from '../services/asyncStorageService';
import { async, AsyncAction } from './asyncAction';

export const LOAD = 'INIT';
export type InitAction = AsyncAction<typeof LOAD, LoadingData>;

export function initAction() {
  return async(LOAD, asyncStorageService.init);
}
