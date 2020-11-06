//@refresh state 
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native=community/async-storage'
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDX-1Zg_CjM_KYUER-2_rc0JLa8o8VqL8w",
  authDomain: "telement-jam.firebaseapp.com",
  databaseURL: "https://telement-jam.firebaseio.com",
  projectId: "telement-jam",
  storageBucket: "telement-jam.appspot.com",
  messagingSenderId: "711114713642",
  appId: "1:711114713642:web:3af641faf41a42e376f153"
};

if (firebase.app.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

YellowBox.ignoreWarnings(['Setting a timer for a long period of time]')

export default function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    readUser()
  }, [])

  async function readUser() {
    const user = await AsyncStorage.getItem('user')

  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
