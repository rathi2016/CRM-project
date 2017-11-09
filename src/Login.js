import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MKTextFild, MKColor, MKButton} from 'react-native-material-kit';
export default class App extends React.Component {
  costructor(props){
    super(props);

    this.state = {
      email: '',
      password:'',
        }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to CRM</Text>
         <MKTextFild
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
