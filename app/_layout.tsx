import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack
      // screenOptions={{
      //   animation: "slide_from_right",
      // }}
    >
      <Stack.Screen name="index"
        options={{
          headerShown: true,
          title: "MyGoalz",
          headerTitleStyle: {
            fontWeight: "bold",
          }
        }}
      />
      <Stack.Screen name="home/index" />
    </Stack>
  );
}
