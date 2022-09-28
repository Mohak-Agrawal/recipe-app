import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Theme';

const LoadingComp = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={COLORS.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingComp;
