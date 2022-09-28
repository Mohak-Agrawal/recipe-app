import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import IconButton from '../IconButton';

const SearchHeader = props => {
  const {searchFilterFunction, search} = props;

  const toggle = () => {
    props.navigation.toggleDrawer();
  };

  const EmptyView = () => {
    return (
      <View style={{backgroundColor: 'transparent', height: 32, width: 32}} />
    );
  };

  return (
    <View style={styles.container}>
      <IconButton
        iconName="menu"
        iconSize={24}
        iconColor={COLORS.primary}
        onPress={() => toggle()}
      />

      <TextInput
        placeholder="Search here..."
        style={{
          flex: 1,
          marginHorizontal: 10,
          ...FONTS.body3,
          backgroundColor: COLORS.white,
          color: COLORS.black,
          height: '90%',
          paddingLeft: 10,
          borderRadius: 10,
        }}
        value={search}
        onChangeText={text => searchFilterFunction(text)}
        placeholderTextColor={COLORS.gray}
      />

      <EmptyView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderColor: COLORS.lightGray,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
});

export default SearchHeader;
