import AvatarStack from "@/components/AvatarStack";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const groupUsers = [
  { id: "u1", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: "u2", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: "u3", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: "u4", avatar: "https://i.pravatar.cc/100?img=4" },
  { id: "u5", avatar: "https://i.pravatar.cc/100?img=5" },
];

const groups = [
  {
    id: "g1",
    name: "Michael Group",
    users: groupUsers,
  },
  {
    id: "g2",
    name: "Anna Group",
    users: groupUsers.slice(0, 3),
  },
  {
    id: "g3",
    name: "Smith Group",
    users: groupUsers,
  },
  {
    id: "g4",
    name: "Michael Group",
    users: groupUsers,
  },
];

export default function AddToGroupScreen() {
  const [search, setSearch] = useState("");
  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.screen}>
      <SearchBar value={search} onChangeText={setSearch} />

      <FlatList
        data={filteredGroups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <AvatarStack users={item.users} />
              <Text style={styles.rowText}>{item.name}</Text>
            </View>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Add</Text>
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

  singleAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
