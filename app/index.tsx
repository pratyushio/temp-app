import Carousel from "@/components/Carousel";
import GoalSupporters from "@/components/GoalSupporters";
import MyGroups from "@/components/MyGroups";
import ProfileBar from "@/components/ProfileBar";
import { Link } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function GoalScreen() {
  return (
    <ScrollView style={styles.container}>

      <ProfileBar />
      
      <Carousel />

      {/* Buttons */}
      <View style={styles.buttons}>
        <Link href="/AssignGoal" asChild>
          <Pressable style={styles.btn}>
            {/* <Text style={styles.buttonText}>A</Text> */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/811/811476.png",
              }}
              style={styles.btnimg}
            />
          </Pressable>
        </Link>
        
        <Link href="/AddToGroup" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Add To Group</Text>
          </Pressable>
        </Link>

        <Link href="/AssignGoal" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Assign Goal</Text>
          </Pressable>
        </Link>
      </View>

      <GoalSupporters />

      <MyGroups />

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  // C
  container: {
    flex: 1,
    backgroundColor: "#F6FBF8",
    padding: 16,
  },

  // top
   header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    gap: 24,
  },
  profileTag: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.8,
    borderColor: "#d2f1e8",
    borderRadius: 200,
    // width: 200,
    maxWidth: "60%",
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 200,
    marginRight: 10,
  },
  profileTextContainer: {
    flexShrink: 1,
  },
  profileName: {
    fontWeight: "600",
    fontSize: 14,
  },
  profileMeta: {
    fontSize: 12,
    color: "#6B7280",
  },

  // buttons
  buttons: {
    flexDirection: "row",
    // gap: 16,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "ABD4B7",
    padding: 4,
    flex: 1,
  },
  btnimg: {
    height: 36,
    width: 36,
  },
  button: {
    backgroundColor: "#9AC7B2", // #ABD4B7
    padding: 16,
    flex: 3,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#065F46",
    fontWeight: "600",
  },
});
