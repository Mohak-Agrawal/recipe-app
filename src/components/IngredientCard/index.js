import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import {ingredients} from '../../data/Data';

const IngredientCard = ({data, navigation}) => {
  const getImage = () => {
    const item = ingredients.find(item => item.ingredientId === data[0]);
    return item.photo_url;
  };
  const getCategory = () => {
    const item = ingredients.find(item => item.ingredientId === data[0]);
    return item.name;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={SIZES.opacity}
      onPress={() =>
        navigation.navigate('IngredientRecipe', {
          name: getCategory(),
          id: data[0],
          imageUri: getImage(),
        })
      }>
      <Image
        source={{uri: getImage()}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{getCategory()}</Text>
      <Text style={styles.subtitle}>{data[1]}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius: 50,
  },
  title: {
    color: COLORS.black,
    ...FONTS.h4,
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

export default IngredientCard;
