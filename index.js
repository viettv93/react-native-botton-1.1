/**
 * @format
 */

import React from 'react';
import { Image } from 'react-native';
import { AppRegistry } from 'react-native';
import Screen1 from './src/screen1'
import Screen2 from './src/screen2'
import Screen3 from './src/screen3'
import Screen4 from './src/screen4'
import Screen5 from './src/screen5'
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Screen1" component={Screen1} options={{
                title: 'Trang chủ', tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('./src/images/home_selected.png')} />
                        )
                    else

                        return (
                            <Image source={require('./src/images/home.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }} />
            <Tab.Screen name="Screen2" component={Screen2} options={{ title: 'Thông báo' }} />
            <Tab.Screen name="Screen3" component={Screen3} options={{ title: 'Lịch sử' }} />
            <Tab.Screen name="Screen4" component={Screen4} options={{ title: 'Cài đặt' }} />
        </Tab.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Screen5" component={Screen5} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}




AppRegistry.registerComponent(appName, () => App);
