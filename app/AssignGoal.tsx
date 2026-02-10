import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const users = [
  { id: "u1", avatar: "https://i.pravatar.cc/100?img=1", name: "Anna" },
  { id: "u2", avatar: "https://i.pravatar.cc/100?img=2", name: "Michael" },
  { id: "u3", avatar: "https://i.pravatar.cc/100?img=3", name: "William" },
  { id: "u4", avatar: "https://i.pravatar.cc/100?img=4", name: "Smith" },
  { id: "u5", avatar: "https://i.pravatar.cc/100?img=5", name: "Thomas" },
];

export default function AssignGoalScreen() {
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <View style={styles.screen}>
      <SearchBar value={search} onChangeText={setSearch} />

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Image source={{ uri: item.avatar }} style={styles.singleAvatar} />
              <Text style={styles.rowText}>{item.name}</Text>
            </View>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Assign</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F6FBF8",
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  
  singleAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
  rowText: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: "500",
    flexShrink: 1,
  },

  primaryButton: {
    backgroundColor: "#B7E1C7",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
  },
  primaryButtonText: {
    fontWeight: "600",
    color: "#065F46",
  },
});
