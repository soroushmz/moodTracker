import "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";
import React, {useRef} from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import HomeStack from "./home-stack";

const AppContainer = () => {
  const routeName = useRef<string>();
  const navContainer = useRef<NavigationContainerRef>(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navContainer}
        onReady={() =>
          (routeName.current = navContainer.current?.getCurrentRoute?.()?.name)
        }
        onStateChange={() => {
          const currentRouteName = navContainer.current?.getCurrentRoute?.()
            ?.name;
          routeName.current = currentRouteName;
        }}>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppContainer;
