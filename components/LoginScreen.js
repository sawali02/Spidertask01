// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./loginscreenimages/loginimage1.jpeg')} style={styles.image} />
        <Image source={require('./loginscreenimages/loginimage2.jpeg')} style={styles.image} />
        <Image source={require('./loginscreenimages/loginimage3.jpeg')} style={styles.image} />
      </View>
      <View style={styles.subimageContainer}>
      <Image source={require('./loginscreenimages/loginimage4.jpeg')} style={styles.image} />
      <Image source={require('./loginscreenimages/loginimage5.jpeg')} style={styles.image} />
      
      </View>
      <Text style={styles.header}>Elevate your home cooking with our expertly curated recipes!</Text>
      <Text style={styles.subheader}>Welcome back! Select method to log in:</Text>
      

      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.logocontainer} >
      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleLogin}>
        <Ionicons name="logo-google" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleFacebookLogin}>
        <Ionicons name="logo-facebook" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginbuttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: '#fff',
  },
  imageContainer:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 2

  },
  subimageContainer:{
    flex: 1,
    flexDirection: 'row',
    marginBottom: 140

  },
  image:{
    height: 200,
    width: 150,
    padding:10,
    borderRadius:30,
    margin:10,
    marginTop:10,
    marginBottom: 70

  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: '#000'
    
  },
  subheader:{
    fontSize:15,
    color:'#555',
    marginBottom:2
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    height:40,
   marginBottom:2

  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 2,
    borderRadius: 30,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  logocontainer:{
    flex: 1,
    flexDirection: 'row',
     marginTop: 10,
     marginBottom:30

  },
  googleButton: {
    backgroundColor: '#fff',
    borderWidth:2,
    marginRight:10,
    marginBottom: 10,
    marginLeft:10
  },
  facebookButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    marginBottom: 10
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    marginLeft: 10,
  },
  loginbutton: {
    backgroundColor: '#000',
    width:300,
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 50
  },
  loginbuttonText:{
    color: '#fff',
    fontSize: 20,
    borderRadius: 20
  },
  icon: {
    marginRight: 10,
    color: '#000'
  },
});

export default LoginScreen;
