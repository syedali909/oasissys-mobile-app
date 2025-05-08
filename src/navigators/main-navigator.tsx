import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/home";
import SingIn from "../screen/sing-in";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator, ImageBackground, Text, View } from "react-native";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { useAuth } from "../provider/auth-provider";
import { useMemo } from "react";
import { useAppStore } from "../stores";
import HeaderTitle from "../components/header";
import { taboptions } from "../components/tab-options";
import comment from "../screen/comment";

const Tab = createBottomTabNavigator();

const commentIconLink = "../../assets/settings.png";
const homeIconLink = "../../assets/home.png";
const HomeTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={taboptions(require(homeIconLink))}
    />
    <Tab.Screen
      name="Comments"
      component={comment}
      options={taboptions(require(commentIconLink))}
    />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator<any>();

export default function MainNavigator() {
  const { isUserLogin } = useAuth();
  const { userInfo } = useAppStore();

  const initalRoute = useMemo(
    () => (isUserLogin ? "Home" : "SingIn"),
    [isUserLogin]
  );

  if (userInfo.isLoading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        size={"large"}
        color={"green"}
      />
    );
  }

  const homeScreenOptions = {
    headerTitle: (props) => <HeaderTitle name={userInfo.name} {...props} />,
  };

  return (
    <NavigationContainer key={isUserLogin ? "Home" : "SingIn"}>
      <Stack.Navigator initialRouteName={initalRoute}>
        <Stack.Screen
          options={homeScreenOptions}
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          name="SingIn"
          options={{
            headerShown: false,
          }}
          component={SingIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
