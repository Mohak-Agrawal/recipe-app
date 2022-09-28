import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {recipes} from '../../data/Data';
import {COLORS, SIZES} from '../../constants/Theme';
import IngredientCard from '../../components/IngredientCard';
import BackHeader from '../../components/BackHeader';

const IngredientsScreen = props => {
  const {ingredients, title} = props.route.params;
  console.log(ingredients);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <BackHeader {...props} title={'Ingredients for ' + title} />
      <View style={styles.container}>
        <FlatList
          data={ingredients}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item[0]}
          renderItem={({item, index}) => (
            <View style={styles.grid} key={index}>
              <IngredientCard {...props} data={item} />
            </View>
          )}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
  },
  grid: {
    margin: 3,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    width: '32%',
  },
});

export default IngredientsScreen;
