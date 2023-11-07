import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {
        ['user', 'clinic', 'delivery'].map((category) => (
        <Pressable
          key={category}
          style={styles.button}
          onPress={() => navigation.navigate('ListScreen', { category: category.toLowerCase(), title: category })}
        >
          <Text style={styles.text}>{category}</Text>
        </Pressable>
      ))
      
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#329998',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});