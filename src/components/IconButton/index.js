import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({
  buttonContainerStyle,
  disabled,
  iconName,
  iconColor,
  iconSize,
  badge,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, {...buttonContainerStyle}]}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}>
      <Icon
        name={iconName}
        color={iconColor ? iconColor : COLORS.primary}
        size={iconSize ? iconSize : 24}
      />
      {badge ? (
        <View style={styles.badgeContainer}>
          <Text style={{...FONTS.h5, color: COLORS.white}}>{badge}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: COLORS.lightGray,
  },
  badgeContainer: {
    backgroundColor: COLORS.warning,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    top: -5,
    right: -5,
    height: 18,
    width: 18,
  },
});

export default IconButton;
