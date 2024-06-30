// RecipeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList ,Image } from 'react-native';
import { recipes } from './recipesData';
import { useState } from 'react';

const Recipe = ({ item }) => (
    <View style={styles.recipeContainer}>
      <Image source={item.image} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{item.title}</Text>
      {/* Additional details like ingredients and procedure can be added here */}
    </View>
  );

  const RecipeScreen = () => {
    const [numColumns, setNumColumns] = useState(2);
    return (
      <FlatList
        data={recipes}
        renderItem={({ item }) => <Recipe item={item} />}
        keyExtractor={(item) => item.id}
        numColumns ={numColumns}
        key={numColumns}
        contentContainerStyle ={ styles.listContainer}
      />
    );
  };
  const styles = StyleSheet.create({
    listContainer:{
      paddingHorizontal:8,
      margin: 10
    },
    recipeContainer: {
      flex:1,
      padding: 16,
      
      flexDirection: 'column',
      alignItems: 'center',
    },
    recipeImage: {
      
      borderRadius: 30,
      marginRight: 8,
      marginLeft:20,
      aspectRatio: 5/6
    },
    recipeTitle: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 8,
      textAlign: 'center'
    },
  });
  
  
  
export default RecipeScreen;
