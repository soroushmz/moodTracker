import "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeStack from "./home-stack";

const AppNavContainer = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavContainer;
