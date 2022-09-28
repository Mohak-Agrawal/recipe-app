import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../components/ProductCard';
import {recipes} from '../../data/Data';
import {COLORS, SIZES} from '../../constants/Theme';
import SearchHeader from '../../components/SearchHeader';

const SearchScreen = props => {
  const [arrayholder, setArrayholder] = useState([]);
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(recipes);
    setArrayholder(recipes);
  }, []);

  const searchData = text => {
    const newData = arrayholder.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setData(newData);
    setText(text);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <SearchHeader
        searchFilterFunction={searchData}
        search={text}
        {...props}
      />
      <View style={styles.container}>
        <FlatList
          data={data}
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

export default SearchScreen;
