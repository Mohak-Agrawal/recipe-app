import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';

const Header = ({titleStyle, containerStyle, leftIcon, rightIcon, title}) => {
  const EmptyView = () => {
    return (
      <View style={{backgroundColor: 'transparent', height: 32, width: 32}} />
    );
  };

  return (
    <View style={[styles.container, {...containerStyle}]}>
      {leftIcon ? leftIcon : <EmptyView />}
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.black,
          width: 150,
          textAlign: 'center',
          ...titleStyle,
        }}
        numberOfLines={1}>
        {title}
      </Text>
      {rightIcon ? rightIcon : <EmptyView />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderColor: COLORS.lightGray,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
});

export default Header;
