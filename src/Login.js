import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MKTextFild, MKColor, MKButton} from 'react-native-material-kit';

const loginButton = MKButton.coloredButton()
          .withText('LOGIN')
          .build();
export default class Login extends React.Component {
  costructor(props){
    super(props);

    this.state = {
      email: '',
      password:'',
        }

  }

  onButtonPress(){
    console.log('Clicked Button!')
  }

  const styles = StyleSheet.create({
    form: {
        paddingBottom:10 ,
        width:200,
    },
    fieldStyles: {
      height: 40,
      color: MKColor.Orange,
      width:200,
    },
    loginButtonArea: {
      marginTop:20,
    }
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  render() {
    const {form, fieldStyles, loginButtonArea, errorMessage } = styles;
    return (
      <View style={styles.container}>
        <Text>Welcome to CRM</Text>
         <MKTextFild
            text ={this.state.email}
            onTextChange={email => this.setState({  email })}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
         />
         <MKTextFild
            text ={this.state.password}
            onTextChange={password => this.setState({  password })}
            textInputStyle={fieldStyles}
            placeholder={'Password...'}
            tintColor={MKColor.Teal}
            password={true}
         />
         <Text style={errorMessage}>
          {this.state.error}
         </Text>
         <View style={loginButtonArea}>
          <loginButton onPress={this.onButtonPress.bind(this)}/>
         </View>
      </View>
    );
  }
}
