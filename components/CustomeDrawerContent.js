// // CustomDrawerContent.js

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import IngredientSelection from './IngredientSelection';

// const CustomDrawerContent = ({ navigation }) => {
//   const navigateToScreen = (IngredientSelection) => {
//     navigation.navigate(CustomDrawerContent);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Settings')}>
//         <Text style={styles.drawerItemText}>Settings</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('About')}>
//         <Text style={styles.drawerItemText}>About</Text>
//       </TouchableOpacity>
//       {/* Add more items as needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   drawerItem: {
//     marginBottom: 20,
//   },
//   drawerItemText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default CustomDrawerContent;
