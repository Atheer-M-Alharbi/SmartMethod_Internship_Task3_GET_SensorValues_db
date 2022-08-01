import { initializeApp } from 'firebase/app'

import {
    getFirestore, collection, addDoc
  } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBOmh0jH5_pFiDh4FN3Y0HAPZUsPY1d95M",
    authDomain: "smartmthodstask.firebaseapp.com",
    projectId: "smartmthodstask",
    storageBucket: "smartmthodstask.appspot.com",
    messagingSenderId: "381303691015",
    appId: "1:381303691015:web:37427cc1dc6e512164d7a2",
    measurementId: "G-9ZHB4RPK5J"
  };

// nitialize firebase
initializeApp(firebaseConfig)

// nitialize services
const database = getFirestore()

// collection refrence
const Ref = collection(database, 'SensorValues')

// add document to collection (sensor value) 
window.addEventListener('load', (e) => {
  const addsensorvalue = document.getElementById('value')
  console.log(addsensorvalue.value)
  addDoc(Ref, {
    SensorValues: addsensorvalue.value,
  })
  
})
