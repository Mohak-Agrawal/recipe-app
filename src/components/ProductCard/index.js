import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import {categories} from '../../data/Data';

const ProductCard = ({data, navigation}) => {
  const {title, photo_url, categoryId} = data;

  const getCategory = () => {
    const item = categories.find(item => item.id === categoryId);
    return item.name;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={SIZES.opacity}
      onPress={() =>
        navigation.navigate('Recipe', {
          data: {...data, category: getCategory()},
        })
      }>
      <Image
        source={{uri: photo_url}}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{getCategory()}</Text>
    </TouchableOpacity>
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
    height: 130,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
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

export default ProductCard;
