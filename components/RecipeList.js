import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { recipes } from './recipesData';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {Alert} from 'react-native';


const RecipeList = ({ route, navigation }) => {
  const { selectedIngredients } = route.params;

  // Function to fetch recipes based on selected ingredients
  const filteredRecipes = recipes.filter((recipe) =>
    selectedIngredients.every((ingredient) => recipe.ingredients.includes(ingredient))
  );

  const renderRecipe = ({ item }) => (
    <View style={styles.recipeContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground source={item.image} style={styles.recipeImage} imageStyle={styles.imageStyle}>
          <Text style={styles.recipeTitleOverlay}>{item.title}</Text>
        </ImageBackground>
      </View>
      <Text style={styles.recipeProcedureTitle}>Procedure:</Text>
      <FlatList
        data={item.procedure}
        renderItem={({ item }) => <Text style={styles.recipeProcedure}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  const handleFavouritePress =() => {
    Alert.alert('Notification' , 'added to favourites');
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        
      <Text style={styles.header}>Recipes with {selectedIngredients.join(', ')}</Text>
      
      <TouchableOpacity style={styles.heartIconContainer} onPress={handleFavouritePress}>
        <Ionicons name="heart" size={30}  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.heartIconContainer} onPress={''}>
        <Ionicons name ="share" size={30} />
      </TouchableOpacity>
      
      </View>
      <FlatList
        data={filteredRecipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#fff',
    
    borderRadius: 8,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
  },
  
  header:{
    fontSize:24,
    fontWeight:'bold'
  },
  heartIconContainer:{
    color: '#fff',
    backgroundColor: '#fff',
    borderwidth: 1
    
    

  },
  recipeContainer: {
    marginBottom: 16,
  },
  imageContainer: {
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 8,
    marginTop: 20,
  },
  recipeImage: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end', 
    
  },
  imageStyle: {
    borderRadius: 20,
  },
  recipeTitleOverlay: {
    color: 'white',
    padding: 2,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 0.1
    
  },
  recipeProcedureTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 6,
    color: '#000',
    
  },
  recipeProcedure: {
    fontSize: 18,
    
    color: '#000',
    
   lineHeight: 23,
   

  },
});

export default RecipeList;
