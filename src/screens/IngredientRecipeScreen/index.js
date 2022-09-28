import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackHeader from '../../components/BackHeader';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import ProductCard from '../../components/ProductCard';
import {recipes} from '../../data/Data';
import LoadingComp from '../../components/LoadingComp';

const IngredientRecipeScreen = props => {
  const {name, id, imageUri} = props.route.params;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const data_filter = recipes.filter(function (element) {
      return element.ingredients.some(function (subElement) {
        return subElement[0] === id;
      });
    });
    setData(data_filter);
    setLoading(false);
  }, []);

  if (loading) return <LoadingComp />;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <BackHeader {...props} title={name} />
      <View style={styles.container}>
        <Image
          source={{uri: imageUri}}
          style={{
            width: '100%',
            height: SIZES.height / 3,
            borderBottomWidth: 1.5,
            borderColor: COLORS.gray,
          }}
        />
        <Text style={{...FONTS.h3, color: COLORS.black, marginVertical: 10}}>
          Recipes with {name}
        </Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
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

export default IngredientRecipeScreen;
