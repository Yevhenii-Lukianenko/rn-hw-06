import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../../Screens/auth/LoginScreen/LoginScreen";
import { RegistrationScreen } from "../../Screens/auth/RegistrationScreen/RegistrationScreen";
import { Home } from "../../Screens/Home/Home";
import { MapScreen } from "../../Screens/MapScreen/MapScreen";
import { CommentsScreen } from "../../Screens/CommentsScreen/CommentsScreen";

const MainStack = createStackNavigator();

export const Main = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen
        name="Map"
        component={MapScreen}
        options={secondaryOptions}
      />
      <MainStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={secondaryOptions}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

const secondaryOptions = {
  headerShown: true,
  headerStyle: { borderBottomWidth: 1 },
  headerTitleStyle: {
    color: "#212121",
    fontSize: 17,
    fontWeight: 500,
  },
  headerTitleAlign: "center",
};
