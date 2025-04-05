import { Tabs } from 'expo-router';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import { icons } from '~/constants';

function TabIcon({ focused, source }: { source: ImageSourcePropType; focused: boolean }) {
  return (
    <View
      className={` flex flex-row items-center justify-center rounded-full  ${focused ? 'bg-green-300' : ''}`}>
      <View
        className={`h-12 w-12 items-center justify-center rounded-full ${focused ? 'bg-general-400' : ''}`}>
        <Image source={source} tintColor="white" resizeMode="contain" className="h-7 w-7" />
      </View>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        },

        tabBarStyle: {
          backgroundColor: '#333333',
          borderRadius: 50,
          paddingBottom: 0,
          overflow: 'hidden',
          marginHorizontal: 20,
          marginBottom: 20,
          paddingTop: 0,
          height: 60,

          position: 'absolute',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />,
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: 'Rides',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />,
        }}
      />
    </Tabs>
  );
}
