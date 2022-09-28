import React from 'react';

import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import Header from '../Header';
import IconButton from '../IconButton';

const DrawerHeader = props => {
  const {title} = props;
  const toggle = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <Header
      title={title}
      leftIcon={
        <IconButton
          iconName={'menu'}
          iconSize={24}
          iconColor={COLORS.primary}
          onPress={() => {
            toggle();
          }}
        />
      }
    />
  );
};

export default DrawerHeader;
