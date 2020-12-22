import React from "react";
import {View, Text, Button} from "react-native";

const Profile = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <View>
        <Text>Profile Page</Text>
      </View>
      <Button onPress={() => navigation.navigate("Home")} title="Button">
        <Text>Home</Text>
      </Button>
    </View>
  );
};

export default Profile;
