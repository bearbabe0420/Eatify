import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { AppProvider } from "./context/AppContext"

// Screens
import HomeScreen from "./screens/HomeScreen"
import RandomizeScreen from "./screens/RandomizeScreen"
import HistoryScreen from "./screens/HistoryScreen"
import LogMealScreen from "./screens/LogMealScreen"
import DashboardScreen from "./screens/DashboardScreen"

// Theme
import { colors } from "./theme"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline"
                } else if (route.name === "Randomize") {
                  iconName = focused ? "shuffle" : "shuffle-outline"
                } else if (route.name === "History") {
                  iconName = focused ? "time" : "time-outline"
                } else if (route.name === "Log Meal") {
                  iconName = focused ? "restaurant" : "restaurant-outline"
                } else if (route.name === "Dashboard") {
                  iconName = focused ? "stats-chart" : "stats-chart-outline"
                }

                return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: colors.primary,
              tabBarInactiveTintColor: "gray",
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Randomize" component={RandomizeScreen} />
            <Tab.Screen name="Log Meal" component={LogMealScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  )
}
