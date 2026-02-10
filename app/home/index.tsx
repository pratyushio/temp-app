import { Link } from "expo-router";
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/addToGroup"}>A2G</Link>
      <Link href={"/assignGoal"}>Goal</Link>
    </View>
  )
}
