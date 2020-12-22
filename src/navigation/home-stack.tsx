import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../pages/home/index";
import Profile from "../pages/profile/index";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
