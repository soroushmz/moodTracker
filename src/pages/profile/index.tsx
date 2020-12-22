import React from "react";
import {View, Text, Button, SafeAreaView} from "react-native";

const Profile = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile Page</Text>
      </View>
      <Button onPress={() => navigation.navigate("Home")} title="Button">
        <Text>Home</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Profile;
