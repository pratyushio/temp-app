import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AvatarStack from "./AvatarStack";

// const groups = [
//   { id: "1", name: "Michael Group", avatar: "https://i.pravatar.cc/100?img=5" },
//   { id: "2", name: "Anna Group", avatar: "https://i.pravatar.cc/100?img=6" },
//   { id: "3", name: "Smith Group", avatar: "https://i.pravatar.cc/100?img=7" },
//   { id: "4", name: "Smith Group" },
// ];

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

export default function MyGroups() {
  return (
    <View>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Groups</Text>
            <Link href="/AddToGroup" asChild>
                <Text style={styles.seeAll}>See All</Text>
            </Link>
        </View>
    
        {/* <FlatList
        horizontal
        data={groups}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <View style={styles.avatarItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.avatarName}>{item.name}</Text>
            </View>
        )}
        /> */}

        <FlatList
        horizontal
        data={groups}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <View style={styles.groupItem}>
                <AvatarStack users={item.users} />
                <Text style={styles.groupName}>{item.name}</Text>
            </View>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
    },

    seeAll: {
        fontSize: 13,
        color: "#6B7280",
    },

    avatarItem: {
        alignItems: "center",
        marginRight: 14,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 4,
    },
    avatarName: {
        fontSize: 12,
    },

    // 
    stackContainer: {
        height: 50,
        width: 120,
        position: "relative",
        marginBottom: 6,
    },
    stackAvatar: {
        position: "absolute",
        width: 48,
        height: 48,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: "#F6FBF8",
    },
    groupItem: {
        marginRight: 18,
        alignItems: "center",
    },
    groupName: {
        fontSize: 12,
        marginTop: 6,
    },
    moreAvatar: {
        backgroundColor: "#E5E7EB",
        justifyContent: "center",
        alignItems: "center",
    },
    moreText: {
        fontSize: 11,
        fontWeight: "600",
        color: "#374151",
    },
});
