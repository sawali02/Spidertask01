import React from "react";
import { StyleSheet, View ,ImageBackground ,Text, Alert, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons'



const HomeScreen =({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <ImageBackground
            source ={require('./homescreen/homescreen2.jpeg')}
            style={styles.background}>
                <View style={styles.content}>
                <Text style={styles.text}>Cook like a Chef</Text>
                <Text style={styles.subtext}>Find the best food recipes</Text>
                </View>
               
                <View style={styles.buttonContainer}>
                    <TouchableOpacity

                    style={styles.button}
                    onPress={()=> navigation.navigate('IngredientSelection')} >
                    <Text style={styles.textbutton}>Get Started
                      <MaterialIcons name="double-arrow" size={26} color="black" style={styles.icon} />
                    </Text>
                    </TouchableOpacity>
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
       
        height: 200,
        marginTop:10,
        
        left:10,
        
        marginRight:100
       

       
      },
      text: {
       
        fontSize: 50,
        color: 'white',
        left:10
      },
      subtext:{
        color: 'white',
        fontSize: 22,
        marginLeft: 10
      },
      buttonContainer: {
        marginTop: 400,
        marginLeft:40,
        position: 'absolute',
        bottom:100,
        left: 20,
        right: 20,
        padding: 10,
        borderRadius: 80,
        backgroundColor: 'white',
        color: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'space-around',
        width: '60%'
        
        
      },
      button:{
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      },
      textbutton:{
        fontSize: 20,
        color: 'black',
        borderRadius: 10,
        textAlign: 'center'

      },
      icon: {
        justifyContent: 'center',
        alignItems: 'center'
      }

});
 

export default HomeScreen;