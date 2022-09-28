import React from 'react';

import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import Header from '../Header';
import IconButton from '../IconButton';

const BackHeader = props => {
  const {title, iconName} = props;
  return (
    <Header
      title={title}
      leftIcon={
        <IconButton
          iconName={'chevron-left'}
          iconSize={24}
          iconColor={COLORS.primary}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      }
    />
  );
};

export default BackHeader;
