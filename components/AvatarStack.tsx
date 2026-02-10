import { Image, StyleSheet, Text, View } from 'react-native';

type User = {
  id: string;
  avatar: string;
  name?: string;
};
type Group = {
  id: string;
  name: string;
  users: User[];
};

const groupUsers: User[] = [
  { id: "u1", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: "u2", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: "u3", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: "u4", avatar: "https://i.pravatar.cc/100?img=4" },
  { id: "u5", avatar: "https://i.pravatar.cc/100?img=5" },
];

const groups: Group[] = [
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

const MAX_VISIBLE = 4;

export default function AvatarStack({ users = [] }: { users: User[] }) {

    const visibleUsers = users.slice(0, MAX_VISIBLE);
    const remaining = users.length - MAX_VISIBLE;

    return (
        <View style={styles.stackContainer}>
        {visibleUsers.map((user, index) => (
            <Image
            key={user.id}
            source={{ uri: user.avatar }}
            style={[
                styles.stackAvatar,
                {
                left: index * 18,
                zIndex: MAX_VISIBLE - index,
                },
            ]}
            />
        ))}
        {remaining > 0 && (
            <View
            style={[
                styles.stackAvatar,
                styles.moreAvatar,
                { left: MAX_VISIBLE * 18 },
            ]}
            >
            <Text style={styles.moreText}>+{remaining}</Text>
            </View>
        )}
        </View>
    );
};


const styles = StyleSheet.create({
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
