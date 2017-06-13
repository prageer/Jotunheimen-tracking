import {
  SET_SURVEY
} from './ActionTypes';

/**
 * Set Survey
 * @return {json}
 */
export function setSurvey(surveyInfo) {
  return {
    type: SET_SURVEY,
    surveyInfo
  };
}
