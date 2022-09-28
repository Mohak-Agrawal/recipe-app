import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RecipeScreen = props => {
  const {title, photosArray, category, description, ingredients, time} =
    props.route.params.data;
  return (
    <>
      <Header
        containerStyle={{
          position: 'absolute',
          backgroundColor: null,
          top: Platform.OS == 'ios' ? 50 : 0,
          zIndex: 99,
          borderBottomWidth: 0,
        }}
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
      <ScrollView style={{backgroundColor: COLORS.white}}>
        <View style={styles.container}>
          <View style={styles.sliderContainer}>
            <Swiper activeDotColor={COLORS.white}>
              {photosArray.map(item => (
                <View style={styles.slide} key={item}>
                  <Image
                    source={{uri: item}}
                    resizeMode="cover"
                    style={styles.sliderImage}
                  />
                </View>
              ))}
            </Swiper>
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text
            style={[
              styles.subtitle,
              {textTransform: 'uppercase', color: COLORS.primary},
            ]}>
            {category}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginVertical: 10,
            }}>
            <Icon name={'alarm'} color={COLORS.black} size={18} />
            <Text style={{...FONTS.h4, color: COLORS.black, marginLeft: 5}}>
              {time} minutes
            </Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            activeOpacity={SIZES.opacity}
            onPress={() =>
              props.navigation.navigate('Ingredients', {ingredients, title})
            }>
            <Text style={styles.btnText}>View Ingredients</Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.subtitle,
              {...FONTS.body4, textAlign: 'center', width: '90%'},
            ]}>
            {description}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  sliderContainer: {
    height: SIZES.height / 3,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    alignSelf: 'center',
    marginTop: 10,
  },
  subtitle: {
    ...FONTS.h3,
    color: COLORS.black,
    alignSelf: 'center',
    marginTop: 5,
  },
  btn: {
    width: '80%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1.5,
    marginVertical: 10,
  },
  btnText: {
    ...FONTS.h4,
    color: COLORS.primary,
  },
});

export default RecipeScreen;
