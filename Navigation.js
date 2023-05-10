import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import ChatScreen from "./ChatScreen";
import MapScreen from "./MapScreen";
import GraphScreen from "./GraphScreen";
import HistoryScreen from "./HistoryScreen";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createNativeStackNavigator

function MyStack(){
    return(
        <HomeStackNavigator.Navigation
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="ChatScreen"
                component={ChatScreen}
            />
            
        </HomeStackNavigator.Navigation>
    )
}

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="car" color={color} size={size} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name="Map" 
                component={MapScreen}
                options={{
                    tabBarLabel:'Taller',
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="map-marker" size={size} color={color} /> 
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name="History" 
                component={HistoryScreen}
                options={{
                    tabBarLabel:'Historial',
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="history" size={size} color={color} /> 
                    ),
                    tabBarBadge: 3,
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name="Graphs" 
                component={GraphScreen}
                options={{
                    tabBarLabel:'Gráficos',
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="chart-timeline-variant" size={size} color={color} /> 
                    ),
                    tabBarBadge: 3,
                    headerShown:false
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}