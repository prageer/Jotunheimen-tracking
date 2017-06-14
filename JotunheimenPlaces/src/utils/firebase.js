import { initializeApp } from 'firebase';
import config from '../../config';
import DeviceInfo from 'react-native-device-info';

const firebaseApp = initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
  storageBucket: config.STORAGE_BUCKET
})

//export const personalRef = firebaseApp.database().ref('personal');
//export const recordsRef = firebaseApp.database().ref('records/'+DeviceInfo.getUniqueID()+'/');

function getPersonal(actions, cb){  
}

export function setPersonalToFirebase(info){
  const subRecordsRef = firebaseApp.database().ref('personal/' + DeviceInfo.getUniqueID() + '/');
  subRecordsRef.set( info );
}

export function setSurveyToFirebase(info){
  let dateTime = Math.floor(Date.now() / 1000)
  const subRecordsRef = firebaseApp.database().ref('survey/' + DeviceInfo.getUniqueID() + '/' + dateTime + '/');
  subRecordsRef.set( info );
}

export function setPointToFirebase(info, dateTime){  
  const subRecordsRef = firebaseApp.database().ref('point/' + DeviceInfo.getUniqueID() + '/' + dateTime + '/');
  subRecordsRef.set( info );
}
