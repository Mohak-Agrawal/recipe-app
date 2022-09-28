import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {categories, recipes} from '../../data/Data';
import {COLORS, SIZES} from '../../constants/Theme';
import CategoryCard from '../../components/CategoryCard';
import DrawerHeader from '../../components/DrawerHeader';

const CategoryScreen = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <DrawerHeader {...props} title="Category" />
      <View style={styles.container}>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => (
            <View style={styles.grid} key={item.id}>
              <CategoryCard {...props} data={item} onPress={() => {}} />
            </View>
          )}
          numColumns={1}
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
    marginBottom: 10,
    backgroundColor: COLORS.white,
    width: '100%',
  },
});

export default CategoryScreen;
