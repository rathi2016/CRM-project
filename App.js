import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './src/Login';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
    
  });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to CRM</Text>
         <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
