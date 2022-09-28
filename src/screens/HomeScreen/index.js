import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import ProductCard from '../../components/ProductCard';
import {recipes} from '../../data/Data';
import {COLORS, SIZES} from '../../constants/Theme';
import DrawerHeader from '../../components/DrawerHeader';

const HomeScreen = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <DrawerHeader {...props} title="Home" />
      <View style={styles.container}>
        <FlatList
          data={recipes}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.recipeId}
          renderItem={({item, index}) => (
            <View style={styles.grid} key={index}>
              <ProductCard {...props} data={item} />
            </View>
          )}
          numColumns={2}
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
    width: '48%',
  },
});

export default HomeScreen;
