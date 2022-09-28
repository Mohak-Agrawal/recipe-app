import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoryScreen from '../screens/CategoryScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS} from '../constants/Theme';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: COLORS.primary,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color}) => (
            <Icon name="home-variant" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          drawerLabel: 'Categories',
          drawerIcon: ({color}) => (
            <Icon name="view-list" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          drawerLabel: 'Search',
          drawerIcon: ({color}) => (
            <Icon name="magnify" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
