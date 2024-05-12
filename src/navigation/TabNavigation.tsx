import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../presentation/screens/home-screen/HomeScreen";
import { SearchScreen } from "../presentation/screens/search-screen/SearchScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { TabBarComponent } from "./TabBarComponent";
import { FavoriteScreen } from "../presentation/screens/favorite-screen/FavoriteScreen";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <Tab.Navigator
            tabBar={props => <TabBarComponent {...props}/>}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color}/>
                    ),
                  
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarItemStyle: {alignSelf: 'center'},
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" size={size} color={color}/>
                    ),
                 
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarItemStyle: {alignSelf: 'center'},
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color}/>
                    ),
                 
                }}
            />
        </Tab.Navigator>
    )
}
