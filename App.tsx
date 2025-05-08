import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SingIn from "./src/screen/sing-in";
import { AuthProvider } from "./src/provider/auth-provider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigators/main-navigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
