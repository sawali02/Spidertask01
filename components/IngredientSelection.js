import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SectionList, FlatList, Button, Image, StyleSheet, TextInput } from 'react-native';
import { ingredientsList } from './data';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

const Stack = createStackNavigator();


// useEffect(() => {
//   // Load the Ionicons font asynchronously
//   async function loadFonts() {
//     await Font.loadAsync({
//       Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
//     });
//   }
//   loadFonts();
// }, []);

// // Use useFonts hook to check if the fonts are loaded
// let [fontsLoaded] = useFonts({
//   Ionicons: Ionicons.font,
// });

// if (!fontsLoaded) {
//   return <Text>Loading...</Text>;
// }


const IngredientSelection = ({ navigation }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState(ingredientsList);


  const openDrawer =() => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  useEffect(() => {
    // Filter ingredients based on searchQuery
    if (searchQuery.trim() === '') {
      setFilteredIngredients(ingredientsList); // Reset to original list if search query is empty
    } else {
      const filtered = ingredientsList.map(section => ({
        ...section,
        data: section.data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      })).filter(section => section.data.length > 0);

      setFilteredIngredients(filtered);
    }
  }, [searchQuery]);

  const handleIngredientPress = (ingredientName) => {
    if (multiSelect) {
      toggleIngredient(ingredientName);
    } else {
      navigation.navigate('RecipeList', { selectedIngredients: [ingredientName] });
    }
  };

  const toggleIngredient = (ingredientName) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredientName)
        ? prev.filter((i) => i !== ingredientName)
        : [...prev, ingredientName]
    );
  };

  const renderIngredient = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleIngredientPress(item.name)}
      style={[styles.ingredientContainer, selectedIngredients.includes(item.name) && styles.selectedContainer]}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={[styles.ingredientText, selectedIngredients.includes(item.name) && styles.selectedText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderSection = ({ section: { title, data } }) => (
    <View style={styles.sectionContainer}>
      <View style={styles.subsection}>
      <Text style={styles.sectionHeader}>{title}</Text>
      <TouchableOpacity onPress={() => console.log('see more pressed')}>
        <Text style ={styles.seeMoreText}>See More</Text>
      </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderIngredient}
        keyExtractor={(item) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
        <Text style={styles.header}>Got a tasty dish in mind?</Text>
        
          
        <View style={styles.searchContainer}>
        <TextInput
        style={styles.searchInput}
        placeholder='Search  new  Ingredients'
        value={searchQuery}
        onChangeText={setSearchQuery}
        />
        
          <Ionicons name="search" size={24} color="#000" style={styles.searchIcon}/>
      
        </View>
        
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Recipes')}>
          <Ionicons name ="restaurant" size ={30} color="#555"  style={styles.icons}/>
          <Text> Recipes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name ="heart" size ={30} color="#555"  style={styles.icons} />
          <Text> favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Recipes')}>
          <Ionicons name ="pizza" size ={30} color="#555"  style={styles.icons} />
          <Text> ingredients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Login')}>
          <Ionicons name ="person" size ={30} color="#555"   style={styles.icons}/>
          <Text> login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SectionList
        sections={filteredIngredients}
        renderItem={() => null}  // Required but unused
        renderSectionHeader={renderSection}
        keyExtractor={(item, index) => item.name + index}
        showsVerticalScrollIndicator={false}
      />
      {multiSelect && (
        <TouchableOpacity
        onPress={() => navigation.navigate('RecipeList', { selectedIngredients })}
        style={styles.whiteButton}
      >
        <Text style={styles.whiteButtonText}>Find Recipes</Text>
      </TouchableOpacity>
    )}
    <TouchableOpacity
      onPress={() => setMultiSelect(!multiSelect)}
      style={styles.whiteButton}
    >
      <Text style={styles.whiteButtonText}>Select {multiSelect ? 'one ingredient' : 'more ingredients'}</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 6,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 8,
    
    height:250,
  },

  header: {
    fontSize: 28,
    fontWeight: '600',
    // fontFamily: 'italic',
    color: '#000',
    marginTop: 40,
    marginBottom: 10
  },
  searchContainer: {
    flexDirection: 'row',
   alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    height:50,
    marginBottom: 10,
    justifyContent: 'space-around',
    borderWidth: 2
    
   
    
   
  },
  searchInput: {
    fontSize: 18,
   
    height: 50,
    alignItems:'center',
    verticalAlign:'middle',
    justifyContent: 'flex-end',
    marginLeft: 2
    
  },
  searchIcon:{
    padding: 10,
    marginRight:2,
    justifyContent: 'flex-end'
    
  },
 
icons:{
  
  alignItems:'center',
  alignContent:'center',
  justifyContent: 'center',
 

  
  borderColor: '#777',
  
  borderRadius: 40,
  color: 'black'
},
  headerTextContainer: {
    flexDirection: 'column',
    alignItems: 'start',
    padding:15
   
  },
  subHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom:40
  },
  
  inputText:{
    flexDirection: 'row',
   

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    backgroundColor: '#000',
    borderRadius: 40,
    borderWidth:2

  },
  headerButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    
    textAlign:'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  headerButtonText: {
    fontSize: 18,
    color: '#000',
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent:'space-around'
  },
 

  sectionContainer: {
    // marginBottom: 14,
    
    
  },
  subsection:{
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-between',
    marginBottom:2
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginLeft:10,
    
  },
  seeMoreText:{
    fontSize: 16,
    color: 'green',
    marginRight: 10,
    borderBottomColor: '#000'
    
  },
  ingredientContainer: {
    flexDirection: 'column',
    alignItems: 'left',
    marginRight: 4,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 10
  },
  image: {
    width: 175,
    height: 215,
    marginBottom: 4,
    borderRadius: 20,
  },
  ingredientText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  selectedContainer: {
    backgroundColor: '#ddd',
  },
  selectedText: {
    fontWeight: 'bold',
    color: 'green',
  },
  whiteButton: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 5,
    margin:20
    
  },
  whiteButtonText: {
    color:'#fff',
    fontSize: 16
  }
});

export default IngredientSelection;
