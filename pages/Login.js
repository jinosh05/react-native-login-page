import React,{Component} from 'react';
import {View,Image, Text, ImageBackground, TextInput, Button, TouchableOpacity,} from 'react-native';
import styles from './styles';
 
export default class LoginPage extends Component{
constructor(props){
  super(props)
  this.state={
    username:"",
    password:"",
  }
}

validate(){
  const{username,password}=this.state
  if (username=="") {
    alert("Enter Username")
    return false
  }else if (password=="") {
    alert("Enter Password")
    return false
  }else if (username.length<=5) {
    alert('Username must be greater than 5')
  }else if (password.length<=4) {
    alert('Password must be greater than 4')    
  }
return true
}

loginthis(){
if (this.validate()) {
  alert('Login Successful')
}

}


    render() {
      return (
<>

<ImageBackground source={require('../pics/wall.jpg')} style={styles.wall}>
<View style={styles.continer}>
<Image source={require('../pics/logo.png')} style={styles.logo} />

 <View style={styles.up}>
   <Image source={require('../pics/username.png')} style={styles.ic} />
   
   <TextInput
      style={styles.username} placeholderTextColor='black'
      onChangeText={(value)=>this.setState({username:value})}
     placeholder={"Username"} maxLength={20}
    /></View>

<View style={styles.up}>
<Image source={require('../pics/password.png')} style={styles.ic} />
  <TextInput placeholder={"Password"} secureTextEntry={true}
      onChangeText={(value)=>this.setState({password:value})}
 placeholderTextColor='black' maxLength={20} style={styles.username} /></View>

 <View style={styles.login}><Button title="Login" color="#FD470d" onPress={()=>this.loginthis()} /></View>

<View style={styles.reg}>
<View><TouchableOpacity style={styles.buttonStyle}>
<Text style={styles.textStyle} >Forgot Password?</Text></TouchableOpacity></View>
<View><Button title=" Register Free" color="#FD470d" /></View>
</View>
     

</View>
</ImageBackground>
</>
      )
    };
}

