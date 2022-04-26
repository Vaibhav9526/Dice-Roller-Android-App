import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import dice_default from "../../assets/Dice Image/dice-default.png";
import dice_1 from "../../assets/Dice Image/dice-1.png";
import dice_2 from "../../assets/Dice Image/dice-2.png";
import dice_3 from "../../assets/Dice Image/dice-3.png";
import dice_4 from "../../assets/Dice Image/dice-4.png";
import dice_5 from "../../assets/Dice Image/dice-5.png";
import dice_6 from "../../assets/Dice Image/dice-6.png";
import React, { useState } from "react";
const DiceRoll = () => {
  const [Uri, setUri] = useState(dice_default);
  const [Number, setNumber] = useState("DICE ROLLER");

  const MyNum = () => {
    let RollNum = Math.floor(Math.random() * 6) + 1;
    switch (RollNum) {
      case 1:
        setUri(dice_1);
        setNumber("ONE");
        break;
      case 2:
        setUri(dice_2);
        setNumber("TWO");
        break;
      case 3:
        setUri(dice_3);
        setNumber("THREE");
        break;
      case 4:
        setUri(dice_4);
        setNumber("FOUR");
        break;
      case 5:
        setUri(dice_5);
        setNumber("FIVE");
        break;
      case 6:
        setUri(dice_6);
        setNumber("SIX");
        break;

      default:
        setUri(dice_default);
    }
  };
  return (
    <View style={styles.dice_container}>
      <Text style={styles.dice_text_container}>{Number}</Text>
      <View>
        <Image source={Uri} style={styles.dice_image} />
      </View>
      <View>
        <TouchableOpacity onPress={MyNum}>
          <Text style={styles.button}>ROLL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiceRoll;

const styles = StyleSheet.create({
  dice_container: {
    flex: 1,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9B2226",
  },
  dice_text_container: {
    fontSize: 40,
    color: "#03071e",
    backgroundColor: "#ffba08",
    padding: 10,
    borderRadius: 16,
  },
  dice_image: {
    marginVertical: 50,
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: "#99d98c",
    color: "#001219",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 16,
    fontSize: 40,
  },
});
