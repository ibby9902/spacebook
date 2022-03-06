import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileStack from './navigation/ProfileStack';
import FriendsStack from './navigation/FriendsStack';
import SearchStack from './navigation/SearchStack';
import getId from '../functions/getId';
import theme from '../assets/theme';
import CustomActivityIndicator from './common/CustomActivityIndicator';
import SettingsStack from './navigation/SettingsStack';

const Tab = createBottomTabNavigator();

const Main = (props) => {
  const [id, setId] = useState(0);
  // get our id on first mount so we can pass it to Profile
  useState(() => {
    getId().then((res) => setId(parseInt(res)));
  }, []);

  if (id !== 0) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: theme.DARK_GREY,
            borderTopColor: 'transparent',
          },
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'ProfileStack') {
              iconName = 'person-circle-outline';
              color = focused ? theme.TEXT_WHITE : theme.TEXT_GREY;
            } else if (route.name === 'SearchStack') {
              iconName = 'search-outline';
              color = focused ? theme.TEXT_WHITE : theme.TEXT_GREY;
            } else if (route.name === 'Friends') {
              iconName = 'people-outline';
              color = focused ? theme.TEXT_WHITE : theme.TEXT_GREY;
            } else if (route.name === 'SettingsStack') {
              iconName = 'cog';
              color = focused ? theme.TEXT_WHITE : theme.TEXT_GREY;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} initialParams={{ id }} />
        <Tab.Screen name="SearchStack" component={SearchStack} options={{ headerShown: false }} />
        <Tab.Screen name="Friends" component={FriendsStack} options={{ headerShown: false, unmountOnBlur: true }} initialParams={{ id }} />
        {/* pass a function that navigates to login to the settings screen as a param (to be used to logout) */}
        <Tab.Screen name="SettingsStack" component={SettingsStack} options={{ headerShown: false }} initialParams={{ navigation: props.navigation }} />
      </Tab.Navigator>
    );
  } else {
    return (
      <CustomActivityIndicator />
    );
  }
};

export default Main;
