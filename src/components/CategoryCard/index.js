import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../constants/Theme';
import {categories, recipes} from '../../data/Data';

const CategoryCard = ({data}) => {
  const {name, photo_url, id} = data;

  const getRecipeCount = () => {
    const count = recipes.reduce(
      (n, e) => (e.categoryId === id ? n + 1 : n),
      0,
    );

    return count;
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: photo_url}}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{getRecipeCount()} Recipes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: COLORS.lightGray,
  },
  image: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    color: COLORS.black,
    ...FONTS.h3,
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.gray,
    ...FONTS.body5,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default CategoryCard;
