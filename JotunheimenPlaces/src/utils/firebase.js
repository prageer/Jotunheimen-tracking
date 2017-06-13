import { initializeApp } from 'firebase'
import config from '../config'
import DeviceInfo from 'react-native-device-info';

const { Alert } = ReactNative;

const firebaseApp = initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
  storageBucket: config.STORAGE_BUCKET
})

export const personalRef = firebaseApp.database().ref('personal');
export const recordsRef = firebaseApp.database().ref('records/'+DeviceInfo.getUniqueID()+'/');


function getPersonal(actions, cb){
  personalRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({          
          residence: child.val().incorrect_text5,
          level: child.val().level,
          _key: child.key
        });
      });

      actions.initLoad(items);
  });

  
    let count = 0;
    actions.records.filter((item, index)=>{
      const subRecordsRef = firebaseApp.database().ref('records/'+DeviceInfo.getUniqueID()+'/'+item["_key"]+'/');    
      let record_item = {            
        likePoint:item.point
      };

      subRecordsRef.set( record_item, ()=>{ 
        count++; 
        if(count == actions.records.length){

            recordsRef.on('value', (snap) => {
              var items = [];
              snap.forEach((child) => {
                items.push({                  
                  likePoint: child.val().likePoint,
                  _key: child.key
                });
              });

              actions.initRecords(items);
            });
          
        }
      } );
       
      return true;
    })    

    //cb();
}

export function AuthFirebase(actions, cb){  


  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
    } else {
        firebaseApp.auth().signInAnonymously().then(user => {
          // store token
          user.getToken().then(token => {             
            getQuestion(actions) 
          })
        }, (err) => {
          cb();
          Alert.alert(
            config.OFFLINE_ALERT_TITLE,
            config.OFFLINE_ALERT_CNT,
            [
              {text: 'OK', onPress: () => { } },
            ]
          )
          // log error
        });
    }
  }, (err) => {
    cb();
    Alert.alert(
      config.OFFLINE_ALERT_TITLE,
      config.OFFLINE_ALERT_CNT,
      [
        {text: 'OK', onPress: () => { } },
      ]
    )
    // log error
  });
}

export function setRecords(item, deviceId, info){  

  let record_item = {    
    date_time: Math.floor(Date.now() / 1000),    
    info:info,
    _key:item["_key"]
  };

    props.addRecordsOffline(record_item, is_correct, level);
    const subRecordsRef = firebaseApp.database().ref('records/'+deviceId+'/'+item["_key"]+'/');
    subRecordsRef.set( record_item )  
}

export function checkOnLine(actions) {

  connectedRef.on('value', snap => {
    if (snap.val() === true) {
      actions.goOnline();
    } else {
      actions.goOffline();
    }
  })

}