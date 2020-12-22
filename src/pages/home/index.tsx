import React from "react";
import {View, Text, Button, SafeAreaView} from "react-native";

const Home = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Page</Text>
      </View>
      <Button onPress={() => navigation.navigate("Profile")} title="Button">
        <Text>Profile</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Home;
