// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import IngredientSelection from './components/IngredientSelection'; 
import RecipeList from './components/RecipeList'; 
import CustomDrawerContent from './components/CustomeDrawerContent';
import LoginScreen from './components/LoginScreen';
import { recipes } from 'components/recipesData';
import Recipes from './components/Recipes';
import RecipeScreen from './components/Recipes';
import HomeScreen from './components/HomeScreen';



const Stack = createStackNavigator();

// const IngredientStack 
const App = () => {
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
      />
      <Stack.Screen
        name="IngredientSelection"
        component={IngredientSelection}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="RecipeList"
        component={RecipeList}
        // options={{ headerShown: false}}
        
      />
      <Stack.Screen
       name="Login" 
       component={LoginScreen}
      //  options={{headerShown: false}} 
      />

       <Stack.Screen
       name = "Recipes"
       component={RecipeScreen}
       />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
};



export default App;


