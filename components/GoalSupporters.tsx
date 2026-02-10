import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const supporters = [
  { id: "1", name: "Anna", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: "2", name: "Michael", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: "3", name: "William", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: "4", name: "Smith", avatar: "https://i.pravatar.cc/100?img=4" },
  { id: "5", name: "Anna", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: "6", name: "Michael", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: "7", name: "William", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: "8", name: "Smith", avatar: "https://i.pravatar.cc/100?img=4" },
];

export default function GoalSupporters() {
  return (
    <View>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Goal Supporters</Text>
            <Link href="/AssignGoal" asChild>
            <Text style={styles.seeAll}>See All</Text>
            </Link>
        </View>
    
        <FlatList
            horizontal
            data={supporters}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
            <View style={styles.avatarItem}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <Text style={styles.avatarName}>{item.name}</Text>
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
});
