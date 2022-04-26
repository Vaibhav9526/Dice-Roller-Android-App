import DiceRollHome from "./src/screens/DiceRollHome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiceRoll from "./src/screens/DiceRoll";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={DiceRollHome}
          options={{ title: "Dice Roller" }}
        />
        <Stack.Screen name="Dice Roll" component={DiceRoll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
