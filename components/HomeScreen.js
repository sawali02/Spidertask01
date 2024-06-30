import React from "react";
import { StyleSheet, View ,ImageBackground ,Text, Alert, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



const HomeScreen =({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <ImageBackground
            source ={require('./homescreen/homescreen.jpeg')}
            style={styles.background}>
                <View style={styles.content}>
                <Text style={styles.text}>Cook like a Chef</Text>
                </View>
               
                <View style={styles.buttonContainer}>
                    <TouchableOpacity

                    style={styles.button}
                    onPress={()=> navigation.navigate('')} />
                    <Text style={styles.textbutton}>Get Started</Text>
                </View>
            </ImageBackground>
        </View>
    );
        };
    
const styles =StyleSheet.create({
    container: {
       
      },
      background: {
        
       height:'100%',
       width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
       
        height: 100,
        marginTop:10,
        justifyContent:'center',
        left:10,
        
        marginRight:100
       

       
      },
      text: {
       
        fontSize: 40,
        color: 'white',
        left:10
      },
      buttonContainer: {
        marginTop: 400,
        position: 'absolute',
        bottom:100,
        left: 20,
        right: 20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'black',
        color: 'black'
        
        
      },
      button:{
        borderRadius: 20

      },
      textbutton:{
        fontSize: 20,
        color: 'white',
        borderRadius: 10,
        textAlign: 'center'

      }

});
 

export default HomeScreen;