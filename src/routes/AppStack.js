import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyDrawer from './Drawer';
import RecipeScreen from '../screens/RecipeScreen';
import IngredientsScreen from '../screens/IngredientsScreen';
import IngredientRecipeScreen from '../screens/IngredientRecipeScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={MyDrawer} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Ingredients" component={IngredientsScreen} />
      <Stack.Screen
        name="IngredientRecipe"
        component={IngredientRecipeScreen}
      />
    </Stack.Navigator>
  );
}

export default function AppStack() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
