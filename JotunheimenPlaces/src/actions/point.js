import {
  SET_POINT
} from './ActionTypes';

/**
 * Add Points
 * @return {json}
 */
export function setPoint(pointItem) {
  return {
    type: SET_POINT,
    pointItem
  };
}
