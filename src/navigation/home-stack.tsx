import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../pages/home/index";
import Profile from "../pages/profile/index";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: "Home"}} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
