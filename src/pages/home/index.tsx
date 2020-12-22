import React from "react";
import {View, Text, Button} from "react-native";

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <View>
        <Text>Home Page</Text>
      </View>
      <Button onPress={() => navigation.navigate("Profile")} title="Button">
        <Text>Profile</Text>
      </Button>
    </View>
  );
};

export default Home;
