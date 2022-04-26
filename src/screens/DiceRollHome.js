import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const DiceRollHome = ({ navigation }) => {
  return (
    <View style={styles.Home_container}>
      <Text style={styles.Text_container}>WELCOME TO DICE ROLLER</Text>
      <View>
        <Image
          source={require("../../assets/HomeImage.png")}
          style={styles.banner_Image}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Dice Roll");
          }}
        >
          <Text style={styles.button}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiceRollHome;

const styles = StyleSheet.create({
  Home_container: {
    flex: 1,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001219",
  },
  Text_container: {
    fontSize: 25,
    color: "#03071e",
    backgroundColor: "#ffba08",
    padding: 10,
    borderRadius: 16,
  },
  banner_Image: {
    marginVertical: 50,
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: "#71a5de",
    color: "#eaf4ff",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 16,
    fontSize: 40,
  },
});
